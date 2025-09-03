import Sidebar from './components/Sidebar'
import Header from './components/Header'
import SummaryCard from './components/SummaryCard'
import CustomLineChart from './components/LineChart'
import CustomPieChart from './components/PieChart'
import Activities from './components/Activities'
import OrdersTable from './components/OrdersTable'
import { ShoppingBag, Package, TrendingUp, Briefcase } from 'lucide-react'

function App() {
  const summaryData = [
    {
      title: 'Saved Products',
      value: '178+',
      icon: ShoppingBag,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      trend: { positive: true, value: 12 }
    },
    {
      title: 'Stock Products',
      value: '20+',
      icon: Package,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      trend: { positive: false, value: 5 }
    },
    {
      title: 'Sales Products',
      value: '190+',
      icon: TrendingUp,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      trend: { positive: true, value: 8 }
    },
    {
      title: 'Job Applications',
      value: '12+',
      icon: Briefcase,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      trend: { positive: true, value: 3 }
    }
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 ml-16 lg:ml-64">
        <Header />
        
        <main className="p-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {summaryData.map((card, index) => (
              <SummaryCard
                key={index}
                title={card.title}
                value={card.value}
                icon={card.icon}
                color={card.color}
                bgColor={card.bgColor}
                trend={card.trend}
              />
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Line Chart */}
            <div className="lg:col-span-2">
              <CustomLineChart />
            </div>
            
            {/* Pie Chart */}
            <div className="lg:col-span-1">
              <CustomPieChart />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activities */}
            <Activities />
            
            {/* Orders Table */}
            <OrdersTable />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App