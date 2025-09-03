import { CheckCircle, Plus, FileText, Clock } from 'lucide-react'

const activities = [
  {
    id: 1,
    type: 'task',
    title: 'Task Updated',
    description: 'Marketing campaign review completed',
    time: '2 hours ago',
    icon: CheckCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    id: 2,
    type: 'deal',
    title: 'Deal Added',
    description: 'New client deal worth $15,000',
    time: '4 hours ago',
    icon: Plus,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    id: 3,
    type: 'article',
    title: 'Published Article',
    description: 'New blog post about product features',
    time: '6 hours ago',
    icon: FileText,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    id: 4,
    type: 'meeting',
    title: 'Meeting Scheduled',
    description: 'Team sync meeting for tomorrow',
    time: '8 hours ago',
    icon: Clock,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100'
  },
]

const Activities = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Recent Activities</h3>
          <p className="text-gray-500 text-sm">Latest updates and changes</p>
        </div>
        <button className="text-primary hover:text-purple-600 text-sm font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className={`${activity.bgColor} ${activity.color} p-2 rounded-lg flex-shrink-0`}>
              <activity.icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-gray-800 truncate">
                  {activity.title}
                </h4>
                <span className="text-xs text-gray-500 flex-shrink-0 ml-2">
                  {activity.time}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                {activity.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <button className="w-full text-center text-primary hover:text-purple-600 text-sm font-medium py-2 hover:bg-gray-50 rounded-lg transition-colors">
          Load More Activities
        </button>
      </div>
    </div>
  )
}

export default Activities