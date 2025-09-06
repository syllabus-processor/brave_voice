// Main JavaScript for Brave Voice Adventures
// Handles all game logic, UI updates, and user interactions

class BraveVoiceGame {
  constructor() {
    this.gameState = {
      currentScene: 'menu',
      confidenceLevel: 5,
      maxConfidence: 10,
      earnedBadges: [],
      completedPaths: []
    };
    
    this.elements = {
      sceneText: document.getElementById('sceneText'),
      choiceContainer: document.getElementById('choiceContainer'), 
      confidenceFill: document.getElementById('confidenceFill'),
      confidenceValue: document.getElementById('confidenceValue'),
      badgeList: document.getElementById('badgeList'),
      builderModal: document.getElementById('builderModal'),
      feelSelect: document.getElementById('feelSelect'),
      whenInput: document.getElementById('whenInput'),
      pleaseInput: document.getElementById('pleaseInput'),
      previewText: document.getElementById('previewText')
    };
    
    // Create image element for scenes
    this.sceneImage = document.createElement('img');
    this.sceneImage.className = 'scene-image';
    this.sceneImage.alt = 'Story illustration';

    // Initialize shield designer
    this.canvas = null;
    this.ctx = null;
    this.isDrawing = false;

    // Initialize parent zone
    this.parentPIN = localStorage.getItem('parentPIN') || '0000';

    this.initializeGame();
    this.setupEventListeners();
    this.loadGameState();
  }

  initializeGame() {
    this.renderScene(this.gameState.currentScene);
    this.updateConfidenceMeter();
    this.renderBadges();
  }

  setupEventListeners() {
    // Control buttons
    document.getElementById('btnReplay').addEventListener('click', () => {
      this.gameState.currentScene = 'menu';
      this.renderScene('menu');
      this.saveGameState();
    });

    document.getElementById('btnReset').addEventListener('click', () => {
      if (confirm('Are you sure you want to reset all progress?')) {
        this.resetGame();
      }
    });

    document.getElementById('btnPractice').addEventListener('click', () => {
      this.openBraveVoiceBuilder();
    });

    document.getElementById('btnShield').addEventListener('click', () => {
      this.openShieldDesigner();
    });

    document.getElementById('btnParent').addEventListener('click', () => {
      this.openParentZone();
    });

    // Therapist dashboard buttons (both header and controls)
    document.getElementById('btnTherapistHeader').addEventListener('click', () => {
      this.openTherapistDashboard();
    });
    
    const btnTherapist = document.getElementById('btnTherapist');
    if (btnTherapist) {
      btnTherapist.addEventListener('click', () => {
        this.openTherapistDashboard();
      });
    }

    // Brave Voice Builder modal
    document.getElementById('btnCloseModal').addEventListener('click', () => {
      this.closeBraveVoiceBuilder();
    });

    document.getElementById('btnPracticeSpeech').addEventListener('click', () => {
      this.speakBraveVoice();
    });
    
    document.getElementById('btnSaveLine').addEventListener('click', () => {
      this.saveBraveVoiceLine();
    });

    // Update preview as user types
    this.elements.feelSelect.addEventListener('change', () => this.updateBraveVoicePreview());
    this.elements.whenInput.addEventListener('input', () => this.updateBraveVoicePreview());
    this.elements.pleaseInput.addEventListener('input', () => this.updateBraveVoicePreview());

    // Close modal when clicking outside
    this.elements.builderModal.addEventListener('click', (e) => {
      if (e.target === this.elements.builderModal) {
        this.closeBraveVoiceBuilder();
      }
    });
  }

