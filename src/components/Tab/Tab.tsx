import React from 'react';

type TabProps = {
  value: string,
  text: string,
  privateProps?: {
    isActive: boolean,
    // eslint-disable-next-line no-unused-vars
    handleTabClick: (value: string) => void,
  },
}
function Tab({
  value, text, privateProps,
}: TabProps) {
  const { isActive } = privateProps;
  return (
    <li>
      <button
        type="button"
        className={`font-medium transition ease-in-out duration-150
          flex whitespace-nowrap max-w-xs truncate px-4 py-3
          focus:outline-0 focus:ring-0 text-gray-400
          active:text-slate-600 active:border-slate-600
          ${isActive
          ? 'border-b-2 text-slate-500 border-slate-500'
          : 'hover:border-b-2 hover:text-gray-500'}
        `}
        value={value}
        onClick={() => privateProps.handleTabClick(value)}
      >
        <p>{text}</p>
      </button>
    </li>
  );
}

Tab.defaultProps = {
  privateProps: undefined,
};

export default Tab;
