import { useState, useEffect } from 'react';

export default function Favourites({ devices }) {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('favs');
    if (saved) setFavs(JSON.parse(saved));
  }, []);

  return (
    <div className="bg-card border border-border rounded-xl p-4">
      <h3 className="text-gold text-xl font-serif flex items-center gap-2">⭐ Favourites <span className="text-sm text-muted">({favs.length})</span></h3>
      {favs.length === 0 ? (
        <p className="text-muted text-sm mt-2">Star a device to see it here</p>
      ) : (
        <div className="mt-2 space-y-1">
          {favs.map(id => {
            const dev = devices[id] || {};
            const online = dev.isOnline || dev.online || false;
            return (
              <div key={id} className="flex justify-between items-center border-b border-border/50 py-1 text-sm">
                <span className="text-gold-light">{id}</span>
                <span className={`text-xs ${online ? 'text-green-400' : 'text-red-400'}`}>
                  {online ? '🟢 Online' : '🔴 Offline'}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
