'use client'

import { useState, useEffect } from 'react'
import { 
  Users, 
  TrendingUp, 
  Award, 
  Clock,
  AlertCircle,
  CheckCircle,
  BarChart3,
  Palette,
  Mic
} from 'lucide-react'

// Mock data - in production, this would come from Firebase
const mockData = {
  totalClients: 12,
  activeThisWeek: 8,
  averageConfidence: 7.2,
  confidenceTrend: '+0.8',
  recentActivity: [
    { id: 1, client: "Client A", activity: "Completed playground story", confidence: 8, time: "2 hours ago", badge: "Friendship Builder" },
    { id: 2, client: "Client B", activity: "Created new shield design", confidence: 6, time: "4 hours ago", badge: "Shield Creator" },
    { id: 3, client: "Client C", activity: "Practiced brave voice lines", confidence: 7, time: "1 day ago", badge: "Brave Speaker" },
    { id: 4, client: "Client D", activity: "Completed soccer scenario", confidence: 9, time: "1 day ago", badge: "Team Player" },
  ],
  needsFeedback: [
    { id: 1, client: "Client E", activity: "Mission overdue", urgency: "high" },
    { id: 2, client: "Client F", activity: "New artifacts ready", urgency: "medium" },
    { id: 3, client: "Client G", activity: "Progress milestone", urgency: "low" },
  ],
  storyHeatmap: {
    playground: { passive: 25, aggressive: 15, assertive: 60 },
    soccer: { passive: 30, aggressive: 20, assertive: 50 },
    sibling: { passive: 20, aggressive: 25, assertive: 55 }
  }
}

export default function DashboardOverview() {
  const [timeRange, setTimeRange] = useState('week')

  const getConfidenceColor = (score: number) => {
    if (score >= 8) return 'text-green-600 bg-green-100'
    if (score >= 6) return 'text-yellow-600 bg-yellow-100'
    return 'text-red-600 bg-red-100'
  }

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'text-red-600 bg-red-100'
      case 'medium': return 'text-yellow-600 bg-yellow-100'
      case 'low': return 'text-blue-600 bg-blue-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Clinical Dashboard</h1>
          <p className="text-gray-600">Brave Voice Adventures - Therapeutic Monitoring</p>
        </div>
        <div className="flex space-x-3">
          <select 
            value={timeRange} 
            onChange={(e) => setTimeRange(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
          </select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Clients</p>
              <p className="text-2xl font-bold text-gray-900">{mockData.totalClients}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active This Week</p>
              <p className="text-2xl font-bold text-gray-900">{mockData.activeThisWeek}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Award className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Avg Confidence</p>
              <div className="flex items-center">
                <p className="text-2xl font-bold text-gray-900">{mockData.averageConfidence}</p>
                <span className="ml-2 text-sm text-green-600 font-medium">{mockData.confidenceTrend}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Clock className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Needs Feedback</p>
              <p className="text-2xl font-bold text-gray-900">{mockData.needsFeedback.length}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Story Heatmap */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Story Choice Heatmap</h3>
            <BarChart3 className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {Object.entries(mockData.storyHeatmap).map(([story, data]) => (
              <div key={story} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium capitalize">{story} Story</span>
                  <span className="text-gray-500">
                    {data.passive + data.aggressive + data.assertive} total choices
                  </span>
                </div>
                <div className="flex h-2 rounded-full overflow-hidden bg-gray-200">
                  <div 
                    className="bg-red-400" 
                    style={{ width: `${(data.aggressive / (data.passive + data.aggressive + data.assertive)) * 100}%` }}
                    title={`Aggressive: ${data.aggressive}%`}
                  />
                  <div 
                    className="bg-yellow-400" 
                    style={{ width: `${(data.passive / (data.passive + data.aggressive + data.assertive)) * 100}%` }}
                    title={`Passive: ${data.passive}%`}
                  />
                  <div 
                    className="bg-green-400" 
                    style={{ width: `${(data.assertive / (data.passive + data.aggressive + data.assertive)) * 100}%` }}
                    title={`Assertive: ${data.assertive}%`}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Aggressive ({data.aggressive}%)</span>
                  <span>Passive ({data.passive}%)</span>
                  <span>Assertive ({data.assertive}%)</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {mockData.recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className={`p-1 rounded-full ${getConfidenceColor(activity.confidence)}`}>
                  <CheckCircle className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.client}</p>
                  <p className="text-sm text-gray-500">{activity.activity}</p>
                  <div className="flex items-center mt-1 space-x-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {activity.badge}
                    </span>
                    <span className="text-xs text-gray-400">{activity.time}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${getConfidenceColor(activity.confidence)}`}>
                    {activity.confidence}/10
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Artifacts Collection Preview */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Latest Artifacts</h3>
          <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center space-x-3">
              <Palette className="h-8 w-8 text-purple-600" />
              <div>
                <h4 className="font-medium text-gray-900">Shield Designs</h4>
                <p className="text-sm text-gray-500">3 new designs this week</p>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center space-x-3">
              <Mic className="h-8 w-8 text-green-600" />
              <div>
                <h4 className="font-medium text-gray-900">Brave Voice Lines</h4>
                <p className="text-sm text-gray-500">12 recorded statements</p>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center space-x-3">
              <Award className="h-8 w-8 text-blue-600" />
              <div>
                <h4 className="font-medium text-gray-900">Reflections</h4>
                <p className="text-sm text-gray-500">8 session reflections</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clients Needing Feedback */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Clients Needing Feedback</h3>
        <div className="space-y-3">
          {mockData.needsFeedback.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <AlertCircle className="h-5 w-5 text-orange-500" />
                <div>
                  <p className="font-medium text-gray-900">{item.client}</p>
                  <p className="text-sm text-gray-500">{item.activity}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(item.urgency)}`}>
                  {item.urgency}
                </span>
                <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                  Review
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}