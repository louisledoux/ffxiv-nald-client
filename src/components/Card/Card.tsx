import React, { ReactNode } from 'react';

type CardProps = {
  title: string,
  children: ReactNode,
  className?: string,
  extra?: ReactNode,
}
function Card({
  title, children, className, extra,
}: CardProps) {
  return (
    <div className={`${className} flex flex-col gap-4 w-full h-full p-6 shadow-md rounded-lg border-t-4`}>
      <div>
        <div className="flex flex-row justify-between">
          <h3 className="text-gray-500 mb-2">{title}</h3>
          {extra}
        </div>
        <hr />
      </div>
      {children}
    </div>
  );
}

Card.defaultProps = {
  className: '',
  extra: undefined,
};

export default Card;
