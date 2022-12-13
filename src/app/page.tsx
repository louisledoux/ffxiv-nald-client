import React from 'react';
import StatsCard from '../components/StatsCard/StatsCard';
import Card from '../components/Card/Card';
import OrdersTable from '../containers/OrdersTable/OrdersTable';
import { mockItems } from '../mocks/orders';
import { opportunitiesMock } from '../mocks/opportunities';
import OpportunityCard from '../components/OpportunityCard/OpportunityCard';

function HomePage() {
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex flex-col gap-4 md:flex-row">
        {/* TODO: map the needed StatsCard instead */}
        <StatsCard title="Profits" value={50000000} type="currency" color="amber" />
        <StatsCard title="Ordres de vente en cours" value={2} type="numeric" color="pink" />
        <StatsCard title="Objets suivis" value={12} type="numeric" color="green" />
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-between h-full">
        <Card className="basis-2/3" title="Ordres de vente">
          <OrdersTable orders={mockItems} />
        </Card>
        <Card className="basis-1/3" title="Opportunités détectées">
          {opportunitiesMock.map((opportunity) => (
            <OpportunityCard opportunity={opportunity} />
          ))}
        </Card>
      </div>
    </div>
  );
}

export default HomePage;
