# Brave Voice Adventures

## Overview
A therapeutic web application designed to help children (ages 8-12) learn assertiveness skills through interactive storytelling. The app features the "Liam and the Brave Voice Shield" story where users make choices that demonstrate passive, aggressive, or assertive responses to sibling conflict scenarios.

## Purpose  
This tool was developed for clinical use to support counseling sessions focused on building assertiveness skills in children dealing with bullying or conflict situations, particularly with siblings.

## Current Implementation
**Status**: Fully functional prototype ready for clinical testing
**Last Updated**: September 5, 2025

## Project Architecture

### Core Features Implemented
- **Interactive Story Engine**: JSON-driven branching narrative with 6 unique endings
- **Confidence Meter**: Visual progress tracking that responds to user choices
- **Badge System**: Achievement rewards for different types of responses
- **Brave Voice Builder**: Interactive tool for practicing "I feel... when you... Please..." statements
- **Progress Persistence**: Local storage saves user progress between sessions

### Technical Stack
- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6)
- **Styling**: Custom CSS with CSS variables for theming
- **Data Storage**: localStorage for client-side persistence
- **Server**: Python HTTP server for development

### File Structure
```
├── index.html          # Main application structure
├── styles.css          # Complete UI styling with dark theme
├── storyData.js        # Story content and branching logic
├── main.js            # Game engine and interactivity
└── replit.md          # This documentation
```

## Story Content
The implemented story features Liam (10) dealing with his sister Ruby (13) teasing his artwork. The narrative includes:

### Branching Paths
1. **Aggressive Response**: Yelling back with consequences
2. **Passive Response**: Staying silent with emotional impact  
3. **Assertive Response**: Using "Brave Voice" with positive outcomes

### Learning Outcomes
- 6 different endings showing consequences of different response types
- 4+ earnable badges for various achievements
- Reflection prompts that reinforce learning
- Practice tools for real-world application

## Recent Changes
- **Story Implementation**: Complete "Liam and the Brave Voice Shield" narrative
- **UI Polish**: Professional therapeutic interface design
- **Interactivity**: Full choice system with visual feedback
- **Progress Tracking**: Confidence meter and badge achievements
- **Practice Tools**: Brave Voice Builder modal with sentence construction

## User Preferences
- **Target Audience**: Children ages 8-12 in therapeutic settings
- **Clinical Focus**: Assertiveness training and conflict resolution
- **Design Approach**: Engaging but not game-like to maintain therapeutic focus
- **Privacy**: No external data collection, local storage only

## Future Enhancements (Phase 2)
- Therapist dashboard for progress monitoring
- Additional story scenarios (school, friendship conflicts)
- Audio narration and voice recording features
- Multi-language support
- Integration with clinical record systems

## Development Notes
- Built with accessibility and child-friendly interaction in mind
- Responsive design works on tablets (primary target: Samsung Galaxy Tablet)
- No external dependencies for easy deployment
- Modular story data structure allows easy content expansion