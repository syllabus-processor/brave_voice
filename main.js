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

    // Brave Voice Builder modal
    document.getElementById('btnCloseModal').addEventListener('click', () => {
      this.closeBraveVoiceBuilder();
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

// Initialize the game when page loads
document.addEventListener('DOMContentLoaded', () => {
  new BraveVoiceGame();
});