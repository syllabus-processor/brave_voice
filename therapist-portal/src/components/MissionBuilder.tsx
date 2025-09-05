'use client'

import { useState } from 'react'
import { 
  Plus,
  Target,
  Calendar,
  User,
  Settings,
  Play,
  Palette,
  Mic,
  BookOpen,
  Save,
  Send
} from 'lucide-react'

const missionTemplates = [
  {
    id: 'replay_scene',
    name: 'Replay Scene',
    icon: Play,
    description: 'Have client revisit a specific story scenario and try different choices',
    fields: ['story', 'target_choice', 'goal']
  },
  {
    id: 'brave_voice_builder',
    name: 'Brave Voice Builder', 
    icon: Mic,
    description: 'Practice assertive statements with guided prompts and voice recording',
    fields: ['situation', 'sentence_stems', 'practice_count']
  },
  {
    id: 'shield_redesign',
    name: 'Shield Redesign',
    icon: Palette,
    description: 'Create new shield design based on recent challenges or triggers',
    fields: ['trigger_scenario', 'strength_focus', 'design_prompt']
  },
  {
    id: 'in_vivo_log',
    name: 'Real-World Practice',
    icon: BookOpen,
    description: 'Document and reflect on real-life assertiveness practice',
    fields: ['situation_type', 'confidence_baseline', 'reflection_prompts']
  }
]

const mockClients = [
  { id: 1, nickname: "Client A", ageRange: "8-9" },
  { id: 2, nickname: "Client B", ageRange: "10-11" },
  { id: 3, nickname: "Client C", ageRange: "11-12" },
  { id: 4, nickname: "Client D", ageRange: "9-10" }
]

const activeMissions = [
  {
    id: 1,
    client: "Client A",
    type: "Brave Voice Builder",
    title: "Practice speaking up at recess",
    dueDate: "2025-09-08",
    status: "in_progress",
    progress: 60
  },
  {
    id: 2,
    client: "Client B", 
    type: "Shield Redesign",
    title: "Design shield for sibling conflicts",
    dueDate: "2025-09-10",
    status: "completed",
    progress: 100
  },
  {
    id: 3,
    client: "Client C",
    type: "Replay Scene",
    title: "Retry playground assertive choice",
    dueDate: "2025-09-06",
    status: "overdue",
    progress: 0
  }
]

export default function MissionBuilder() {
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [selectedClient, setSelectedClient] = useState('')
  const [missionData, setMissionData] = useState({})
  const [showCreateForm, setShowCreateForm] = useState(false)

  const handleCreateMission = () => {
    // In production, this would save to Firebase
    console.log('Creating mission:', { selectedTemplate, selectedClient, missionData })
    setShowCreateForm(false)
    setSelectedTemplate(null)
    setSelectedClient('')
    setMissionData({})
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800'
      case 'in_progress': return 'bg-blue-100 text-blue-800'
      case 'overdue': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Mission Builder</h1>
          <p className="text-gray-600">Create therapeutic assignments and track progress</p>
        </div>
        <button 
          onClick={() => setShowCreateForm(true)}
          className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          Create Mission
        </button>
      </div>

      {/* Active Missions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Active Missions</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {activeMissions.map((mission) => (
              <div key={mission.id} className="mission-card border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{mission.title}</h3>
                    <p className="text-sm text-gray-600">{mission.client} • {mission.type}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(mission.status)}`}>
                    {mission.status.replace('_', ' ')}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex-1 mr-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{mission.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary-600 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${mission.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Due</p>
                    <p className="text-sm font-medium">{mission.dueDate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Templates */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Mission Templates</h2>
          <p className="text-sm text-gray-600 mt-1">Evidence-based therapeutic assignments</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {missionTemplates.map((template) => {
              const Icon = template.icon
              return (
                <div 
                  key={template.id}
                  className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => {
                    setSelectedTemplate(template)
                    setShowCreateForm(true)
                  }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary-100 rounded-lg">
                      <Icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{template.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{template.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Create Mission Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Create New Mission</h2>
                  {selectedTemplate && (
                    <p className="text-sm text-gray-600 mt-1">{selectedTemplate.name}</p>
                  )}
                </div>
                <button 
                  onClick={() => setShowCreateForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Client Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Client
                </label>
                <select
                  value={selectedClient}
                  onChange={(e) => setSelectedClient(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Choose a client...</option>
                  {mockClients.map((client) => (
                    <option key={client.id} value={client.id}>
                      {client.nickname} (Age {client.ageRange})
                    </option>
                  ))}
                </select>
              </div>

              {/* Mission Details */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mission Title
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter mission title..."
                  value={missionData.title || ''}
                  onChange={(e) => setMissionData({...missionData, title: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description & Instructions
                </label>
                <textarea
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Provide clear instructions for the client..."
                  value={missionData.description || ''}
                  onChange={(e) => setMissionData({...missionData, description: e.target.value})}
                />
              </div>

              {/* Template-specific fields */}
              {selectedTemplate?.id === 'replay_scene' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Story Scenario
                    </label>
                    <select
                      className="w-full border border-gray-300 rounded-lg px-3 py-2"
                      value={missionData.story || ''}
                      onChange={(e) => setMissionData({...missionData, story: e.target.value})}
                    >
                      <option value="">Choose story...</option>
                      <option value="playground">Playground Equipment Sharing</option>
                      <option value="soccer">Soccer Team Inclusion</option>
                      <option value="sibling">Sibling Art Conflict</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Target Choice Type
                    </label>
                    <select
                      className="w-full border border-gray-300 rounded-lg px-3 py-2"
                      value={missionData.target_choice || ''}
                      onChange={(e) => setMissionData({...missionData, target_choice: e.target.value})}
                    >
                      <option value="">Choose approach...</option>
                      <option value="assertive">Assertive Response</option>
                      <option value="curious">Curious Inquiry</option>
                      <option value="solution_focused">Solution-Focused</option>
                    </select>
                  </div>
                </div>
              )}

              {selectedTemplate?.id === 'brave_voice_builder' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Practice Situation
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2"
                      placeholder="e.g., 'When someone cuts in line'"
                      value={missionData.situation || ''}
                      onChange={(e) => setMissionData({...missionData, situation: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sentence Stems
                    </label>
                    <textarea
                      rows={3}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2"
                      placeholder="e.g., 'Excuse me, I was in line first...'"
                      value={missionData.sentence_stems || ''}
                      onChange={(e) => setMissionData({...missionData, sentence_stems: e.target.value})}
                    />
                  </div>
                </div>
              )}

              {/* Due Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Due Date
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  value={missionData.dueDate || ''}
                  onChange={(e) => setMissionData({...missionData, dueDate: e.target.value})}
                />
              </div>

              {/* Reminder Settings */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reminder Settings
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Send guardian reminder</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Daily practice reminder</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-3">
              <button
                onClick={() => setShowCreateForm(false)}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateMission}
                className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                disabled={!selectedClient || !missionData.title}
              >
                <Send className="h-4 w-4 mr-2" />
                Create Mission
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}