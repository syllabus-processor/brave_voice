'use client'

import { useState } from 'react'
import { 
  Search, 
  Filter, 
  Plus, 
  MoreVertical, 
  TrendingUp, 
  TrendingDown,
  Shield,
  Calendar,
  Award,
  AlertTriangle,
  CheckCircle,
  Clock
} from 'lucide-react'

// Mock client data
const mockClients = [
  {
    id: 1,
    nickname: "Client A",
    ageRange: "8-9",
    presentingGoals: ["Sibling conflict", "Assertiveness"],
    lastActivity: "2 hours ago",
    confidenceScore: 8.2,
    confidenceTrend: "up",
    guardianConsent: true,
    flags: [],
    badges: ["Friendship Builder", "Brave Speaker", "Shield Creator"],
    sessionsCompleted: 12,
    status: "active"
  },
  {
    id: 2,
    nickname: "Client B", 
    ageRange: "10-11",
    presentingGoals: ["Peer relationships", "School conflicts"],
    lastActivity: "1 day ago",
    confidenceScore: 6.8,
    confidenceTrend: "up",
    guardianConsent: true,
    flags: ["needs_feedback"],
    badges: ["Team Player", "Patient Communicator"],
    sessionsCompleted: 8,
    status: "active"
  },
  {
    id: 3,
    nickname: "Client C",
    ageRange: "11-12", 
    presentingGoals: ["Social anxiety", "Speaking up"],
    lastActivity: "3 days ago",
    confidenceScore: 5.4,
    confidenceTrend: "down",
    guardianConsent: true,
    flags: ["overdue_mission"],
    badges: ["Calm Communicator"],
    sessionsCompleted: 6,
    status: "needs_attention"
  },
  {
    id: 4,
    nickname: "Client D",
    ageRange: "9-10",
    presentingGoals: ["Bullying response", "Self-advocacy"],
    lastActivity: "5 days ago",
    confidenceScore: 7.9,
    confidenceTrend: "stable",
    guardianConsent: false,
    flags: ["consent_pending"],
    badges: ["Brave Voice Builder", "Activity Explorer"],
    sessionsCompleted: 15,
    status: "pending_consent"
  }
]

export default function ClientManagement() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [selectedClient, setSelectedClient] = useState(null)

  const filteredClients = mockClients.filter(client => {
    const matchesSearch = client.nickname.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.presentingGoals.some(goal => goal.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesFilter = filterStatus === 'all' || client.status === filterStatus
    
    return matchesSearch && matchesFilter
  })

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-green-500" />
      case 'down': return <TrendingDown className="h-4 w-4 text-red-500" />
      default: return <div className="h-4 w-4 bg-gray-300 rounded-full" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'needs_attention': return 'bg-yellow-100 text-yellow-800'
      case 'pending_consent': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getFlagIcon = (flag: string) => {
    switch (flag) {
      case 'needs_feedback': return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      case 'overdue_mission': return <Clock className="h-4 w-4 text-red-500" />
      case 'consent_pending': return <Shield className="h-4 w-4 text-red-500" />
      default: return null
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Client Management</h1>
          <p className="text-gray-600">Monitor progress and manage therapeutic relationships</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Client
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search clients by name or goals..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2"
          >
            <option value="all">All Clients</option>
            <option value="active">Active</option>
            <option value="needs_attention">Needs Attention</option>
            <option value="pending_consent">Pending Consent</option>
          </select>
          <button className="flex items-center px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="h-4 w-4 mr-1" />
            Filters
          </button>
        </div>
      </div>

      {/* Client Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClients.map((client) => (
          <div
            key={client.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setSelectedClient(client)}
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{client.nickname}</h3>
                <p className="text-sm text-gray-500">Age {client.ageRange}</p>
              </div>
              <div className="flex items-center space-x-2">
                {client.flags.map((flag) => getFlagIcon(flag))}
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Status */}
            <div className="mb-4">
              <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(client.status)}`}>
                {client.status.replace('_', ' ')}
              </span>
            </div>

            {/* Confidence Score */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700">Confidence Score</span>
                <div className="flex items-center space-x-1">
                  {getTrendIcon(client.confidenceTrend)}
                  <span className="text-sm font-semibold">{client.confidenceScore}/10</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="confidence-meter h-2 rounded-full" 
                  style={{ width: `${(client.confidenceScore / 10) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Presenting Goals */}
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Presenting Goals</p>
              <div className="flex flex-wrap gap-1">
                {client.presentingGoals.map((goal, index) => (
                  <span key={index} className="inline-flex px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                    {goal}
                  </span>
                ))}
              </div>
            </div>

            {/* Recent Badges */}
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Recent Badges</p>
              <div className="flex flex-wrap gap-1">
                {client.badges.slice(0, 2).map((badge, index) => (
                  <span key={index} className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                    <Award className="h-3 w-3 mr-1" />
                    {badge}
                  </span>
                ))}
                {client.badges.length > 2 && (
                  <span className="inline-flex px-2 py-1 bg-gray-100 text-gray-500 rounded text-xs">
                    +{client.badges.length - 2} more
                  </span>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center text-sm text-gray-500 pt-4 border-t border-gray-100">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {client.lastActivity}
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-1" />
                {client.sessionsCompleted} sessions
              </div>
            </div>

            {/* Consent Status */}
            <div className="mt-3 flex items-center">
              {client.guardianConsent ? (
                <div className="flex items-center text-green-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Guardian consent active
                </div>
              ) : (
                <div className="flex items-center text-red-600 text-sm">
                  <AlertTriangle className="h-4 w-4 mr-1" />
                  Consent required
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Client Detail Modal */}
      {selectedClient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">{selectedClient.nickname} - Profile</h2>
                <button 
                  onClick={() => setSelectedClient(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Session Overview</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Sessions Completed:</span> {selectedClient.sessionsCompleted}</p>
                    <p><span className="font-medium">Last Activity:</span> {selectedClient.lastActivity}</p>
                    <p><span className="font-medium">Age Range:</span> {selectedClient.ageRange}</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Progress Metrics</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Confidence Score:</span> {selectedClient.confidenceScore}/10</p>
                    <p><span className="font-medium">Badges Earned:</span> {selectedClient.badges.length}</p>
                    <p><span className="font-medium">Trend:</span> {selectedClient.confidenceTrend}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="font-semibold text-gray-900 mb-3">All Badges</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedClient.badges.map((badge, index) => (
                    <span key={index} className="badge-earned px-3 py-1 rounded-full text-sm">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}