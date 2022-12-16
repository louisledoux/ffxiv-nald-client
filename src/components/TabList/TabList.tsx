import React, { ReactElement, useState } from 'react';

type TabListProps<T> = {
  // eslint-disable-next-line no-unused-vars
  handleSelect: (value: T) => void,
  children: ReactElement[],
  defaultValue?: T,
}
function TabList<T>({
  handleSelect, children, defaultValue,
}: TabListProps<T>) {
  const [selectedTab, setSelectedTab] = useState<T>(defaultValue);

  const handleTabClick = (value: T) => {
    handleSelect(value);
    setSelectedTab(value);
  };

  return (
    <ol
      aria-label="Tabs"
      className="flex justify-start overflow-x-clip border-b gap-4"
    >
      {React.Children.map(children, (child) => (
        React.cloneElement(child, {
          privateProps: {
            isActive: selectedTab === child.props.value,
            handleTabClick,
          },
        })
      ))}
    </ol>
  );
}

TabList.defaultProps = {
  defaultValue: undefined,
};

export default TabList;
