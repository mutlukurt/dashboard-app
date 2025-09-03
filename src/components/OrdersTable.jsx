import { MoreHorizontal } from 'lucide-react'

const orders = [
  {
    id: '#INV-001',
    customer: 'John Smith',
    price: '$2,400',
    status: 'completed',
    date: '2024-01-15'
  },
  {
    id: '#INV-002',
    customer: 'Sarah Johnson',
    price: '$1,800',
    status: 'pending',
    date: '2024-01-14'
  },
  {
    id: '#INV-003',
    customer: 'Mike Wilson',
    price: '$3,200',
    status: 'processing',
    date: '2024-01-13'
  },
  {
    id: '#INV-004',
    customer: 'Emma Davis',
    price: '$950',
    status: 'completed',
    date: '2024-01-12'
  },
  {
    id: '#INV-005',
    customer: 'David Brown',
    price: '$1,600',
    status: 'cancelled',
    date: '2024-01-11'
  }
]

const getStatusStyle = (status) => {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-800'
    case 'pending':
      return 'bg-yellow-100 text-yellow-800'
    case 'processing':
      return 'bg-blue-100 text-blue-800'
    case 'cancelled':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const OrdersTable = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Recent Orders</h3>
          <p className="text-gray-500 text-sm">Latest customer orders and invoices</p>
        </div>
        <button className="text-primary hover:text-purple-600 text-sm font-medium">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-3 px-2 text-sm font-semibold text-gray-600">Invoice</th>
              <th className="text-left py-3 px-2 text-sm font-semibold text-gray-600">Customer</th>
              <th className="text-left py-3 px-2 text-sm font-semibold text-gray-600">Price</th>
              <th className="text-left py-3 px-2 text-sm font-semibold text-gray-600">Status</th>
              <th className="text-left py-3 px-2 text-sm font-semibold text-gray-600">Date</th>
              <th className="text-right py-3 px-2 text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-25 transition-colors">
                <td className="py-4 px-2">
                  <span className="text-sm font-medium text-gray-800">{order.id}</span>
                </td>
                <td className="py-4 px-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">
                        {order.customer.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <span className="text-sm text-gray-800">{order.customer}</span>
                  </div>
                </td>
                <td className="py-4 px-2">
                  <span className="text-sm font-semibold text-gray-800">{order.price}</span>
                </td>
                <td className="py-4 px-2">
                  <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium capitalize ${getStatusStyle(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-4 px-2">
                  <span className="text-sm text-gray-600">{order.date}</span>
                </td>
                <td className="py-4 px-2 text-right">
                  <button className="p-1 hover:bg-gray-100 rounded-md transition-colors">
                    <MoreHorizontal className="w-4 h-4 text-gray-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
        <span className="text-sm text-gray-500">Showing 5 of 124 orders</span>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50 transition-colors">
            Previous
          </button>
          <button className="px-3 py-1 bg-primary text-white rounded-md text-sm hover:bg-purple-600 transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrdersTable