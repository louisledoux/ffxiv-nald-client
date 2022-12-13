import React from 'react';
import SearchInput from '../../components/SearchInput/SearchInput';
import NotificationIcon from '../../assets/icons/NotificationIcon';

function TopBar() {
  return (
    <div className="flex h-16 items-center shadow">
      <div className="flex m-4 justify-between w-full">
        <div className="w-1/2">
          <SearchInput />
        </div>
        <div className="flex gap-2 text-gray-500">
          <NotificationIcon />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
