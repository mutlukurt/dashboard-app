import { Home, BarChart3, Users, Settings, ShoppingCart, FileText, Bell, LogOut } from 'lucide-react'

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Users, label: 'Users' },
    { icon: ShoppingCart, label: 'Products' },
    { icon: FileText, label: 'Orders' },
    { icon: Bell, label: 'Notifications' },
    { icon: Settings, label: 'Settings' },
  ]

  return (
    <div className="w-16 lg:w-64 bg-primary h-screen fixed left-0 top-0 z-50 flex flex-col">
      {/* Logo */}
      <div className="p-4 border-b border-purple-400/20">
        <div className="hidden lg:flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <span className="text-primary font-bold">D</span>
          </div>
          <span className="text-white font-semibold text-lg">Dashboard</span>
        </div>
        <div className="lg:hidden flex justify-center">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <span className="text-primary font-bold">D</span>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 group ${
                  item.active
                    ? 'bg-white/20 text-white'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                <span className="hidden lg:block font-medium">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-purple-400/20">
        <a
          href="#"
          className="flex items-center space-x-3 p-3 rounded-xl text-white/70 hover:bg-white/10 hover:text-white transition-all duration-200"
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          <span className="hidden lg:block font-medium">Logout</span>
        </a>
      </div>
    </div>
  )
}

export default Sidebar