// Story data for Brave Voice Adventures
// Based on "Liam and the Brave Voice Shield" therapeutic narrative

const storyData = {
  // Starting scene
  scene1: {
    id: "scene1",
    title: "Ruby Teases",
    text: "Liam is drawing a dragon in his room when his older sister Ruby barges in.\n\nRuby: \"Ha! That dragon doesn't even look like a dragon. More like a chicken with wings!\"\n\nLiam feels embarrassed. What should he do?",
    choices: [
      {
        text: "Yell back at Ruby",
        type: "aggressive",
        nextScene: "scene2A"
      },
      {
        text: "Say nothing",
        type: "passive",
        nextScene: "scene2B"
      },
      {
        text: "Use my Brave Voice",
        type: "assertive",
        nextScene: "scene2C"
      }
    ]
  },

  // Aggressive path - Scene 2A
  scene2A: {
    id: "scene2A",
    title: "Yell Back",
    text: "Liam: \"Shut up, Ruby! You're just mean!\"\n\nRuby smirks: \"Wow, touchy much? Chill out!\"\n\nShe storms off and slams the door. Liam sits alone, heart racing. Scout the dog whimpers.\n\nWhat does Liam do next?",
    choices: [
      {
        text: "Throw drawing in the trash",
        type: "aggressive",
        nextScene: "scene3A1"
      },
      {
        text: "Try to calm down",
        type: "recovery",
        nextScene: "scene3A2"
      }
    ]
  },

  // Passive path - Scene 2B  
  scene2B: {
    id: "scene2B",
    title: "Stay Silent",
    text: "Liam looks down silently.\n\nRuby: \"Guess you know it looks bad too.\" She shrugs and leaves.\n\nLiam stares at his drawing. It still looks cool, but doubt creeps in.\n\nWhat does Liam do?",
    choices: [
      {
        text: "Hide drawing under bed",
        type: "passive",
        nextScene: "scene3B1"
      },
      {
        text: "Keep drawing quietly",
        type: "resilient",
        nextScene: "scene3B2"
      }
    ]
  },

  // Assertive path - Scene 2C
  scene2C: {
    id: "scene2C", 
    title: "Use Brave Voice",
    text: "Liam stands up, voice steady.\n\nLiam: \"I feel upset when you make fun of my art. Please stop.\"\n\nRuby blinks, caught off guard.\n\nRuby: \"Umm... okay. I didn't mean to upset you.\"\n\nShe leaves, a little awkward. How does Liam feel?",
    choices: [
      {
        text: "Feel proud and hang up drawing",
        type: "confident",
        nextScene: "scene3C1"
      },
      {
        text: "Still feel nervous",
        type: "cautious",
        nextScene: "scene3C2"
      }
    ]
  },

  // Aggressive ending 1 - Trash art
  scene3A1: {
    id: "scene3A1",
    title: "Throw Drawing Away",
    text: "Liam crumples the drawing and tosses it in the trash.\n\nThe room feels empty now. Liam feels worse than before.",
    isEnding: true,
    outcome: {
      confidenceChange: -2,
      badge: null,
      reflection: "Yelling back and trashing his art left Liam feeling powerless. Maybe next time he can try his Brave Voice."
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "scene1"
      }
    ]
  },

  // Aggressive ending 2 - Calm down
  scene3A2: {
    id: "scene3A2", 
    title: "Try to Calm Down",
    text: "Liam takes a deep breath and pets Scout.\n\nHis heart slows down. The drawing is still there on his desk.",
    isEnding: true,
    outcome: {
      confidenceChange: 0,
      badge: "Self-Soother",
      reflection: "Liam is learning that calming down helps. Could his Brave Voice make things even better next time?"
    },
    choices: [
      {
        text: "Try the story again", 
        type: "replay",
        nextScene: "scene1"
      }
    ]
  },

  // Passive ending 1 - Hide art
  scene3B1: {
    id: "scene3B1",
    title: "Hide Drawing",
    text: "Liam shoves the picture under his bed.\n\nOut of sight, but his hurt feelings are hidden too.",
    isEnding: true,
    outcome: {
      confidenceChange: -1,
      badge: null,
      reflection: "Hiding his art hid his feelings too. What would happen if he spoke up?"
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay", 
        nextScene: "scene1"
      }
    ]
  },

  // Passive ending 2 - Keep drawing
  scene3B2: {
    id: "scene3B2",
    title: "Keep Drawing Quietly", 
    text: "Liam keeps coloring. He feels sad but finishes the dragon.\n\nIt actually looks pretty good when it's done.",
    isEnding: true,
    outcome: {
      confidenceChange: 0,
      badge: "Quiet Artist",
      reflection: "Finishing his art was brave. Could saying how he feels make him even stronger?"
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "scene1"
      }
    ]
  },

  // Assertive ending 1 - Hang drawing
  scene3C1: {
    id: "scene3C1",
    title: "Hang Drawing Proudly",
    text: "Liam tapes the dragon to his wall proudly.\n\nHe used his Brave Voice and it worked! He feels stronger already.",
    isEnding: true,
    outcome: {
      confidenceChange: 2,
      badge: "Calm Communicator", 
      reflection: "Liam is proud and strong! He spoke up and showed respect for both himself and Ruby."
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "scene1"
      }
    ]
  },

  // Assertive ending 2 - Still nervous
  scene3C2: {
    id: "scene3C2",
    title: "Still Feel Nervous",
    text: "Liam sits down, voice still a little shaky.\n\nEven though he used his Brave Voice, his heart is still beating fast. That's okay—bravery takes practice.",
    isEnding: true,
    outcome: {
      confidenceChange: 1,
      badge: "Brave Beginner",
      reflection: "Even bravery feels shaky sometimes. But practice makes confidence grow stronger!"
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay", 
        nextScene: "scene1"
      }
    ]
  }
};

// Available badges that can be earned
const badges = {
  "Calm Communicator": {
    name: "Calm Communicator",
    description: "Used Brave Voice with confidence"
  },
  "Brave Beginner": {
    name: "Brave Beginner", 
    description: "First steps with Brave Voice"
  },
  "Self-Soother": {
    name: "Self-Soother",
    description: "Learned to calm down when upset"
  },
  "Quiet Artist": {
    name: "Quiet Artist",
    description: "Showed resilience through creativity"
  }
};

// Export for use in main.js
window.storyData = storyData;
window.badges = badges;