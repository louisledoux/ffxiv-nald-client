import React from 'react';

type StatsCardProps = {
  title: string,
  value: number,
  type: 'numeric' | 'percent' | 'currency',
  color: string,
}
function StatsCard({
  title, value, type, color,
}: StatsCardProps) {
  function getFormattedValue() {
    switch (type) {
      case 'currency':
        return new Intl.NumberFormat('fr-FR', {
          style: 'currency',
          currency: 'EUR',
          maximumFractionDigits: 0,
        }).format(value).replace('€', 'gils');
      case 'percent':
        return `${value / 100}%`;
      case 'numeric':
      default:
        return value;
    }
  }

  const formattedValue = getFormattedValue();

  return (
    <div className={`flex flex-col w-full p-6 shadow-md rounded-lg border-t-4 border-t-${color}-300`}>
      <span className="text-gray-500">{title}</span>
      <span className="text-3xl text-slate-700 font-semibold">{formattedValue}</span>
    </div>
  );
}

export default StatsCard;
