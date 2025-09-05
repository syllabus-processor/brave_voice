'use client'

import { useState } from 'react'
import { 
  FileText,
  Download,
  Calendar,
  BarChart3,
  TrendingUp,
  Award,
  Filter,
  Share,
  Eye,
  Printer
} from 'lucide-react'

const reportTemplates = [
  {
    id: 'progress_summary',
    name: 'Progress Summary',
    description: 'Comprehensive overview of client progress and achievements',
    format: 'PDF',
    audience: 'Guardian-friendly'
  },
  {
    id: 'clinical_report',
    name: 'Clinical Assessment',
    description: 'Detailed therapeutic assessment for professional use',
    format: 'PDF',
    audience: 'Clinician format'
  },
  {
    id: 'session_prep',
    name: 'Session Prep Sheet',
    description: 'Quick reference for upcoming therapeutic sessions',
    format: 'PDF',
    audience: 'Therapist use'
  },
  {
    id: 'goal_tracking',
    name: 'Goal Tracking Report',
    description: 'Track progress toward specific therapeutic goals',
    format: 'PDF',
    audience: 'Multi-purpose'
  }
]

const recentReports = [
  {
    id: 1,
    client: 'Client A',
    type: 'Progress Summary',
    dateRange: 'Aug 1 - Aug 31, 2025',
    generatedAt: '2025-09-01',
    status: 'ready'
  },
  {
    id: 2,
    client: 'Client B',
    type: 'Clinical Assessment',
    dateRange: 'Jul 15 - Aug 15, 2025',
    generatedAt: '2025-08-28',
    status: 'ready'
  },
  {
    id: 3,
    client: 'Client C',
    type: 'Session Prep Sheet',
    dateRange: 'Current session',
    generatedAt: '2025-09-05',
    status: 'generating'
  }
]

const mockClients = [
  { id: 1, nickname: "Client A", ageRange: "8-9" },
  { id: 2, nickname: "Client B", ageRange: "10-11" },
  { id: 3, nickname: "Client C", ageRange: "11-12" },
  { id: 4, nickname: "Client D", ageRange: "9-10" }
]

