# Brave Voice Adventures

## Overview
A therapeutic web application designed to help children (ages 8-12) learn assertiveness skills through interactive storytelling. The app features the "Liam and the Brave Voice Shield" story where users make choices that demonstrate passive, aggressive, or assertive responses to sibling conflict scenarios.

## Purpose  
This tool was developed for clinical use to support counseling sessions focused on building assertiveness skills in children dealing with bullying or conflict situations, particularly with siblings.

## Current Implementation
**Status**: Enhanced therapeutic platform with comprehensive features ready for clinical deployment
**Last Updated**: September 5, 2025

## Project Architecture

### Core Features Implemented
- **Expanded Story Engine**: 5 complete story arcs with 20+ unique endings covering sibling conflicts, sports scenarios, and playground situations
- **Confidence Meter**: Visual progress tracking that responds to user choices
- **Enhanced Badge System**: 10+ achievement badges for various therapeutic milestones
- **Brave Voice Builder**: Interactive tool with speech synthesis for practicing assertiveness statements
- **Shield Designer**: HTML5 Canvas creative tool for designing personalized "Brave Voice Shields"
- **Parent Zone**: PIN-protected dashboard with progress monitoring and export capabilities
- **Progress Persistence**: Comprehensive local storage for all user activities and creations

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
Five complete therapeutic story arcs featuring Liam (10) in various conflict scenarios:

### Available Stories
1. **Sibling Art Conflict**: Ruby (13) teasing Liam's artwork - original story with 6 endings
2. **Soccer Team Exclusion**: Being left out during sports activities with peer dynamics
3. **Playground Equipment Sharing**: Negotiating with older children for fair play opportunities

### Enhanced Features
- **Voice Practice**: Web Speech API integration for hearing brave voice statements aloud
- **Creative Expression**: Shield Designer with drawing tools, color picker, and sticker overlays
- **Clinical Monitoring**: Parent Zone with PIN protection and progress export functionality

### Learning Outcomes
- 20+ different endings demonstrating various conflict resolution approaches
- 10+ specialized badges for therapeutic milestones
- Voice practice reinforcement for real-world application
- Creative tools for building confidence and self-expression
- Comprehensive progress tracking for clinical assessment

## Recent Changes
- **Story Expansion**: Added 4 new complete story arcs with diverse conflict scenarios
- **Voice Integration**: Web Speech API implementation for auditory practice reinforcement
- **Shield Designer**: HTML5 Canvas creative tool with drawing, colors, and stickers
- **Parent Zone**: PIN-protected dashboard with progress summaries and export functionality
- **Enhanced Badge System**: Expanded to 10+ specialized therapeutic achievement badges
- **UI Enhancement**: Professional interface supporting multiple new features
- **Clinical Tools**: Progress export and comprehensive monitoring capabilities
- **Phase 2 - Therapist Portal**: Complete React/Next.js clinical dashboard with story heatmaps, mission builder, progress reporting, and HIPAA-compliant data management

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