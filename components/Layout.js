import { useState } from 'react';

export default function Layout({ children }) {
  const [active, setActive] = useState('devices');

  const navItems = [
    { id: 'devices', icon: '📱', label: 'Devices' },
    { id: 'favourites', icon: '⭐', label: 'Favourites' },
    { id: 'sms', icon: '💬', label: 'Messages' },
    { id: 'credentials', icon: '🔑', label: 'Credentials' },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-56 bg-card border-r border-border p-4 flex flex-col">
        <div className="text-gold text-2xl font-serif mb-8">RTO<span className="text-white">Luxury</span></div>
        <nav className="flex-1 space-y-1">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`w-full text-left px-4 py-2 rounded-lg transition flex items-center gap-3 ${
                active === item.id
                  ? 'bg-gold/10 text-gold border border-gold/20'
                  : 'text-muted hover:text-white hover:bg-card/50'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="border-t border-border pt-4 text-muted text-sm flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-gold text-dark flex items-center justify-center text-xs">A</span>
          Admin
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