export default function ReportsGenerator() {
  const [selectedTemplate, setSelectedTemplate] = useState('')
  const [selectedClient, setSelectedClient] = useState('')
  const [dateRange, setDateRange] = useState({ start: '', end: '' })
  const [selectedWidgets, setSelectedWidgets] = useState([])
  const [showPreview, setShowPreview] = useState(false)

  const widgets = [
    { id: 'confidence_trend', name: 'Confidence Trend Chart', icon: TrendingUp },
    { id: 'choice_distribution', name: 'Choice Distribution Heatmap', icon: BarChart3 },
    { id: 'badges_earned', name: 'Badges & Achievements', icon: Award },
    { id: 'story_progress', name: 'Story Path Timeline', icon: FileText },
    { id: 'artifacts', name: 'Shield Designs & Voice Lines', icon: Share },
    { id: 'reflections', name: 'Session Reflections', icon: Eye }
  ]

  const handleWidgetToggle = (widgetId: string) => {
    setSelectedWidgets(prev => 
      prev.includes(widgetId) 
        ? prev.filter(id => id !== widgetId)
        : [...prev, widgetId]
    )
  }

  const generateReport = () => {
    // In production, this would call the PDF generation service
    console.log('Generating report:', {
      template: selectedTemplate,
      client: selectedClient,
      dateRange,
      widgets: selectedWidgets
    })
  }

  const previewReport = () => {
    setShowPreview(true)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600">Generate comprehensive progress reports and clinical documentation</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Report Builder */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Create New Report</h2>
          </div>
          <div className="p-6 space-y-4">
            {/* Template Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Report Template
              </label>
              <select
                value={selectedTemplate}
                onChange={(e) => setSelectedTemplate(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Choose a template...</option>
                {reportTemplates.map((template) => (
                  <option key={template.id} value={template.id}>
                    {template.name} ({template.audience})
                  </option>
                ))}
              </select>
              {selectedTemplate && (
                <p className="text-sm text-gray-600 mt-1">
                  {reportTemplates.find(t => t.id === selectedTemplate)?.description}
                </p>
              )}
            </div>

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

            {/* Date Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date Range
              </label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="date"
                  placeholder="Start date"
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  value={dateRange.start}
                  onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
                />
                <input
                  type="date"
                  placeholder="End date"
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  value={dateRange.end}
                  onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
                />
              </div>
            </div>

            {/* Widget Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Include Components
              </label>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {widgets.map((widget) => {
                  const Icon = widget.icon
                  return (
                    <label key={widget.id} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedWidgets.includes(widget.id)}
                        onChange={() => handleWidgetToggle(widget.id)}
                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <Icon className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-700">{widget.name}</span>
                    </label>
                  )
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-3 pt-4">
              <button
                onClick={previewReport}
                disabled={!selectedTemplate || !selectedClient}
                className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50"
              >
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </button>
              <button
                onClick={generateReport}
                disabled={!selectedTemplate || !selectedClient}
                className="flex-1 flex items-center justify-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50"
              >
                <Download className="h-4 w-4 mr-2" />
                Generate PDF
              </button>
            </div>
          </div>
        </div>

        {/* Report Templates */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Report Templates</h2>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              {reportTemplates.map((template) => (
                <div 
                  key={template.id}
                  className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => setSelectedTemplate(template.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{template.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{template.description}</p>
                      <div className="flex items-center mt-2 space-x-3 text-xs text-gray-500">
                        <span className="flex items-center">
                          <FileText className="h-3 w-3 mr-1" />
                          {template.format}
                        </span>
                        <span>{template.audience}</span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <FileText className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Reports</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {recentReports.map((report) => (
              <div key={report.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{report.client} - {report.type}</h3>
                  <p className="text-sm text-gray-600">{report.dateRange}</p>
                  <p className="text-xs text-gray-500 mt-1">Generated on {report.generatedAt}</p>
                </div>
                <div className="flex items-center space-x-2">
                  {report.status === 'ready' ? (
                    <>
                      <button className="flex items-center px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </button>
                      <button className="flex items-center px-3 py-1 text-sm text-primary-600 border border-primary-300 rounded hover:bg-primary-50">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </button>
                    </>
                  ) : (
                    <span className="px-3 py-1 text-sm text-yellow-600 bg-yellow-100 rounded">
                      Generating...
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Report Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">Report Preview</h2>
                <button 
                  onClick={() => setShowPreview(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Progress Summary Report Preview
                </h3>
                <div className="space-y-4 text-sm text-gray-600">
                  <p><strong>Client:</strong> {mockClients.find(c => c.id.toString() === selectedClient)?.nickname || 'Selected Client'}</p>
                  <p><strong>Report Period:</strong> {dateRange.start} to {dateRange.end}</p>
                  <p><strong>Generated:</strong> {new Date().toLocaleDateString()}</p>
                  
                  <div className="mt-6">
                    <h4 className="font-medium text-gray-900 mb-2">Report Components:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedWidgets.map(widgetId => {
                        const widget = widgets.find(w => w.id === widgetId)
                        return widget ? <li key={widgetId}>{widget.name}</li> : null
                      })}
                    </ul>
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded">
                    <p className="text-blue-800">
                      <strong>Note:</strong> This is a preview. The actual report will include detailed charts, 
                      progress metrics, and clinical observations based on the selected components.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-3">
              <button
                onClick={() => setShowPreview(false)}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Close Preview
              </button>
              <button
                onClick={() => {
                  generateReport()
                  setShowPreview(false)
                }}
                className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
              >
                <Download className="h-4 w-4 mr-2" />
                Generate Full Report
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}