  renderScene(sceneId) {
    const scene = window.storyData[sceneId];
    if (!scene) {
      console.error('Scene not found:', sceneId);
      return;
    }

    // Clear scene content
    this.elements.sceneText.innerHTML = '';
    
    // Add image if scene has one
    if (scene.image) {
      this.sceneImage.src = scene.image;
      this.sceneImage.style.display = 'block';
      this.elements.sceneText.appendChild(this.sceneImage);
    } else {
      this.sceneImage.style.display = 'none';
    }
    
    // Add scene text with formatting
    const textDiv = document.createElement('div');
    textDiv.className = 'scene-text-content';
    textDiv.innerHTML = scene.text.replace(/\n/g, '<br>');
    this.elements.sceneText.appendChild(textDiv);

    // Clear and render choice buttons
    this.elements.choiceContainer.innerHTML = '';
    
    scene.choices.forEach((choice, index) => {
      const button = document.createElement('button');
      button.textContent = choice.text;
      button.className = this.getChoiceButtonClass(choice.type);
      button.addEventListener('click', () => this.makeChoice(choice));
      this.elements.choiceContainer.appendChild(button);
    });

    this.gameState.currentScene = sceneId;
  }

  getChoiceButtonClass(choiceType) {
    switch(choiceType) {
      case 'assertive':
      case 'confident':
        return 'primary';
      case 'aggressive':
        return 'danger';
      case 'replay':
        return 'ghost';
      default:
        return '';
    }
  }

  makeChoice(choice) {
    // Handle special choice types
    if (choice.type === 'menu') {
      this.renderScene('menu');
      this.saveGameState();
      return;
    }
    
    const nextScene = window.storyData[choice.nextScene];
    
    if (nextScene && nextScene.isEnding) {
      this.handleEnding(nextScene);
    }
    
    this.renderScene(choice.nextScene);
    this.saveGameState();
  }

  handleEnding(scene) {
    const outcome = scene.outcome;
    
    // Update confidence
    this.gameState.confidenceLevel = Math.max(0, Math.min(
      this.gameState.maxConfidence,
      this.gameState.confidenceLevel + outcome.confidenceChange
    ));
    
    // Award badge if earned
    if (outcome.badge && !this.gameState.earnedBadges.includes(outcome.badge)) {
      this.gameState.earnedBadges.push(outcome.badge);
      this.showBadgeEarned(outcome.badge);
    }

    // Track completed path
    if (!this.gameState.completedPaths.includes(scene.id)) {
      this.gameState.completedPaths.push(scene.id);
    }

    this.updateConfidenceMeter();
    this.renderBadges();
    
    // Show reflection after a brief delay
    setTimeout(() => {
      this.showReflection(outcome.reflection);
    }, 1000);
  }

  updateConfidenceMeter() {
    const percentage = (this.gameState.confidenceLevel / this.gameState.maxConfidence) * 100;
    this.elements.confidenceFill.style.width = `${percentage}%`;
    this.elements.confidenceValue.textContent = 
      `${this.gameState.confidenceLevel} / ${this.gameState.maxConfidence}`;
  }

  renderBadges() {
    this.elements.badgeList.innerHTML = '';
    
    this.gameState.earnedBadges.forEach(badgeName => {
      const badge = window.badges[badgeName];
      if (badge) {
        const badgeElement = document.createElement('div');
        badgeElement.className = 'badge';
        badgeElement.textContent = badge.name;
        badgeElement.title = badge.description;
        this.elements.badgeList.appendChild(badgeElement);
      }
    });

    if (this.gameState.earnedBadges.length === 0) {
      const emptyState = document.createElement('div');
      emptyState.className = 'badge';
      emptyState.textContent = 'No badges yet';
      emptyState.style.opacity = '0.5';
      this.elements.badgeList.appendChild(emptyState);
    }
  }

