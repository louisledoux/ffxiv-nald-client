import React from 'react';
import StatsCard from '../components/Card/StatsCard';

function HomePage() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-4 justify-between">
        <StatsCard title="Profits" value={5000000} type="currency" color="amber" />
        <StatsCard title="Ordres de vente en cours" value={4} type="numeric" color="pink" />
        <StatsCard title="Objets suivis" value={12} type="numeric" color="blue" />
      </div>
    </div>
  );
}

export default HomePage;
