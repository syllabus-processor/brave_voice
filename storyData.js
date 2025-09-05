// Story data for Brave Voice Adventures
// Enhanced with imagery and expanded therapeutic narrative

const storyData = {
  // Main menu
  menu: {
    id: "menu",
    title: "Choose Your Adventure",
    text: "Welcome to Brave Voice Adventures! Choose a story to practice your brave communication skills.",
    image: "images/Liam's_cozy_creative_bedroom_dca9cda1.png",
    choices: [
      {
        text: "🎨 The Dragon Drawing Story",
        type: "story",
        nextScene: "scene1"
      },
      {
        text: "🎮 The Game Controller Story",
        type: "story", 
        nextScene: "game1"
      },
      {
        text: "📚 Continue Previous Story",
        type: "continue",
        nextScene: "scene1"
      }
    ]
  },

  // Original Dragon Drawing Story - Enhanced
  scene1: {
    id: "scene1",
    title: "Ruby Teases",
    text: "Liam sits at his desk, carefully adding the final touches to his colorful dragon drawing. The afternoon sun streams through his bedroom window, and Scout the golden retriever lies nearby.\n\nSudenly, Ruby barges through the door without knocking.\n\nRuby: \"Ha! That dragon doesn't even look like a dragon. More like a chicken with wings!\"\n\nLiam feels his face getting hot with embarrassment. His hands tighten around his crayon. What should he do?",
    image: "images/Liam_drawing_dragon_artwork_5f990061.png",
    choices: [
      {
        text: "Yell back at Ruby",
        type: "aggressive",
        nextScene: "scene2A"
      },
      {
        text: "Say nothing and look down",
        type: "passive",
        nextScene: "scene2B"
      },
      {
        text: "Use my Brave Voice",
        type: "assertive",
        nextScene: "scene2C"
      },
      {
        text: "Ask Ruby why she said that",
        type: "curious",
        nextScene: "scene2D"
      }
    ]
  },

  // Aggressive path - Enhanced
  scene2A: {
    id: "scene2A",
    title: "Yell Back",
    text: "Liam's face turns red as he jumps up from his chair.\n\nLiam: \"Shut up, Ruby! You're just mean and you don't know anything about art!\"\n\nRuby's eyes widen, then narrow into a smirk: \"Wow, touchy much? I was just joking. Chill out!\"\n\nShe storms off and slams the door. Liam sits alone, his heart racing and hands shaking. Scout whimpers and comes closer.\n\nWhat does Liam do next?",
    image: "images/Ruby_teasing_her_brother_8ee0924b.png",
    choices: [
      {
        text: "Throw drawing in the trash",
        type: "aggressive",
        nextScene: "scene3A1"
      },
      {
        text: "Try to calm down with deep breaths",
        type: "recovery",
        nextScene: "scene3A2"
      },
      {
        text: "Go apologize to Ruby",
        type: "repair",
        nextScene: "scene3A3"
      }
    ]
  },

  // Passive path - Enhanced
  scene2B: {
    id: "scene2B",
    title: "Stay Silent",
    text: "Liam looks down at his drawing, his shoulders slumping. He doesn't say anything.\n\nRuby: \"See? You know I'm right. Guess you know it looks bad too.\" She shrugs and starts to leave.\n\nLiam's throat feels tight. He wants to say something but the words feel stuck. He stares at his dragon drawing - it actually does look pretty good to him.\n\nWhat does Liam do?",
    image: "images/Liam_drawing_dragon_artwork_5f990061.png",
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
      },
      {
        text: "Call Ruby back to talk",
        type: "delayed_assertive",
        nextScene: "scene3B3"
      }
    ]
  },

  // Assertive path - Enhanced
  scene2C: {
    id: "scene2C", 
    title: "Use Brave Voice",
    text: "Liam takes a deep breath and stands up straight. He looks directly at Ruby.\n\nLiam: \"I feel upset when you make fun of my art. It's important to me, and I worked really hard on it. Please don't say mean things about it.\"\n\nRuby blinks, caught off guard by Liam's calm but firm voice.\n\nRuby: \"Oh... umm... I didn't realize you'd get so upset. I thought I was just joking around.\"\n\nShe shifts awkwardly in the doorway. How does Liam respond?",
    image: "images/Brave_Voice_confidence_illustration_4e492cd8.png",
    choices: [
      {
        text: "Accept her response and hang up drawing",
        type: "confident",
        nextScene: "scene3C1"
      },
      {
        text: "Still feel nervous but thank her",
        type: "cautious",
        nextScene: "scene3C2"
      },
      {
        text: "Explain why art is important to you",
        type: "educational",
        nextScene: "scene3C3"
      }
    ]
  },

  // New curious path
  scene2D: {
    id: "scene2D",
    title: "Ask Why",
    text: "Liam looks up at Ruby with genuine curiosity instead of anger.\n\nLiam: \"Why did you say that about my drawing? Do you really think it looks bad?\"\n\nRuby seems surprised by the question. She steps into the room and looks at the drawing more carefully.\n\nRuby: \"Well... actually, when I look at it closer, the colors are pretty cool. I guess I was just being a brat because I'm bored.\"\n\nHow should Liam respond?",
    image: "images/Liam_drawing_dragon_artwork_5f990061.png",
    choices: [
      {
        text: "Invite her to draw with you",
        type: "collaborative",
        nextScene: "scene3D1"
      },
      {
        text: "Tell her it hurt your feelings",
        type: "honest",
        nextScene: "scene3D2"
      },
      {
        text: "Show her other drawings you've made",
        type: "sharing",
        nextScene: "scene3D3"
      }
    ]
  },

  // Expanded endings for aggressive path
  scene3A1: {
    id: "scene3A1",
    title: "Throw Drawing Away",
    text: "In his anger and hurt, Liam crumples up his dragon drawing and throws it in the wastebasket.\n\nImmediately, he feels worse. The room feels empty now. Scout whines softly.\n\nLiam stares at the crumpled paper in the trash and regrets his choice.",
    image: "images/Liam's_cozy_creative_bedroom_dca9cda1.png",
    isEnding: true,
    outcome: {
      confidenceChange: -2,
      badge: null,
      reflection: "When we're angry, we sometimes make choices that hurt ourselves too. Liam destroyed something he worked hard on. Next time, his Brave Voice might help him handle the situation better."
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "scene1"
      },
      {
        text: "Try a different story",
        type: "menu",
        nextScene: "menu"
      }
    ]
  },

  scene3A2: {
    id: "scene3A2", 
    title: "Calm Down",
    text: "Liam sits on his bed and takes several deep breaths, just like his counselor taught him. He pets Scout's soft fur.\n\nGradually, his heart slows down. He looks at his drawing - it's still there on his desk, and it still looks good to him.\n\nLiam realizes that even though he yelled, he can still make better choices now.",
    image: "images/Liam's_cozy_creative_bedroom_dca9cda1.png",
    isEnding: true,
    outcome: {
      confidenceChange: 0,
      badge: "Self-Soother",
      reflection: "Liam learned an important skill - how to calm himself down after getting upset. This is a great first step toward using his Brave Voice next time."
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "scene1"
      },
      {
        text: "Try a different story",
        type: "menu", 
        nextScene: "menu"
      }
    ]
  },

  scene3A3: {
    id: "scene3A3",
    title: "Go Apologize",
    text: "Liam walks to Ruby's room and knocks on her door.\n\nLiam: \"Ruby? I'm sorry I yelled at you. I was really upset about what you said, but yelling wasn't okay.\"\n\nRuby opens the door, looking surprised.\n\nRuby: \"Oh... thanks for saying that. I guess I was being mean about your drawing. It's actually not that bad.\"\n\nThey both smile a little.",
    image: "images/Ruby_teasing_her_brother_8ee0924b.png",
    isEnding: true,
    outcome: {
      confidenceChange: 1,
      badge: "Relationship Repair",
      reflection: "Even when we make mistakes like yelling, we can repair relationships by apologizing and talking about our feelings. Liam showed real maturity here."
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "scene1"
      },
      {
        text: "Try a different story",
        type: "menu",
        nextScene: "menu"
      }
    ]
  },

  // Passive ending 1 - Hide art (missing scene)
  scene3B1: {
    id: "scene3B1",
    title: "Hide Drawing",
    text: "Liam quietly slides his dragon drawing under his bed where no one can see it.\n\nOut of sight, but his hurt feelings are hidden away too. He sits on his bed feeling small and unheard.\n\nScout comes over and puts his head on Liam's lap, sensing his sadness.",
    image: "images/Liam's_cozy_creative_bedroom_dca9cda1.png",
    isEnding: true,
    outcome: {
      confidenceChange: -1,
      badge: null,
      reflection: "When we hide our feelings and the things we're proud of, we end up feeling invisible. Liam's art was beautiful, but now no one can see it - just like his feelings."
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "scene1"
      },
      {
        text: "Try a different story",
        type: "menu",
        nextScene: "menu"
      }
    ]
  },

  // Passive ending 2 - Keep drawing (missing scene)
  scene3B2: {
    id: "scene3B2",
    title: "Keep Drawing Quietly", 
    text: "Liam picks up his crayons and continues working on his dragon. He feels sad but doesn't want to give up on his art.\n\nSlowly, he adds more details - scales, clouds, maybe a castle in the background. When he's finished, he looks at it and smiles a little.\n\nIt really is a good drawing, even if Ruby couldn't see it.",
    image: "images/Liam_drawing_dragon_artwork_5f990061.png",
    isEnding: true,
    outcome: {
      confidenceChange: 0,
      badge: "Quiet Artist",
      reflection: "Even when others don't appreciate our work, we can still find joy in creating. Liam showed resilience by continuing with something he loves."
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "scene1"
      },
      {
        text: "Try a different story",
        type: "menu",
        nextScene: "menu"
      }
    ]
  },

  // Delayed assertive path (missing scene)
  scene3B3: {
    id: "scene3B3",
    title: "Call Ruby Back",
    text: "Just as Ruby reaches the door, Liam finds his voice.\n\nLiam: \"Wait, Ruby... that actually did hurt my feelings. I worked really hard on this drawing.\"\n\nRuby stops and turns around, looking a bit surprised that Liam spoke up.\n\nRuby: \"Oh... I didn't think you'd get upset. I was just teasing. Maybe I shouldn't have said that.\"\n\nShe comes back to look at the drawing more carefully.",
    image: "images/Brave_Voice_confidence_illustration_4e492cd8.png",
    isEnding: true,
    outcome: {
      confidenceChange: 1,
      badge: "Delayed Courage",
      reflection: "Sometimes it takes us a moment to find our brave voice. That's okay! It's never too late to speak up for yourself, and Liam showed real courage here."
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "scene1"
      },
      {
        text: "Try a different story",
        type: "menu",
        nextScene: "menu"
      }
    ]
  },

  // Additional missing scenes for game controller story
  game2B: {
    id: "game2B",
    title: "Wait Quietly",
    text: "Liam sits down on the couch and waits, watching Ruby play his game. Minutes pass... then an hour.\n\nRuby seems to have forgotten he's waiting. Liam's excitement about playing fades into disappointment.\n\nFinally, Ruby gets up: \"Okay, I'm done. Thanks for letting me borrow it!\"\n\nBut now Liam feels too sad to enjoy playing.",
    image: "images/Liam's_cozy_creative_bedroom_dca9cda1.png",
    isEnding: true,
    outcome: {
      confidenceChange: -1,
      badge: null,
      reflection: "Waiting quietly seemed polite, but Liam lost his chance to enjoy something he was excited about. Sometimes we need to speak up for what's fair."
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "game1"
      },
      {
        text: "Back to main menu",
        type: "menu",
        nextScene: "menu"
      }
    ]
  },

  game2D: {
    id: "game2D",
    title: "Suggest Taking Turns",
    text: "Liam takes a deep breath and smiles.\n\nLiam: \"Hey Ruby, since we both want to play, how about we take turns? You can finish this level, then I'll play for a while, then you can have another turn?\"\n\nRuby pauses her game and grins: \"That's actually a really good idea! I'm almost done with this level anyway. Want to sit here and watch? I can show you the cool moves I learned.\"\n\nThey end up having fun together, both getting to play.",
    image: "images/Brave_Voice_confidence_illustration_4e492cd8.png",
    isEnding: true,
    outcome: {
      confidenceChange: 2,
      badge: "Problem Solver",
      reflection: "Liam found a solution that made both him and Ruby happy! Looking for win-win solutions shows real maturity and kindness."
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "game1"
      },
      {
        text: "Back to main menu",
        type: "menu",
        nextScene: "menu"
      }
    ]
  },

  // Game Controller Story - New scenario
  game1: {
    id: "game1",
    title: "The Missing Controller",
    text: "Liam has been looking forward to playing his new video game all week. Finally, Saturday morning arrives!\n\nBut when he goes to get his game controller, it's not where he left it. He searches everywhere and finally finds Ruby in the living room... using HIS controller.\n\nRuby: \"Oh hey, I borrowed this. I'll give it back later.\"\n\nLiam feels frustrated. He was really excited to play. What should he do?",
    image: "images/Liam's_cozy_creative_bedroom_dca9cda1.png",
    choices: [
      {
        text: "Grab the controller away from her",
        type: "aggressive",
        nextScene: "game2A"
      },
      {
        text: "Wait quietly until she's done",
        type: "passive", 
        nextScene: "game2B"
      },
      {
        text: "Use your Brave Voice to ask for it back",
        type: "assertive",
        nextScene: "game2C"
      },
      {
        text: "Suggest taking turns",
        type: "compromise",
        nextScene: "game2D"
      }
    ]
  },

  game2A: {
    id: "game2A",
    title: "Grab Controller",
    text: "Liam lunges forward and tries to grab the controller from Ruby's hands.\n\nRuby: \"Hey! What are you doing?!\"\n\nThey end up in a tug-of-war over the controller. Ruby is stronger and pulls it away.\n\nRuby: \"You can't just grab things! Now I'm definitely not sharing with you!\"\n\nShe storms off to her room with the controller. Liam is left with no game and an angry sister.",
    image: "images/Ruby_teasing_her_brother_8ee0924b.png",
    isEnding: true,
    outcome: {
      confidenceChange: -2,
      badge: null,
      reflection: "Grabbing and fighting over things usually makes the problem worse, not better. Now Liam has no controller AND Ruby is upset with him."
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "game1"
      },
      {
        text: "Back to main menu",
        type: "menu",
        nextScene: "menu"
      }
    ]
  },

  game2C: {
    id: "game2C",
    title: "Use Brave Voice for Controller",
    text: "Liam takes a breath and speaks clearly.\n\nLiam: \"I feel frustrated because that's my controller and I was planning to play with it this morning. I know you want to play too, but please give it back since it's mine.\"\n\nRuby pauses her game and looks at him.\n\nRuby: \"Oh... I didn't know you had plans. I just saw it sitting there. Here, you can have it back.\"\n\nShe hands him the controller with a smile.",
    image: "images/Brave_Voice_confidence_illustration_4e492cd8.png",
    isEnding: true,
    outcome: {
      confidenceChange: 2,
      badge: "Fair Communicator",
      reflection: "Liam used his Brave Voice to clearly explain his feelings and ask for what he needed. Because he was respectful, Ruby was happy to give the controller back!"
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "game1"
      },
      {
        text: "Back to main menu",
        type: "menu",
        nextScene: "menu"
      }
    ]
  },

  // Additional scenes for collaborative and educational paths
  scene3C3: {
    id: "scene3C3",
    title: "Explain About Art",
    text: "Liam decides to help Ruby understand why her comment hurt.\n\nLiam: \"Art is really important to me. When I draw, it makes me feel calm and happy. When someone says mean things about it, it feels like they're saying mean things about something I love.\"\n\nRuby nods slowly: \"I never thought about it that way. I guess I wouldn't like it if someone made fun of my music. I'm sorry, Liam.\"\n\nShe looks at the drawing again: \"Actually, this dragon looks pretty fierce. In a good way.\"",
    image: "images/Brave_Voice_confidence_illustration_4e492cd8.png",
    isEnding: true,
    outcome: {
      confidenceChange: 2,
      badge: "Teacher",
      reflection: "Liam not only stood up for himself but helped Ruby understand why her words hurt. Teaching others about our feelings can build stronger relationships."
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "scene1"
      },
      {
        text: "Try a different story",
        type: "menu",
        nextScene: "menu"
      }
    ]
  },

  scene3D1: {
    id: "scene3D1",
    title: "Draw Together",
    text: "Liam smiles and pushes some paper toward Ruby.\n\nLiam: \"Want to draw something with me? I have lots of colored pencils.\"\n\nRuby's face lights up: \"Really? That actually sounds fun. Maybe you could teach me how to draw dragon wings like that?\"\n\nThey spend the next hour drawing together, laughing and sharing art tips. Scout watches happily from his spot on the floor.",
    image: "images/Liam's_cozy_creative_bedroom_dca9cda1.png",
    isEnding: true,
    outcome: {
      confidenceChange: 2,
      badge: "Friendship Builder",
      reflection: "Sometimes when people say mean things, they're really just feeling left out. Liam's invitation turned a conflict into a bonding moment!"
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "scene1"
      },
      {
        text: "Try a different story",
        type: "menu",
        nextScene: "menu"
      }
    ]
  }
};

// Enhanced badges system
const badges = {
  "Calm Communicator": {
    name: "Calm Communicator",
    description: "Used Brave Voice with confidence and respect"
  },
  "Brave Beginner": {
    name: "Brave Beginner", 
    description: "First brave steps in speaking up"
  },
  "Self-Soother": {
    name: "Self-Soother",
    description: "Learned to calm down when upset"
  },
  "Quiet Artist": {
    name: "Quiet Artist",
    description: "Showed resilience through creativity"
  },
  "Relationship Repair": {
    name: "Relationship Repair",
    description: "Fixed a relationship after a mistake"
  },
  "Fair Communicator": {
    name: "Fair Communicator", 
    description: "Asked for fairness respectfully"
  },
  "Teacher": {
    name: "Teacher",
    description: "Helped someone understand your feelings"
  },
  "Friendship Builder": {
    name: "Friendship Builder",
    description: "Turned conflict into connection"
  },
  "Delayed Courage": {
    name: "Delayed Courage",
    description: "Found brave voice even after staying quiet first"
  },
  "Problem Solver": {
    name: "Problem Solver", 
    description: "Found a solution that worked for everyone"
  }
};

// Export for use in main.js
window.storyData = storyData;
window.badges = badges;