  showBadgeEarned(badgeName) {
    const badge = window.badges[badgeName];
    if (!badge) return;

    // Create a temporary badge notification
    const notification = document.createElement('div');
    notification.innerHTML = `<strong>🏅 Badge Earned!</strong><br>${badge.name}`;
    notification.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #22c55e;
      color: white;
      padding: 20px;
      border-radius: 12px;
      text-align: center;
      z-index: 1000;
      animation: fadeInOut 3s ease-in-out;
    `;

    document.body.appendChild(notification);
    
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 3000);
  }

  showReflection(reflectionText) {
    const reflection = document.createElement('div');
    reflection.innerHTML = `<strong>💭 Reflection:</strong><br>${reflectionText}`;
    reflection.style.cssText = `
      background: #1f2937;
      border: 2px solid #60a5fa;
      border-radius: 12px;
      padding: 16px;
      margin: 16px 0;
      font-style: italic;
    `;

    this.elements.sceneText.appendChild(reflection);
  }

  openBraveVoiceBuilder() {
    this.elements.builderModal.classList.remove('hidden');
    this.updateBraveVoicePreview();
  }

  closeBraveVoiceBuilder() {
    this.elements.builderModal.classList.add('hidden');
  }

  updateBraveVoicePreview() {
    const feel = this.elements.feelSelect.value;
    const when = this.elements.whenInput.value || 'you do something that bothers me';
    const please = this.elements.pleaseInput.value || 'please stop';

    this.elements.previewText.textContent = 
      `I feel ${feel} when ${when}. ${please.charAt(0).toUpperCase() + please.slice(1)}.`;
  }

  // Text-to-speech functionality for Brave Voice practice
  speakBraveVoice() {
    const text = this.elements.previewText.textContent;
    const practiceButton = document.getElementById('btnPracticeSpeech');
    
    // Check if browser supports speech synthesis
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      speechSynthesis.cancel();
      
      // Update button to show it's working
      const originalText = practiceButton.textContent;
      practiceButton.textContent = '🔊 Speaking...';
      practiceButton.disabled = true;
      
      // Function to set up and speak
      const speak = () => {
        // Create new utterance
        const utterance = new SpeechSynthesisUtterance(text);
        
        // Configure voice settings for children
        utterance.rate = 0.9; // Slightly slower for clarity
        utterance.pitch = 1.1; // Slightly higher pitch
        utterance.volume = 0.8;
        utterance.lang = 'en-US';
        
        // Try to use a gentle, clear voice if available
        const voices = speechSynthesis.getVoices();
        if (voices.length > 0) {
          const preferredVoice = voices.find(voice => 
            voice.name.includes('Female') || 
            voice.name.includes('Samantha') ||
            voice.name.includes('Karen') ||
            voice.name.includes('Google UK English Female') ||
            voice.name.includes('Microsoft Zira')
          );
          if (preferredVoice) {
            utterance.voice = preferredVoice;
          }
        }
        
        // Event handlers
        utterance.onstart = () => {
          console.log('Brave Voice practice started');
        };
        
        utterance.onend = () => {
          console.log('Brave Voice practice completed');
          // Reset button
          practiceButton.textContent = originalText;
          practiceButton.disabled = false;
          // Show encouragement
          this.showEncouragement();
        };
        
        utterance.onerror = (event) => {
          console.warn('Speech synthesis error:', event.error);
          // Reset button
          practiceButton.textContent = originalText;
          practiceButton.disabled = false;
          alert('Speech not available right now. Try practicing out loud instead!');
        };
        
        // Speak the text
        speechSynthesis.speak(utterance);
      };
      
      // Handle voice loading (some browsers need this)
      const voices = speechSynthesis.getVoices();
      if (voices.length === 0) {
        // Wait for voices to load
        speechSynthesis.addEventListener('voiceschanged', () => {
          speak();
        }, { once: true });
        
        // Fallback timeout in case voices don't load
        setTimeout(() => {
          if (practiceButton.disabled) {
            speak();
          }
        }, 1000);
      } else {
        speak();
      }
    } else {
      alert('Speech feature not available in your browser. Practice saying it out loud!');
    }
  }

  // Show encouragement after voice practice
  showEncouragement() {
    const encouragements = [
      'Great job practicing your Brave Voice! 🌟',
      'You sound confident and clear! Keep practicing! 💪',
      'Wonderful! Your Brave Voice is getting stronger! ⭐',
      'Excellent practice! You\'re building confidence! 🎯',
      'Amazing work! Your voice sounds brave and kind! 🏆'
    ];
    
    const randomEncouragement = encouragements[Math.floor(Math.random() * encouragements.length)];
    
    // Create a temporary encouragement message
    const encouragement = document.createElement('div');
    encouragement.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(45deg, #10b981, #059669);
      color: white;
      padding: 16px 24px;
      border-radius: 12px;
      font-weight: 600;
      text-align: center;
      z-index: 10000;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      border: 2px solid #065f46;
    `;
    encouragement.textContent = randomEncouragement;
    
    document.body.appendChild(encouragement);
    
    // Remove after 3 seconds
    setTimeout(() => {
      encouragement.remove();
    }, 3000);
  }

