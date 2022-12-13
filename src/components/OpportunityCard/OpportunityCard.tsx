import React from 'react';
import Image from 'next/image';
import { IOpportunity } from '../../mocks/opportunities';
import ArrowLongRightIcon from '../../assets/icons/ArrowLongRightIcon';

/*
  Needed for an opportunity :
  - Item ID
  - Item Name
  - Server to buy
  - Server to sell
  - Potential profit
  - Margin rate
  - Sell velocity
 */

/*
  TODO: create gil currency formatter function as domain function
 */

type OpportunityCardProps = {
  opportunity: IOpportunity,
}
function OpportunityCard({
  opportunity,
}: OpportunityCardProps) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-semibold text-slate-700">
        {opportunity.itemName}
      </span>
      <div className="flex flex-row gap-4 items-center justify-between text-sm text-gray-500">
        <div className="flex flex-col">
          <span>{opportunity.buyServer.serverName}</span>
          <span>
            {opportunity.buyServer.itemPrice}
            {' '}
            gils
          </span>
        </div>
        <div className="flex flex-col">
          <ArrowLongRightIcon />
          <span>
            (
            {opportunity.buyServer.quantity}
            )
          </span>
        </div>
        <div className="flex flex-col">
          <span>{opportunity.sellServer.serverName}</span>
          <span>
            {opportunity.sellServer.itemPrice}
            {' '}
            gils
          </span>
        </div>
      </div>
      <hr className="mt-4" />
    </div>
  );
}

export default OpportunityCard;
