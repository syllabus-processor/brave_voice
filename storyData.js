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
        text: "🏫 The Friendship Circle Story",
        type: "story",
        nextScene: "school1"
      },
      {
        text: "⚽ The Soccer Team Story",
        type: "story",
        nextScene: "sports1"
      },
      {
        text: "🎠 The Playground Story", 
        type: "story",
        nextScene: "playground1"
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
  scene3C1: {
    id: "scene3C1",
    title: "Accept and Display",
    text: "Liam feels proud that he used his brave voice and that Ruby listened.\n\nLiam: \"Thanks for saying that, Ruby. I accept your apology.\"\n\nHe carefully picks up his dragon drawing and pins it on his bulletin board where he can see it while he works.\n\nRuby watches: \"You know what? That actually looks really cool up there. You should keep drawing more stuff.\"\n\nLiam smiles, feeling confident about both his art and his ability to speak up for himself.",
    image: "images/Brave_Voice_confidence_illustration_4e492cd8.png",
    isEnding: true,
    outcome: {
      confidenceChange: 2,
      badge: "Confident Artist",
      reflection: "Liam used his brave voice effectively and accepted Ruby's apology gracefully. He also took pride in his work by displaying it. This shows healthy self-confidence."
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

  scene3C2: {
    id: "scene3C2",
    title: "Nervous but Grateful",
    text: "Even though Liam still feels a little nervous about standing up to Ruby, he's glad he did it.\n\nLiam: \"Thank you for apologizing, Ruby. I was scared to say something, but I'm glad I did.\"\n\nRuby: \"You didn't sound scared at all! You sounded really... grown up, I guess. Maybe I should think before I say stuff like that.\"\n\nLiam puts his drawing back on his desk, feeling proud that he found his brave voice even when it felt scary.",
    image: "images/Brave_Voice_confidence_illustration_4e492cd8.png",
    isEnding: true,
    outcome: {
      confidenceChange: 1,
      badge: "Brave Beginner",
      reflection: "It's normal to feel nervous when using our brave voice for the first time. Liam showed courage by speaking up despite his nervousness, and it led to a positive outcome."
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
  },

  scene3D2: {
    id: "scene3D2",
    title: "Share Hurt Feelings",
    text: "Liam decides to be honest about how Ruby's words affected him.\n\nLiam: \"When you said my drawing looked bad, it really hurt my feelings. I put a lot of work into it, and art is something that makes me happy.\"\n\nRuby looks down at her feet, then back at the drawing.\n\nRuby: \"I'm sorry, Liam. I didn't realize how much it meant to you. I was just being silly. Your dragon actually looks really cool - I wish I could draw like that.\"\n\nLiam feels good that he shared his feelings honestly and that Ruby understood.",
    image: "images/Brave_Voice_confidence_illustration_4e492cd8.png",
    isEnding: true,
    outcome: {
      confidenceChange: 2,
      badge: "Feelings Communicator",
      reflection: "Liam showed courage by honestly sharing how Ruby's words hurt him. This helped Ruby understand the impact of her words and led to a genuine apology."
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

  scene3D3: {
    id: "scene3D3",
    title: "Share Art Portfolio",
    text: "Liam gets excited and pulls out a folder from his desk.\n\nLiam: \"Want to see some other drawings I've made? I've been working on a whole series of fantasy creatures.\"\n\nRuby's eyes widen as she looks through the drawings: \"Wow, Liam! These are amazing! You drew all of these? This phoenix is incredible!\"\n\nLiam beams with pride. Ruby sits down next to him: \"Would you teach me how to draw fire like this?\"\n\nThey spend the afternoon drawing together, with Liam sharing his techniques.",
    image: "images/Liam's_cozy_creative_bedroom_dca9cda1.png",
    isEnding: true,
    outcome: {
      confidenceChange: 2,
      badge: "Art Mentor",
      reflection: "By sharing his artwork proudly, Liam turned a negative moment into a positive one. Confidence in our abilities can inspire others and build connections."
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

  // Third Story Arc: School Friendship Story
  school1: {
    id: "school1",
    title: "The Friendship Circle",
    text: "It's lunch time at school, and Liam walks into the cafeteria with his lunch tray. He looks around for somewhere to sit.\n\nHe sees his classmates Maya and Alex sitting together at a table, laughing and talking. They look like they're having fun.\n\nLiam approaches their table hopefully.\n\nMaya: \"Oh, sorry Liam, we're saving this spot for Emma. She'll be here any minute.\"\n\nBut Liam can see there are other empty chairs. He feels left out and confused. What should he do?",
    image: "images/School_hallway_social_situation_d8e2f85e.png",
    choices: [
      {
        text: "Get angry and tell them they're being mean",
        type: "aggressive",
        nextScene: "school2A"
      },
      {
        text: "Walk away quietly and sit alone",
        type: "passive",
        nextScene: "school2B"
      },
      {
        text: "Ask if there's room for everyone",
        type: "assertive",
        nextScene: "school2C"
      },
      {
        text: "Ask why they don't want you to sit there",
        type: "curious",
        nextScene: "school2D"
      }
    ]
  },

  // Aggressive path - School story
  school2A: {
    id: "school2A",
    title: "Get Angry",
    text: "Liam's face gets red and his voice gets loud.\n\nLiam: \"That's not fair! You're just being mean and excluding me on purpose!\"\n\nMaya and Alex look shocked and uncomfortable. Other kids nearby turn to stare.\n\nMaya: \"Whoa, Liam! We weren't trying to be mean. You don't have to yell at us.\"\n\nAlex: \"Yeah, why are you getting so upset?\"\n\nNow everyone is looking at Liam, and he feels embarrassed. What does he do next?",
    image: "images/School_hallway_social_situation_d8e2f85e.png",
    choices: [
      {
        text: "Storm off to eat lunch alone",
        type: "aggressive",
        nextScene: "school3A1"
      },
      {
        text: "Try to apologize for yelling",
        type: "repair",
        nextScene: "school3A2"
      },
      {
        text: "Explain why it felt unfair",
        type: "clarify",
        nextScene: "school3A3"
      }
    ]
  },

  // Passive path - School story
  school2B: {
    id: "school2B",
    title: "Walk Away Quietly",
    text: "Liam doesn't say anything. He just nods and walks away, feeling his stomach sink.\n\nHe finds an empty table in the corner and sits by himself. His sandwich doesn't taste very good anymore.\n\nLiam watches Maya and Alex laughing together. When Emma arrives, she sits down and they all continue having fun.\n\nLiam feels invisible and wonders if anyone would notice if he weren't there. What does he do?",
    image: "images/School_playground_friendship_scene_50f546fe.png",
    choices: [
      {
        text: "Spend the rest of lunch alone",
        type: "passive",
        nextScene: "school3B1"
      },
      {
        text: "Try to join a different group",
        type: "resilient",
        nextScene: "school3B2"
      },
      {
        text: "Go back and try to talk to them",
        type: "delayed_assertive",
        nextScene: "school3B3"
      }
    ]
  },

  // Assertive path - School story
  school2C: {
    id: "school2C",
    title: "Ask About Room",
    text: "Liam takes a breath and speaks kindly but clearly.\n\nLiam: \"I understand you're saving a seat for Emma. Is there room at the table for all of us? I'd really like to sit with you guys.\"\n\nMaya and Alex look at each other, then at the table.\n\nAlex: \"Actually, yeah, there's plenty of room. Emma can sit here, and you can sit over there.\"\n\nMaya smiles: \"Sorry, we didn't think about it that way. Of course you can sit with us!\"\n\nHow does Liam respond?",
    image: "images/Brave_Voice_confidence_illustration_4e492cd8.png",
    choices: [
      {
        text: "Sit down and join the conversation happily",
        type: "confident",
        nextScene: "school3C1"
      },
      {
        text: "Sit down but still feel a little nervous",
        type: "cautious",
        nextScene: "school3C2"
      },
      {
        text: "Thank them and invite others who look lonely",
        type: "inclusive",
        nextScene: "school3C3"
      }
    ]
  },

  // Curious path - School story
  school2D: {
    id: "school2D",
    title: "Ask Why",
    text: "Liam looks genuinely curious instead of upset.\n\nLiam: \"I'm just wondering - is there a reason you don't want me to sit here? Did I do something wrong?\"\n\nMaya looks surprised by the honest question.\n\nMaya: \"Oh no, you didn't do anything wrong! We were just... well, sometimes we like to talk about girl stuff with Emma.\"\n\nAlex adds: \"But that doesn't mean we don't like you. We just didn't think about how it would feel to be left out.\"\n\nHow should Liam respond?",
    image: "images/School_hallway_social_situation_d8e2f85e.png",
    choices: [
      {
        text: "Suggest having both friend time and group time",
        type: "problem_solving",
        nextScene: "school3D1"
      },
      {
        text: "Share how it feels to be excluded",
        type: "educational",
        nextScene: "school3D2"
      },
      {
        text: "Ask if you can sit nearby and join sometimes",
        type: "compromise",
        nextScene: "school3D3"
      }
    ]
  },

  // Aggressive endings - School story
  school3A1: {
    id: "school3A1",
    title: "Storm Off Alone",
    text: "Liam grabs his lunch tray and storms away to a table far from everyone else.\n\nHe eats his lunch in angry silence, occasionally glaring over at Maya and Alex. Other kids seem to avoid him because he looks upset.\n\nThe rest of lunch feels very long and lonely. Liam realizes his anger made the situation worse, not better.",
    image: "images/School_playground_friendship_scene_50f546fe.png",
    isEnding: true,
    outcome: {
      confidenceChange: -2,
      badge: null,
      reflection: "When we let anger take control, we often end up more alone than before. Liam's yelling pushed his classmates away and made lunch even lonelier."
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "school1"
      },
      {
        text: "Back to main menu",
        type: "menu",
        nextScene: "menu"
      }
    ]
  },

  school3A2: {
    id: "school3A2",
    title: "Try to Apologize",
    text: "Liam takes a deep breath and his voice gets quieter.\n\nLiam: \"I'm sorry I yelled at you guys. I felt left out and it made me upset, but yelling wasn't okay.\"\n\nMaya's face softens: \"Thanks for saying that, Liam. We didn't mean to make you feel left out.\"\n\nAlex nods: \"Want to sit with us? We can make room for everyone.\"\n\nLiam feels relieved that he could fix the situation.",
    image: "images/Brave_Voice_confidence_illustration_4e492cd8.png",
    isEnding: true,
    outcome: {
      confidenceChange: 1,
      badge: "Relationship Repair",
      reflection: "Liam showed real maturity by apologizing after making a mistake. This helped turn a conflict into a learning moment for everyone."
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "school1"
      },
      {
        text: "Back to main menu",
        type: "menu",
        nextScene: "menu"
      }
    ]
  },

  // Passive endings - School story
  school3B1: {
    id: "school3B1",
    title: "Eat Lunch Alone",
    text: "Liam spends the entire lunch period sitting by himself, picking at his food.\n\nHe watches other kids laughing and talking together, feeling more and more invisible. No one comes to talk to him.\n\nWhen lunch ends, Liam feels sad and wonders if he'll always eat alone. He wishes he had been brave enough to speak up.",
    image: "images/School_playground_friendship_scene_50f546fe.png",
    isEnding: true,
    outcome: {
      confidenceChange: -1,
      badge: null,
      reflection: "Sometimes staying quiet feels safer, but it can leave us feeling invisible. Liam missed a chance to advocate for himself and make connections."
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "school1"
      },
      {
        text: "Back to main menu",
        type: "menu",
        nextScene: "menu"
      }
    ]
  },

  school3B2: {
    id: "school3B2",
    title: "Join Different Group",
    text: "Liam looks around and notices Sam sitting with some other kids from his class. He walks over.\n\nLiam: \"Hi Sam, mind if I sit here?\"\n\nSam: \"Sure! We were just talking about the new superhero movie. Have you seen it?\"\n\nLiam discovers these kids are really nice and funny. Sometimes when one door closes, another opens.",
    image: "images/School_hallway_social_situation_d8e2f85e.png",
    isEnding: true,
    outcome: {
      confidenceChange: 1,
      badge: "Resilient Friend",
      reflection: "Liam showed resilience by not giving up on finding friendship. Sometimes new opportunities appear when we stay open to them."
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "school1"
      },
      {
        text: "Back to main menu",
        type: "menu",
        nextScene: "menu"
      }
    ]
  },

  // Assertive endings - School story
  school3C1: {
    id: "school3C1",
    title: "Join Conversation Happily",
    text: "Liam sits down with a big smile and jumps right into the conversation.\n\nWhen Emma arrives, she's happy to see Liam there too. The four of them end up having a great lunch together, laughing and sharing stories.\n\nLiam feels proud that he spoke up for himself in a kind way. His brave voice helped create more friendship, not less.",
    image: "images/School_hallway_social_situation_d8e2f85e.png",
    isEnding: true,
    outcome: {
      confidenceChange: 2,
      badge: "Friendship Advocate",
      reflection: "Liam used his brave voice to advocate for inclusion, and everyone benefited! Speaking up kindly can create more friendship and connection."
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "school1"
      },
      {
        text: "Back to main menu",
        type: "menu",
        nextScene: "menu"
      }
    ]
  },

  school3C3: {
    id: "school3C3",
    title: "Invite Others Too",
    text: "As Liam sits down, he notices another classmate, Jordan, eating alone nearby.\n\nLiam: \"Hey, there's room for one more if Jordan wants to join us too.\"\n\nMaya looks over: \"Jordan! Want to sit with us?\"\n\nJordan's face lights up and they come over. Now their table is full of friends, all because Liam thought about including others.",
    image: "images/School_hallway_social_situation_d8e2f85e.png",
    isEnding: true,
    outcome: {
      confidenceChange: 2,
      badge: "Inclusion Champion",
      reflection: "Liam not only advocated for himself but also thought about others who might feel left out. This is leadership through kindness!"
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "school1"
      },
      {
        text: "Back to main menu",
        type: "menu",
        nextScene: "menu"
      }
    ]
  },

  // Missing scenes for school story completion
  school3A3: {
    id: "school3A3",
    title: "Explain Feelings",
    text: "Liam takes a breath and tries to explain calmly.\n\nLiam: \"I felt hurt because it seemed like you didn't want me around. I know you're saving a seat for Emma, but there are other chairs.\"\n\nMaya nods slowly: \"I see what you mean. We didn't think about how it would feel from your side.\"\n\nAlex: \"We really weren't trying to be mean. Want to sit with us? There's definitely room.\"\n\nLiam feels better that he could explain his feelings clearly.",
    image: "images/Brave_Voice_confidence_illustration_4e492cd8.png",
    isEnding: true,
    outcome: {
      confidenceChange: 1,
      badge: "Feelings Teacher",
      reflection: "Even after yelling, Liam was able to calm down and explain his feelings clearly. This helped his friends understand and led to inclusion."
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "school1"
      },
      {
        text: "Back to main menu",
        type: "menu",
        nextScene: "menu"
      }
    ]
  },

  school3B3: {
    id: "school3B3",
    title: "Go Back and Talk",
    text: "After sitting alone for a few minutes, Liam decides to try again. He walks back to Maya and Alex's table.\n\nLiam: \"I know you said you're saving seats, but I was wondering if maybe there's room for me too? I'd really like to eat lunch with friends.\"\n\nMaya looks up with a surprised smile: \"Oh! We didn't realize you wanted to join us. Of course there's room!\"\n\nLiam feels proud that he found his brave voice, even after staying quiet at first.",
    image: "images/Brave_Voice_confidence_illustration_4e492cd8.png",
    isEnding: true,
    outcome: {
      confidenceChange: 1,
      badge: "Second Chance Courage",
      reflection: "Sometimes it takes a moment to find our brave voice. Liam showed that it's never too late to speak up for yourself and ask for what you need."
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "school1"
      },
      {
        text: "Back to main menu",
        type: "menu",
        nextScene: "menu"
      }
    ]
  },

  school3C2: {
    id: "school3C2",
    title: "Sit Down Nervously",
    text: "Liam sits down with Maya and Alex, but he still feels a little unsure about whether he's really welcome.\n\nAs lunch continues, Maya and Alex include him in their conversation and laugh at his jokes. Emma arrives and is friendly to him too.\n\nBy the end of lunch, Liam realizes his nervous feelings were unnecessary - his friends really did want him there.",
    image: "images/School_hallway_social_situation_d8e2f85e.png",
    isEnding: true,
    outcome: {
      confidenceChange: 1,
      badge: "Brave Beginner",
      reflection: "Even when using our brave voice feels scary, it often leads to good outcomes. Liam's nervousness was normal, and his courage paid off."
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "school1"
      },
      {
        text: "Back to main menu",
        type: "menu",
        nextScene: "menu"
      }
    ]
  },

  school3D1: {
    id: "school3D1",
    title: "Suggest Friend Time Solutions",
    text: "Liam thinks for a moment, then smiles.\n\nLiam: \"That makes sense that you want time to talk about girl stuff. What if sometimes you have your special friend time, and sometimes we all sit together? That way everyone gets what they need.\"\n\nMaya's eyes light up: \"That's actually a really good idea! We could do girl talk time on Mondays and group time the rest of the week.\"\n\nAlex nods: \"I like that plan. Everyone gets included!\"\n\nLiam feels proud of finding a solution that works for everyone.",
    image: "images/Brave_Voice_confidence_illustration_4e492cd8.png",
    isEnding: true,
    outcome: {
      confidenceChange: 2,
      badge: "Solution Finder",
      reflection: "Liam listened to his friends' needs and found a creative solution that included everyone. This is what great friendship looks like!"
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "school1"
      },
      {
        text: "Back to main menu",
        type: "menu",
        nextScene: "menu"
      }
    ]
  },

  school3D2: {
    id: "school3D2",
    title: "Share Exclusion Feelings",
    text: "Liam decides to help his friends understand.\n\nLiam: \"I understand you want friend time together. When I get excluded though, it makes me feel like I'm not important or that you don't like me. I know that's not what you mean, but that's how it feels.\"\n\nMaya looks thoughtful: \"I never thought about it that way. I wouldn't want to feel left out either.\"\n\nAlex adds: \"We definitely like you, Liam. We should find a way to include everyone more often.\"\n\nLiam feels good about helping his friends understand different perspectives.",
    image: "images/Brave_Voice_confidence_illustration_4e492cd8.png",
    isEnding: true,
    outcome: {
      confidenceChange: 2,
      badge: "Empathy Teacher",
      reflection: "Liam helped his friends understand how exclusion feels, creating more empathy and understanding. Teaching others about feelings helps everyone grow."
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "school1"
      },
      {
        text: "Back to main menu",
        type: "menu",
        nextScene: "menu"
      }
    ]
  },

  school3D3: {
    id: "school3D3",
    title: "Ask to Sit Nearby",
    text: "Liam thinks of a compromise.\n\nLiam: \"I understand you want to talk with Emma. Could I maybe sit at the table next to you guys? That way you can have your friend time, but I won't feel totally left out?\"\n\nMaya smiles: \"That sounds fair! And maybe when you're done with your friend talk, I could join the conversation?\"\n\n\"Definitely!\" says Alex. \"We can wave you over when we're talking about stuff everyone would enjoy.\"\n\nLiam feels good about finding a middle ground that respects everyone's needs.",
    image: "images/School_hallway_social_situation_d8e2f85e.png",
    isEnding: true,
    outcome: {
      confidenceChange: 1,
      badge: "Compromise Creator",
      reflection: "Liam found a solution that respected everyone's needs - his friends' desire for private time and his need to not feel excluded. Compromise is a valuable social skill!"
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "school1"
      },
      {
        text: "Back to main menu",
        type: "menu",
        nextScene: "menu"
      }
    ]
  },

  // Fourth Story Arc: Soccer Team Story
  sports1: {
    id: "sports1",
    title: "The Soccer Team",
    text: "It's recess time, and Liam walks out to the playground. He sees a group of kids from his class already playing soccer on the field.\n\nLiam loves soccer and has been practicing with his dad at home. He walks over hopefully with his soccer ball.\n\nTyler, one of the bigger kids, calls out: \"Sorry Liam, we already have even teams. Maybe next time.\"\n\nBut Liam can see there are only 8 kids playing, and they could easily make room for one more. What should Liam do?",
    image: "images/Kids_soccer_field_exclusion_scene_c78624f2.png",
    choices: [
      {
        text: "Get angry and say they're being unfair",
        type: "aggressive",
        nextScene: "sports2A"
      },
      {
        text: "Walk away sadly and sit alone",
        type: "passive",
        nextScene: "sports2B"
      },
      {
        text: "Ask if they could make room for one more player",
        type: "assertive",
        nextScene: "sports2C"
      },
      {
        text: "Ask why they don't want you to play",
        type: "curious",
        nextScene: "sports2D"
      }
    ]
  },

  // Sports story - Aggressive path
  sports2A: {
    id: "sports2A",
    title: "Get Angry at Team",
    text: "Liam's face gets red and he raises his voice.\n\nLiam: \"That's not fair! You guys are just being mean! There's plenty of room for me to play too!\"\n\nThe other kids stop playing and stare at him. Tyler looks annoyed.\n\nTyler: \"Whoa, Liam! Why are you yelling at us? We were just trying to keep the teams even.\"\n\nSome of the other kids look uncomfortable. Maya says quietly: \"Maybe we should just let him play...\"\n\nBut now the mood feels tense. What does Liam do next?",
    image: "images/Kids_soccer_field_exclusion_scene_c78624f2.png",
    choices: [
      {
        text: "Storm off to play alone",
        type: "aggressive",
        nextScene: "sports3A1"
      },
      {
        text: "Apologize for yelling",
        type: "repair",
        nextScene: "sports3A2"
      },
      {
        text: "Explain why soccer is important to you",
        type: "clarify",
        nextScene: "sports3A3"
      }
    ]
  },

  // Sports story - Passive path
  sports2B: {
    id: "sports2B",
    title: "Walk Away Sadly",
    text: "Liam looks down at his soccer ball and nods quietly.\n\nLiam: \"Oh... okay. Maybe next time.\"\n\nHe walks over to the bench and sits down alone, watching the other kids laugh and play together. His soccer ball sits unused beside him.\n\nLiam really wanted to play, and he knows he's good at soccer. But speaking up felt too scary.\n\nAs he watches, he notices they could really use another player - the teams are actually uneven now. What does Liam do?",
    image: "images/Kids_soccer_field_exclusion_scene_c78624f2.png",
    choices: [
      {
        text: "Sit alone for the rest of recess",
        type: "passive",
        nextScene: "sports3B1"
      },
      {
        text: "Try to join a different activity",
        type: "resilient",
        nextScene: "sports3B2"
      },
      {
        text: "Go back and ask again more confidently",
        type: "delayed_assertive",
        nextScene: "sports3B3"
      }
    ]
  },

  // Sports story - Assertive path
  sports2C: {
    id: "sports2C",
    title: "Ask for Inclusion",
    text: "Liam takes a breath and speaks clearly and kindly.\n\nLiam: \"I understand you want to keep teams even. Could we maybe make it 5 on each team instead of 4? I've been practicing soccer at home and I'd really love to play with you guys.\"\n\nTyler looks thoughtful for a moment, then at the other kids.\n\nTyler: \"Actually, that's a good idea. Having 5 on each team might be more fun anyway.\"\n\nMaya smiles: \"Yeah! Liam's really good at soccer too. Come on, you can be on our team!\"\n\nHow does Liam respond to being included?",
    image: "images/Brave_Voice_confidence_illustration_4e492cd8.png",
    choices: [
      {
        text: "Join enthusiastically and play your best",
        type: "confident",
        nextScene: "sports3C1"
      },
      {
        text: "Join but feel nervous about playing well",
        type: "cautious",
        nextScene: "sports3C2"
      },
      {
        text: "Thank them and suggest making teams more fair",
        type: "inclusive",
        nextScene: "sports3C3"
      }
    ]
  },

  // Sports story - Curious path
  sports2D: {
    id: "sports2D",
    title: "Ask Why",
    text: "Liam looks genuinely curious rather than upset.\n\nLiam: \"I'm just wondering - is there a specific reason you don't want me to play? Did I do something wrong?\"\n\nTyler seems surprised by the honest question.\n\nTyler: \"Oh no, you didn't do anything wrong! We just... well, honestly, we thought you might not want to play with us. You usually read during recess.\"\n\nMaya adds: \"Yeah, we didn't want to bother you if you preferred quiet activities.\"\n\nLiam realizes there was a misunderstanding. How should he respond?",
    image: "images/Kids_soccer_field_exclusion_scene_c78624f2.png",
    choices: [
      {
        text: "Explain that you love both reading and soccer",
        type: "clarifying",
        nextScene: "sports3D1"
      },
      {
        text: "Ask them to include you in the future",
        type: "requesting",
        nextScene: "sports3D2"
      },
      {
        text: "Suggest taking turns between quiet and active play",
        type: "problem_solving",
        nextScene: "sports3D3"
      }
    ]
  },

  // Sports story endings
  sports3A1: {
    id: "sports3A1",
    title: "Storm Off Alone",
    text: "Liam grabs his soccer ball and storms away from the group, heading to the far corner of the playground.\n\nHe kicks his ball against the fence by himself, feeling angry and left out. The other kids continue their game, but the fun energy is gone.\n\nLiam spends the rest of recess alone, wishing he had handled things differently. His anger made everyone feel bad, including himself.",
    image: "images/Kids_soccer_field_exclusion_scene_c78624f2.png",
    isEnding: true,
    outcome: {
      confidenceChange: -2,
      badge: null,
      reflection: "When we let anger control us, we often end up more isolated than before. Liam's yelling pushed his classmates away and made recess less fun for everyone."
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "sports1"
      },
      {
        text: "Back to main menu",
        type: "menu",
        nextScene: "menu"
      }
    ]
  },

  sports3A2: {
    id: "sports3A2",
    title: "Apologize for Yelling",
    text: "Liam takes a deep breath and his voice becomes calmer.\n\nLiam: \"I'm sorry I yelled at you guys. I was just really excited to play soccer, and I felt disappointed when I thought I couldn't join.\"\n\nTyler's expression softens: \"Hey, no worries, Liam. We get it. We all love soccer too.\"\n\nMaya nods: \"Want to join us? We can figure out how to make the teams work.\"\n\nLiam feels good that he could apologize and repair the situation.",
    image: "images/Brave_Voice_confidence_illustration_4e492cd8.png",
    isEnding: true,
    outcome: {
      confidenceChange: 1,
      badge: "Team Repair",
      reflection: "Liam showed maturity by apologizing after making a mistake. This helped turn a conflict into an opportunity for inclusion and friendship."
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "sports1"
      },
      {
        text: "Back to main menu",
        type: "menu",
        nextScene: "menu"
      }
    ]
  },

  sports3B1: {
    id: "sports3B1",
    title: "Sit Alone All Recess",
    text: "Liam stays on the bench for the entire recess, watching the other kids have fun playing soccer.\n\nHe bounces his ball quietly, wishing he was brave enough to ask again. The game looks really fun, and he knows he could help make it even better.\n\nWhen the bell rings for everyone to go inside, Liam feels sad that he missed out on a chance to play and make friends.",
    image: "images/Kids_soccer_field_exclusion_scene_c78624f2.png",
    isEnding: true,
    outcome: {
      confidenceChange: -1,
      badge: null,
      reflection: "Sometimes staying quiet feels safer, but it can lead to missed opportunities for fun and friendship. Liam's brave voice could have helped him join the game."
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "sports1"
      },
      {
        text: "Back to main menu",
        type: "menu",
        nextScene: "menu"
      }
    ]
  },

  sports3B2: {
    id: "sports3B2",
    title: "Find Different Activity",
    text: "Liam looks around the playground and sees some other kids playing four square nearby.\n\nLiam: \"Hey, mind if I join your game?\"\n\nJenna: \"Sure! We need a fourth player anyway. Do you know how to play?\"\n\nLiam ends up having a great time playing four square and makes some new friends. Sometimes when one activity doesn't work out, there are other fun options.",
    image: "images/Playground_equipment_sharing_conflict_75054c17.png",
    isEnding: true,
    outcome: {
      confidenceChange: 1,
      badge: "Activity Explorer",
      reflection: "Liam showed resilience by not giving up on having fun at recess. Finding alternative activities can lead to new friendships and experiences."
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "sports1"
      },
      {
        text: "Back to main menu",
        type: "menu",
        nextScene: "menu"
      }
    ]
  },

  sports3C1: {
    id: "sports3C1",
    title: "Play with Confidence",
    text: "Liam joins Maya's team with a big smile and plays his best soccer.\n\nHe passes well, encourages his teammates, and even scores a goal! Tyler comes over after the game.\n\nTyler: \"Wow, Liam! You're really good at soccer. I'm glad you asked to join us. Want to play again tomorrow?\"\n\nLiam feels proud that he used his brave voice to ask for inclusion and then showed what a good teammate he could be.",
    image: "images/Kids_soccer_field_exclusion_scene_c78624f2.png",
    isEnding: true,
    outcome: {
      confidenceChange: 2,
      badge: "Team Player",
      reflection: "Liam used his brave voice to advocate for inclusion, then showed his character through good sportsmanship. Speaking up confidently opened the door to new friendships."
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "sports1"
      },
      {
        text: "Back to main menu",
        type: "menu",
        nextScene: "menu"
      }
    ]
  },

  sports3D1: {
    id: "sports3D1",
    title: "Explain Your Interests",
    text: "Liam brightens up and explains enthusiastically.\n\nLiam: \"Oh, I love both reading and soccer! I know I usually read during recess, but that's because I thought you guys might not want me to play. I've been practicing soccer with my dad at home!\"\n\nTyler looks surprised: \"Really? We had no idea! We thought you only liked quiet activities.\"\n\nMaya nods: \"Yeah, we didn't want to interrupt your reading time. But if you like soccer too, you should definitely join us!\"\n\nLiam feels happy that he could clear up the misunderstanding by sharing more about himself.",
    image: "images/Brave_Voice_confidence_illustration_4e492cd8.png",
    isEnding: true,
    outcome: {
      confidenceChange: 2,
      badge: "Brave Speaker",
      reflection: "Liam used his brave voice to share more about his interests and clear up a misunderstanding. Being open about who we are helps others understand us better."
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "sports1"
      },
      {
        text: "Back to main menu",
        type: "menu",
        nextScene: "menu"
      }
    ]
  },

  sports3D2: {
    id: "sports3D2",
    title: "Ask for Future Inclusion",
    text: "Liam nods understandingly and speaks up clearly.\n\nLiam: \"I really appreciate you explaining that! I do love reading, but I also really enjoy soccer. Could you maybe ask me next time if I want to join? I'd love to be included when you're forming teams.\"\n\nTyler smiles: \"Absolutely! We had no idea you were interested. From now on, we'll make sure to invite you.\"\n\nMaya adds: \"And hey, since we're here now and there's still time left in recess, want to join us for the rest of the game?\"\n\nLiam feels good about speaking up for what he wants and asking for inclusion in a respectful way.",
    image: "images/Brave_Voice_confidence_illustration_4e492cd8.png",
    isEnding: true,
    outcome: {
      confidenceChange: 2,
      badge: "Calm Communicator",
      reflection: "Liam used his brave voice to clearly ask for what he wanted while being understanding of others. This kind of respectful communication builds lasting friendships."
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "sports1"
      },
      {
        text: "Back to main menu",
        type: "menu",
        nextScene: "menu"
      }
    ]
  },

  sports3D3: {
    id: "sports3D3",
    title: "Suggest Turn-Taking",
    text: "Liam thinks for a moment, then smiles with a helpful idea.\n\nLiam: \"You know what? I love both reading and soccer! Maybe we could take turns - some recesses I could join soccer, and other times I'll keep reading. That way everyone gets what they enjoy.\"\n\nTyler nods: \"That's actually a really smart idea. We never thought about doing different activities on different days.\"\n\nMaya adds: \"Yeah! And if you want to play today, you're totally welcome. Thanks for helping us figure out a good system.\"\n\nLiam feels proud that he found a solution that works for everyone.",
    image: "images/Kids_soccer_field_exclusion_scene_c78624f2.png",
    isEnding: true,
    outcome: {
      confidenceChange: 2,
      badge: "Problem Solver",
      reflection: "Liam used his brave voice to find a creative solution that respected everyone's different interests. Problem-solving like this builds stronger friendships and communities."
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "sports1"
      },
      {
        text: "Back to main menu",
        type: "menu", 
        nextScene: "menu"
      }
    ]
  },

  // Fifth Story Arc: Playground Equipment Story
  playground1: {
    id: "playground1",
    title: "The Playground Swing",
    text: "Liam arrives at the neighborhood park and sees that his favorite swing - the one with the longest chains that goes really high - is being used by an older kid named Jake.\n\nLiam has been looking forward to using that swing all day. There are other swings available, but this one is special because it's the only one that goes high enough to feel like flying.\n\nJake has been on the swing for a long time, just sitting and talking to his friend Marcus instead of actually swinging.\n\nLiam really wants to ask for a turn, but Jake is bigger and older. What should Liam do?",
    image: "images/Playground_equipment_sharing_conflict_75054c17.png",
    choices: [
      {
        text: "Tell Jake he's hogging the swing and needs to share",
        type: "aggressive",
        nextScene: "playground2A"
      },
      {
        text: "Wait quietly and hope Jake will leave soon",
        type: "passive",
        nextScene: "playground2B"
      },
      {
        text: "Politely ask if you can have a turn",
        type: "assertive",
        nextScene: "playground2C"
      },
      {
        text: "Ask how long he plans to use it",
        type: "curious",
        nextScene: "playground2D"
      }
    ]
  },

  playground2A: {
    id: "playground2A",
    title: "Demand the Swing",
    text: "Liam marches up to Jake with his hands on his hips.\n\nLiam: \"Hey! You're hogging that swing! You're not even using it right - you're just sitting there talking. Other kids want a turn too!\"\n\nJake looks surprised and annoyed. Marcus frowns at Liam.\n\nJake: \"Excuse me? Who are you to tell me what to do? I got here first, kid.\"\n\nMarcus adds: \"Yeah, we're having a conversation. Mind your own business.\"\n\nNow the older boys seem upset with Liam. What does he do next?",
    image: "images/Playground_equipment_sharing_conflict_75054c17.png",
    choices: [
      {
        text: "Keep arguing and say it's not fair",
        type: "aggressive",
        nextScene: "playground3A1"
      },
      {
        text: "Apologize for being rude",
        type: "repair",
        nextScene: "playground3A2"
      },
      {
        text: "Explain why the swing is important to you",
        type: "clarify",
        nextScene: "playground3A3"
      }
    ]
  },

  playground2B: {
    id: "playground2B",
    title: "Wait Quietly",
    text: "Liam decides to wait patiently. He sits on a nearby bench, watching Jake and Marcus continue their conversation.\n\nAfter 10 minutes, they're still just talking and barely swinging. Other kids come and go, using the other swings.\n\nLiam starts to feel like he might never get a turn. The sun is getting lower, and his mom will want to leave soon.\n\nWhat should Liam do?",
    image: "images/Playground_equipment_sharing_conflict_75054c17.png",
    choices: [
      {
        text: "Keep waiting until they leave",
        type: "passive",
        nextScene: "playground3B1"
      },
      {
        text: "Use a different swing instead",
        type: "adaptive",
        nextScene: "playground3B2"
      },
      {
        text: "Finally ask for a turn",
        type: "delayed_assertive",
        nextScene: "playground3B3"
      }
    ]
  },

  playground2C: {
    id: "playground2C",
    title: "Ask Politely",
    text: "Liam walks over and waits for a pause in their conversation.\n\nLiam: \"Excuse me, Jake? I was wondering if I could have a turn on the swing when you're done? I really love that one because it goes so high.\"\n\nJake looks surprised but not annoyed.\n\nJake: \"Oh! I didn't realize anyone was waiting. Marcus and I were just talking. How long have you been waiting?\"\n\nLiam: \"Just a few minutes. I don't mind waiting a little longer if you're still using it.\"\n\nHow does Jake respond to Liam's polite request?",
    image: "images/Brave_Voice_confidence_illustration_4e492cd8.png",
    choices: [
      {
        text: "Jake offers to share time on the swing",
        type: "successful",
        nextScene: "playground3C1"
      },
      {
        text: "Jake says just a few more minutes",
        type: "compromise",
        nextScene: "playground3C2"
      },
      {
        text: "Jake suggests they all take turns",
        type: "inclusive",
        nextScene: "playground3C3"
      }
    ]
  },

  playground3A1: {
    id: "playground3A1",
    title: "Keep Arguing",
    text: "Liam doesn't back down and keeps arguing.\n\nLiam: \"It's not fair! The playground is for everyone, not just you two! You're not even swinging!\"\n\nJake stands up from the swing, looking angry now.\n\nJake: \"Look, kid, you need to chill out. We were here first, and we can use the swing however we want.\"\n\nSome other kids start to stare at the argument. Liam realizes his aggressive approach made things worse, not better.",
    image: "images/Playground_equipment_sharing_conflict_75054c17.png",
    isEnding: true,
    outcome: {
      confidenceChange: -2,
      badge: null,
      reflection: "Liam's aggressive approach escalated the conflict and made the older kids defensive. Sometimes demanding what we want pushes others away instead of helping us get it."
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "playground1"
      },
      {
        text: "Back to main menu",
        type: "menu",
        nextScene: "menu"
      }
    ]
  },

  playground3B1: {
    id: "playground3B1",
    title: "Wait Until Too Late",
    text: "Liam continues waiting patiently on the bench, but Jake and Marcus keep talking and barely swing.\n\nAfter 20 more minutes, Liam's mom calls from across the park: \"Liam! Time to go home!\"\n\nJake and Marcus are still on the swings, chatting away. Liam never got his turn on his favorite swing.\n\nAs he walks to the car, Liam feels disappointed that he was too shy to speak up for himself.",
    image: "images/Playground_equipment_sharing_conflict_75054c17.png",
    isEnding: true,
    outcome: {
      confidenceChange: -1,
      badge: null,
      reflection: "Sometimes being too patient means missing out on things that are important to us. Liam's polite request might have led to a turn on his favorite swing."
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "playground1"
      },
      {
        text: "Back to main menu",
        type: "menu",
        nextScene: "menu"
      }
    ]
  },

  playground3A2: {
    id: "playground3A2",
    title: "Apologize for Being Rude",
    text: "Liam takes a deep breath and his voice becomes calmer.\n\nLiam: \"I'm sorry I was rude to you, Jake. I was just really excited to use that swing, and I got frustrated when I couldn't. That's not your fault.\"\n\nJake looks surprised but pleased: \"Hey, that's okay, Liam. We all get frustrated sometimes. I appreciate you apologizing.\"\n\nMarcus nods: \"Yeah, and we understand wanting to use the high swing. Want to take turns? We can share it.\"\n\nLiam feels proud that he could admit his mistake and repair the situation.",
    image: "images/Brave_Voice_confidence_illustration_4e492cd8.png",
    isEnding: true,
    outcome: {
      confidenceChange: 1,
      badge: "Team Repair",
      reflection: "Liam showed maturity by apologizing when he realized he was being rude. This helped turn a conflict into an opportunity for sharing and friendship."
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "playground1"
      },
      {
        text: "Back to main menu",
        type: "menu",
        nextScene: "menu"
      }
    ]
  },

  playground3A3: {
    id: "playground3A3",
    title: "Explain Why It's Important",
    text: "Liam speaks more calmly and explains his feelings.\n\nLiam: \"This swing is really special to me because it's the only one that goes high enough to feel like flying. I've been looking forward to using it all day.\"\n\nJake's expression softens: \"Oh, I didn't realize how much it meant to you. That's actually really cool that you love that feeling too.\"\n\nMarcus stands up: \"You know what? We were just talking anyway. Here, you can have a turn. We can chat by the monkey bars.\"\n\nLiam feels happy that sharing his feelings helped others understand him better.",
    image: "images/Playground_equipment_sharing_conflict_75054c17.png",
    isEnding: true,
    outcome: {
      confidenceChange: 2,
      badge: "Brave Speaker",
      reflection: "Liam used his brave voice to share his feelings and explain what was important to him. When we express ourselves clearly, others can understand and help us."
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "playground1"
      },
      {
        text: "Back to main menu",
        type: "menu",
        nextScene: "playground1"
      }
    ]
  },

  playground3B2: {
    id: "playground3B2",
    title: "Try a Different Swing",
    text: "Liam decides to be flexible and walks over to one of the other swings.\n\nAt first, he feels a little disappointed because it's not quite as high as his favorite. But as he starts swinging, he discovers this one actually has a really smooth motion that feels nice too.\n\nA younger girl named Emma comes over: \"Hi! I like your swing technique. Want to see who can swing the highest?\"\n\nLiam realizes that being adaptable led him to a new friend and a fun activity he wouldn't have had otherwise.",
    image: "images/Playground_equipment_sharing_conflict_75054c17.png",
    isEnding: true,
    outcome: {
      confidenceChange: 1,
      badge: "Activity Explorer",
      reflection: "Sometimes when our first choice isn't available, being flexible and trying something new can lead to unexpected fun and friendships."
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "playground1"
      },
      {
        text: "Back to main menu",
        type: "menu",
        nextScene: "menu"
      }
    ]
  },

  playground3B3: {
    id: "playground3B3",
    title: "Finally Ask for a Turn",
    text: "After waiting so long, Liam finally gets up the courage to speak up.\n\nLiam: \"Excuse me, Jake? I've been waiting here for a while. Could I please have a turn on the swing when you're done?\"\n\nJake looks up, surprised: \"Oh! I had no idea you were waiting. Marcus and I were just talking. Sure, you can have a turn right now.\"\n\nMarcus adds: \"Yeah, we've been here forever just chatting. Thanks for being so patient!\"\n\nLiam feels relieved that speaking up worked, even though he waited a long time to do it.",
    image: "images/Brave_Voice_confidence_illustration_4e492cd8.png",
    isEnding: true,
    outcome: {
      confidenceChange: 1,
      badge: "Calm Communicator",
      reflection: "Even though Liam waited a long time, he eventually found his brave voice to ask for what he needed. Sometimes speaking up takes practice and patience."
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "playground1"
      },
      {
        text: "Back to main menu",
        type: "menu",
        nextScene: "menu"
      }
    ]
  },

  playground3C1: {
    id: "playground3C1",
    title: "Jake Shares the Swing",
    text: "Jake smiles and gets up from the swing.\n\nJake: \"You know what? You asked really nicely. Here, you can have a turn. Marcus and I can finish talking over by the monkey bars.\"\n\nLiam's face lights up: \"Really? Thank you so much!\"\n\nJake: \"No problem. It's cool that you love this swing too. Enjoy!\"\n\nLiam has an amazing time on his favorite swing, and he feels proud that he asked politely and got such a kind response.",
    image: "images/Playground_equipment_sharing_conflict_75054c17.png",
    isEnding: true,
    outcome: {
      confidenceChange: 2,
      badge: "Polite Requestor",
      reflection: "Liam's polite and respectful approach worked perfectly! When we ask nicely and show appreciation, people are much more likely to help us get what we need."
    },
    choices: [
      {
        text: "Try the story again",
        type: "replay",
        nextScene: "playground1"
      },
      {
        text: "Back to main menu",
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
  },
  "Friendship Advocate": {
    name: "Friendship Advocate",
    description: "Spoke up for inclusion and belonging"
  },
  "Inclusion Champion": {
    name: "Inclusion Champion",
    description: "Made sure everyone felt welcome"
  },
  "Resilient Friend": {
    name: "Resilient Friend",
    description: "Stayed positive and found new friendships"
  },
  "Feelings Teacher": {
    name: "Feelings Teacher",
    description: "Helped others understand emotions and perspectives"
  },
  "Second Chance Courage": {
    name: "Second Chance Courage",
    description: "Found brave voice after hesitating first"
  },
  "Solution Finder": {
    name: "Solution Finder",
    description: "Created win-win solutions for everyone"
  },
  "Empathy Teacher": {
    name: "Empathy Teacher",
    description: "Helped others understand different perspectives"
  },
  "Compromise Creator": {
    name: "Compromise Creator",
    description: "Found middle ground that worked for everyone"
  },
  "Feelings Communicator": {
    name: "Feelings Communicator",
    description: "Honestly shared emotions and feelings"
  },
  "Art Mentor": {
    name: "Art Mentor",
    description: "Shared talents and inspired others"
  },
  "Confident Artist": {
    name: "Confident Artist",
    description: "Displayed work with pride and confidence"
  },
  "Team Repair": {
    name: "Team Repair",
    description: "Fixed conflicts through sincere apologies"
  },
  "Activity Explorer": {
    name: "Activity Explorer",
    description: "Found new activities when first choice didn't work"
  },
  "Team Player": {
    name: "Team Player",
    description: "Showed great sportsmanship and teamwork"
  },
  "Polite Requestor": {
    name: "Polite Requestor",
    description: "Asked for what you needed in a respectful way"
  },
  "Shield Creator": {
    name: "Shield Creator",
    description: "Designed a shield representing your brave voice"
  }
};

// Export for use in main.js
window.storyData = storyData;
window.badges = badges;