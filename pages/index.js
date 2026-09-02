import { useEffect, useState } from 'react';
import { db } from '../lib/firebase';
import { ref, onValue } from 'firebase/database';
import Layout from '../components/Layout';
import DeviceList from '../components/DeviceList';
import Favourites from '../components/Favourites';

export default function Home() {
  const [devices, setDevices] = useState({});
  const [sms, setSms] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onValue(ref(db), (snapshot) => {
      const data = snapshot.val() || {};
      setDevices(data.user_data || {});
      setSms(data.user_sms || {});
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Layout>
      <h1 className="text-2xl font-serif text-gold mb-4">📊 Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {loading ? (
            <div className="text-muted">Loading devices...</div>
          ) : (
            <DeviceList devices={devices} sms={sms} />
          )}
        </div>
        <div>
          <Favourites devices={devices} />
        </div>
      </div>
    </Layout>
  );
}
