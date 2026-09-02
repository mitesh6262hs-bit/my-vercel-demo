import { useState, useEffect } from 'react';
import DeviceCard from './DeviceCard';

export default function DeviceList({ devices, sms }) {
  const [expanded, setExpanded] = useState({});
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('favs');
    if (saved) setFavourites(JSON.parse(saved));
  }, []);

  const toggleFav = (id) => {
    const newFavs = favourites.includes(id)
      ? favourites.filter(f => f !== id)
      : [...favourites, id];
    setFavourites(newFavs);
    localStorage.setItem('favs', JSON.stringify(newFavs));
  };

  const toggleExpand = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div>
      {Object.keys(devices).length === 0 ? (
        <div className="text-muted text-center py-10">📭 No devices found</div>
      ) : (
        Object.keys(devices).map(id => (
          <DeviceCard
            key={id}
            id={id}
            device={devices[id]}
            sms={sms[id]}
            expanded={expanded[id] || false}
            onToggle={() => toggleExpand(id)}
            isFav={favourites.includes(id)}
            onFavToggle={() => toggleFav(id)}
          />
        ))
      )}
    </div>
  );
}
