import { useState } from 'react';

export default function DeviceCard({ id, device, sms, expanded, onToggle, isFav, onFavToggle }) {
  const online = device.isOnline || device.online || false;
  const smsList = Object.values(sms || {}).slice(0, 3);

  return (
    <div 
      className={`bg-card border border-border rounded-xl p-4 mb-3 cursor-pointer transition hover:border-gold/30 ${expanded ? 'border-gold/30' : ''}`}
      onClick={onToggle}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 flex-wrap">
          <span onClick={(e) => { e.stopPropagation(); onFavToggle(); }} className="text-2xl cursor-pointer transition hover:scale-125">
            {isFav ? '⭐' : '☆'}
          </span>
          <span className="text-gold font-bold">{id}</span>
          <span className="text-muted text-xs bg-dark px-2 py-0.5 rounded-full">S-{device.serial || '—'}</span>
          <span className={`text-xs px-3 py-0.5 rounded-full ${online ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
            {online ? '🟢 Online' : '🔴 Offline'}
          </span>
        </div>
        <span className="text-muted text-xs">{device.Device_info || 'N/A'}</span>
      </div>

      {expanded && (
        <div className="mt-3 pt-3 border-t border-border space-y-2">
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
            <div><span className="text-muted">SIM 1:</span> {device.numberSim1 || 'N/A'}</div>
            <div><span className="text-muted">SIM 2:</span> {device.numberSim2 || 'N/A'}</div>
            <div className="col-span-2"><span className="text-muted">Last Seen:</span> {device.last_online ? new Date(device.last_online).toLocaleString() : 'Never'}</div>
          </div>

          {smsList.length > 0 && (
            <div className="bg-dark/50 rounded-lg p-2 space-y-1">
              <div className="text-muted text-xs">📩 Recent SMS</div>
              {smsList.map((msg, idx) => (
                <div key={idx} className="bg-dark rounded px-3 py-1 text-sm border border-border/50">
                  <span className="text-gold">{msg.sender || 'Unknown'}</span>: {msg.body || ''}
                </div>
              ))}
            </div>
          )}

          <button 
            onClick={(e) => { e.stopPropagation(); navigator.clipboard.writeText(id).then(() => alert('Copied!')) }} 
            className="bg-gold text-dark text-xs font-bold px-4 py-1 rounded-full hover:bg-gold/80 transition"
          >
            Copy ID
          </button>
        </div>
      )}
    </div>
  );
}
