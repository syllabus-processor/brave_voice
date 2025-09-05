export interface Client {
  id: string
  nickname: string
  ageRange: string
  presentingGoals: string[]
  guardianConsent: boolean
  lastActivity: Date
  confidenceScore: number
  flags: string[]
  createdAt: Date
  language?: string
  accessAccommodations?: string[]
}

export interface Session {
  id: string
  clientId: string
  timestamp: Date
  storyPath: string
  choices: Choice[]
  confidenceChange: number
  badges: string[]
  artifacts: Artifact[]
  reflections: string[]
}

export interface Choice {
  sceneId: string
  choiceText: string
  choiceType: 'passive' | 'aggressive' | 'assertive' | 'curious'
  outcome: string
  timestamp: Date
}

export interface Artifact {
  id: string
  type: 'shield' | 'voice_line' | 'reflection'
  content: string | object
  timestamp: Date
  sessionId: string
}

export interface Mission {
  id: string
  clientId: string
  type: 'replay_scene' | 'brave_voice_builder' | 'shield_redesign' | 'in_vivo_log'
  title: string
  description: string
  template: string
  dueDate: Date
  completed: boolean
  completionData?: any
  createdAt: Date
}

export interface TherapistNote {
  id: string
  clientId: string
  sessionId?: string
  content: string
  type: 'progress' | 'observation' | 'goal' | 'concern'
  timestamp: Date
  tags: string[]
}

export interface ProgressReport {
  id: string
  clientId: string
  dateRange: {
    start: Date
    end: Date
  }
  confidenceTrend: number[]
  choiceDistribution: {
    passive: number
    aggressive: number
    assertive: number
    curious: number
  }
  badgesEarned: string[]
  missionsCompleted: number
  keyObservations: string[]
  recommendations: string[]
}