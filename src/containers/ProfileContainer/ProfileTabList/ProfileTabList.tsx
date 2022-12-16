import React, { Dispatch, SetStateAction } from 'react';
import Tab from '../../../components/Tab/Tab';
import TabList from '../../../components/TabList/TabList';
import { ProfilePageTabs } from '../tabs.enum';

type ProfileTabsProps= {
  setSelectedTab: Dispatch<SetStateAction<ProfilePageTabs>>
}
function ProfileTabList({
  setSelectedTab,
}: ProfileTabsProps) {
  return (
    <TabList
      handleSelect={(value) => setSelectedTab(value)}
      defaultValue={ProfilePageTabs.GENERAL}
    >
      <Tab
        text={ProfilePageTabs.GENERAL}
        value={ProfilePageTabs.GENERAL}
      />
      <Tab
        text={ProfilePageTabs.RETAINERS}
        value={ProfilePageTabs.RETAINERS}
      />
    </TabList>
  );
}

export default ProfileTabList;