  // Shield Designer functionality
  openShieldDesigner() {
    const shieldModal = document.getElementById('shieldModal');
    shieldModal.classList.remove('hidden');
    
    if (!this.canvas) {
      this.initializeCanvas();
    }
  }

  initializeCanvas() {
    this.canvas = document.getElementById('shieldCanvas');
    this.ctx = this.canvas.getContext('2d');
    
    // Set up canvas with shield background
    this.drawShieldBackground();
    
    // Event listeners for drawing
    this.canvas.addEventListener('mousedown', (e) => this.startDrawing(e));
    this.canvas.addEventListener('mousemove', (e) => this.draw(e));
    this.canvas.addEventListener('mouseup', () => this.stopDrawing());
    this.canvas.addEventListener('mouseout', () => this.stopDrawing());
    
    // Touch events for mobile
    this.canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const mouseEvent = new MouseEvent('mousedown', {
        clientX: touch.clientX,
        clientY: touch.clientY
      });
      this.canvas.dispatchEvent(mouseEvent);
    });
    
    this.canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const mouseEvent = new MouseEvent('mousemove', {
        clientX: touch.clientX,
        clientY: touch.clientY
      });
      this.canvas.dispatchEvent(mouseEvent);
    });
    
    this.canvas.addEventListener('touchend', (e) => {
      e.preventDefault();
      const mouseEvent = new MouseEvent('mouseup', {});
      this.canvas.dispatchEvent(mouseEvent);
    });
    
    // Tool controls
    document.getElementById('brushSize').addEventListener('input', (e) => {
      document.getElementById('brushSizeDisplay').textContent = e.target.value + 'px';
    });
    
    // Sticker buttons
    document.querySelectorAll('.sticker-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.addSticker(e.target.dataset.sticker);
      });
    });
    
    // Control buttons
    document.getElementById('btnClearCanvas').addEventListener('click', () => {
      this.clearCanvas();
    });
    
    document.getElementById('btnCloseShield').addEventListener('click', () => {
      this.closeShieldDesigner();
    });
    
    document.getElementById('btnSaveShield').addEventListener('click', () => {
      this.saveShield();
    });
  }

  drawShieldBackground() {
    const centerX = this.canvas.width / 2;
    const centerY = this.canvas.height / 2;
    const shieldHeight = 200;
    const shieldWidth = 160;
    
    this.ctx.fillStyle = '#f8fafc';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Draw shield outline
    this.ctx.beginPath();
    this.ctx.moveTo(centerX, centerY - shieldHeight/2);
    this.ctx.lineTo(centerX + shieldWidth/2, centerY - shieldHeight/3);
    this.ctx.lineTo(centerX + shieldWidth/2, centerY + shieldHeight/3);
    this.ctx.lineTo(centerX, centerY + shieldHeight/2);
    this.ctx.lineTo(centerX - shieldWidth/2, centerY + shieldHeight/3);
    this.ctx.lineTo(centerX - shieldWidth/2, centerY - shieldHeight/3);
    this.ctx.closePath();
    
    this.ctx.fillStyle = '#ffffff';
    this.ctx.fill();
    this.ctx.strokeStyle = '#3b82f6';
    this.ctx.lineWidth = 3;
    this.ctx.stroke();
  }

  startDrawing(e) {
    this.isDrawing = true;
    this.draw(e);
  }

  draw(e) {
    if (!this.isDrawing) return;
    
    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const color = document.getElementById('colorPicker').value;
    const size = document.getElementById('brushSize').value;
    
    this.ctx.globalCompositeOperation = 'source-over';
    this.ctx.lineWidth = size;
    this.ctx.lineCap = 'round';
    this.ctx.strokeStyle = color;
    
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
  }

  stopDrawing() {
    if (this.isDrawing) {
      this.isDrawing = false;
      this.ctx.beginPath();
    }
  }

  addSticker(sticker) {
    const centerX = this.canvas.width / 2;
    const centerY = this.canvas.height / 2;
    
    this.ctx.font = '24px serif';
    this.ctx.fillStyle = 'black';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(sticker, centerX + Math.random() * 100 - 50, centerY + Math.random() * 100 - 50);
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawShieldBackground();
  }

  saveShield() {
    try {
      const dataURL = this.canvas.toDataURL('image/png');
      
      // Save to local storage
      const shields = JSON.parse(localStorage.getItem('savedShields') || '[]');
      shields.push({
        id: Date.now(),
        dataURL: dataURL,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('savedShields', JSON.stringify(shields));
      
      // Show success message
      alert('🛡️ Your Brave Voice Shield has been saved! Great work creating something that represents your inner strength!');
      
      // Award badge for first shield
      if (!this.gameState.earnedBadges.includes('Shield Creator')) {
        this.gameState.earnedBadges.push('Shield Creator');
        this.showBadgeEarned('Shield Creator');
        this.renderBadges();
        this.saveGameState();
      }
      
    } catch (error) {
      console.error('Error saving shield:', error);
      alert('Sorry, there was an error saving your shield. Please try again.');
    }
  }

  closeShieldDesigner() {
    document.getElementById('shieldModal').classList.add('hidden');
  }

  // Therapist Dashboard functionality
  openTherapistDashboard() {
    // Get the current domain
    const currentDomain = window.location.hostname;
    const therapistURL = `http://${currentDomain}:3000`;
    
    // Open in new tab/window
    window.open(therapistURL, '_blank');
  }

  // Parent Zone functionality
  openParentZone() {
    const parentModal = document.getElementById('parentModal');
    const parentContent = document.getElementById('parentContent');
    
    parentContent.innerHTML = this.renderPINEntry();
    parentModal.classList.remove('hidden');
  }

  renderPINEntry() {
    return `
      <div class="pin-entry">
        <h3>Enter Parent PIN</h3>
        <p>Please enter the 4-digit PIN to access the Parent Zone</p>
        <div class="pin-input">
          <input type="number" maxlength="1" min="0" max="9" id="pin1">
          <input type="number" maxlength="1" min="0" max="9" id="pin2">
          <input type="number" maxlength="1" min="0" max="9" id="pin3">
          <input type="number" maxlength="1" min="0" max="9" id="pin4">
        </div>
        <div class="modal-actions">
          <button onclick="window.parentZoneFunctions.closeParentZone()" class="ghost">Cancel</button>
          <button onclick="window.parentZoneFunctions.verifyPIN()" class="primary">Enter</button>
        </div>
        <p style="font-size: 12px; color: var(--muted); margin-top: 20px;">
          Default PIN: 0000 (Change this in settings)
        </p>
      </div>
    `;
  }

  verifyPIN() {
    const pin1 = document.getElementById('pin1').value;
    const pin2 = document.getElementById('pin2').value;
    const pin3 = document.getElementById('pin3').value;
    const pin4 = document.getElementById('pin4').value;
    
    const enteredPIN = pin1 + pin2 + pin3 + pin4;
    
    if (enteredPIN === this.parentPIN) {
      this.showParentDashboard();
    } else {
      alert('Incorrect PIN. Please try again.');
      // Clear PIN inputs
      document.querySelectorAll('.pin-input input').forEach(input => input.value = '');
      document.getElementById('pin1').focus();
    }
  }

  showParentDashboard() {
    const parentContent = document.getElementById('parentContent');
    parentContent.innerHTML = this.renderParentDashboard();
  }

  renderParentDashboard() {
    const braveVoiceLines = JSON.parse(localStorage.getItem('braveVoiceLines') || '[]');
    const savedShields = JSON.parse(localStorage.getItem('savedShields') || '[]');
    
    return `
      <div class="parent-dashboard">
        <h3>👨‍👩‍👧‍👦 Parent Dashboard</h3>
        
        <div class="progress-summary">
          <h3>📊 Progress Summary</h3>
          <p><strong>Confidence Level:</strong> ${this.gameState.confidence}/10</p>
          <p><strong>Stories Completed:</strong> ${this.getCompletedStoriesCount()}</p>
          <p><strong>Badges Earned:</strong> ${this.gameState.earnedBadges.length}</p>
          <p><strong>Brave Voice Practice Lines:</strong> ${braveVoiceLines.length}</p>
          <p><strong>Shields Created:</strong> ${savedShields.length}</p>
        </div>
        
        <div class="progress-summary">
          <h3>🎤 Recent Practice Lines</h3>
          ${braveVoiceLines.slice(-5).map(line => 
            `<p style="font-style: italic; margin: 8px 0;">"${line.line}"</p>`
          ).join('') || '<p>No practice lines yet.</p>'}
        </div>
        
        <div class="progress-summary">
          <h3>⚙️ Settings</h3>
          <div class="settings-toggle">
            <span>🔊 Audio Enabled</span>
            <div class="toggle-switch active" onclick="window.parentZoneFunctions.toggleSetting('audio')"></div>
          </div>
          <div class="settings-toggle">
            <span>📤 Sharing Enabled</span>
            <div class="toggle-switch" onclick="window.parentZoneFunctions.toggleSetting('sharing')"></div>
          </div>
        </div>
        
        <div class="modal-actions">
          <button onclick="window.parentZoneFunctions.exportProgress()" class="secondary">📤 Export Progress</button>
          <button onclick="window.parentZoneFunctions.closeParentZone()" class="ghost">Close</button>
          <button onclick="window.parentZoneFunctions.resetAllProgress()" class="danger">🗑️ Reset All Progress</button>
        </div>
      </div>
    `;
  }

  getCompletedStoriesCount() {
    // Count unique story prefixes that have been visited
    const visitedScenes = this.gameState.visitedScenes || [];
    const completedStories = new Set();
    
    visitedScenes.forEach(sceneId => {
      if (sceneId.includes('3') && (sceneId.includes('A') || sceneId.includes('B') || sceneId.includes('C'))) {
        const storyPrefix = sceneId.replace(/[0-9][ABC][0-9]*/, '');
        completedStories.add(storyPrefix);
      }
    });
    
    return completedStories.size;
  }

  toggleSetting(setting) {
    // This would toggle settings in a real app
    alert(`${setting} setting toggled! (Feature demonstration)`);
  }

  exportProgress() {
    const exportData = {
      confidence: this.gameState.confidence,
      badges: this.gameState.earnedBadges,
      braveVoiceLines: JSON.parse(localStorage.getItem('braveVoiceLines') || '[]'),
      visitedScenes: this.gameState.visitedScenes || [],
      exportDate: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = 'brave-voice-progress.json';
    link.click();
    
    alert('📄 Progress report exported! This can be shared with therapists or counselors.');
  }

  resetAllProgress() {
    if (confirm('⚠️ This will delete ALL progress, including stories, badges, practice lines, and shields. Are you sure?')) {
      if (confirm('This action cannot be undone. Continue?')) {
        this.resetGame();
        localStorage.removeItem('braveVoiceLines');
        localStorage.removeItem('savedShields');
        alert('🔄 All progress has been reset.');
        this.closeParentZone();
      }
    }
  }

  closeParentZone() {
    document.getElementById('parentModal').classList.add('hidden');
  }

  saveBraveVoiceLine() {
    const braveVoiceLine = this.elements.previewText.textContent;
    
    // Store the line locally (in a real app, might send to therapist dashboard)
    let savedLines = JSON.parse(localStorage.getItem('braveVoiceLines') || '[]');
    savedLines.push({
      line: braveVoiceLine,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('braveVoiceLines', JSON.stringify(savedLines));

    // Show confirmation
    alert('Your Brave Voice line has been saved! Great practice!');
    this.closeBraveVoiceBuilder();

    // Award badge for first time using builder
    if (!this.gameState.earnedBadges.includes('Voice Builder')) {
      this.gameState.earnedBadges.push('Voice Builder');
      this.showBadgeEarned('Voice Builder');
      this.renderBadges();
      this.saveGameState();
    }
  }

  resetGame() {
    this.gameState = {
      currentScene: 'menu',
      confidenceLevel: 5,
      maxConfidence: 10,
      earnedBadges: [],
      completedPaths: []
    };
    
    localStorage.removeItem('braveVoiceGameState');
    localStorage.removeItem('braveVoiceLines');
    
    this.renderScene('menu');
    this.updateConfidenceMeter(); 
    this.renderBadges();
  }

  saveGameState() {
    localStorage.setItem('braveVoiceGameState', JSON.stringify(this.gameState));
  }

  loadGameState() {
    const saved = localStorage.getItem('braveVoiceGameState');
    if (saved) {
      try {
        this.gameState = { ...this.gameState, ...JSON.parse(saved) };
        this.renderScene(this.gameState.currentScene);
        this.updateConfidenceMeter();
        this.renderBadges();
      } catch (e) {
        console.error('Error loading game state:', e);
      }
    }
  }
}

// Add Voice Builder badge to available badges
window.badges['Voice Builder'] = {
  name: 'Voice Builder',
  description: 'Practiced creating Brave Voice statements'
};

// Add CSS animation for badge notifications
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInOut {
    0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
    20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
    80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
    100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
  }
`;
document.head.appendChild(style);

// Global functions for parent zone (avoiding scope issues)
window.parentZoneFunctions = {
  closeParentZone: () => {
    document.getElementById('parentModal').classList.add('hidden');
  },
  
  verifyPIN: () => {
    const pin1 = document.getElementById('pin1').value;
    const pin2 = document.getElementById('pin2').value;
    const pin3 = document.getElementById('pin3').value;
    const pin4 = document.getElementById('pin4').value;
    
    const enteredPIN = pin1 + pin2 + pin3 + pin4;
    const storedPIN = localStorage.getItem('parentPIN') || '0000';
    
    if (enteredPIN === storedPIN) {
      window.game.showParentDashboard();
    } else {
      alert('Incorrect PIN. Please try again.');
      document.querySelectorAll('.pin-input input').forEach(input => input.value = '');
      document.getElementById('pin1').focus();
    }
  },
  
  exportProgress: () => {
    const gameState = JSON.parse(localStorage.getItem('braveVoiceGameState') || '{}');
    const exportData = {
      confidence: gameState.confidence || 5,
      badges: gameState.earnedBadges || [],
      braveVoiceLines: JSON.parse(localStorage.getItem('braveVoiceLines') || '[]'),
      visitedScenes: gameState.visitedScenes || [],
      exportDate: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = 'brave-voice-progress.json';
    link.click();
    
    alert('📄 Progress report exported! This can be shared with therapists or counselors.');
  },
  
  resetAllProgress: () => {
    if (confirm('⚠️ This will delete ALL progress, including stories, badges, practice lines, and shields. Are you sure?')) {
      if (confirm('This action cannot be undone. Continue?')) {
        localStorage.removeItem('braveVoiceGameState');
        localStorage.removeItem('braveVoiceLines');
        localStorage.removeItem('savedShields');
        alert('🔄 All progress has been reset.');
        window.parentZoneFunctions.closeParentZone();
        if (window.game) {
          window.game.loadGameState();
          window.game.renderScene('menu');
        }
      }
    }
  },
  
  toggleSetting: (setting) => {
    alert(`${setting} setting toggled! (Feature demonstration)`);
  }
};

// Initialize the game when page loads
document.addEventListener('DOMContentLoaded', () => {
  window.game = new BraveVoiceGame();
});