'use client';

import React, { useState } from 'react';
import ProfileTabList from '../../containers/ProfileContainer/ProfileTabList/ProfileTabList';
import { ProfilePageTabs } from '../../containers/ProfileContainer/tabs.enum';
import RetainersTab from '../../containers/ProfileContainer/Tabs/RetainersTab';
import GeneralTab from '../../containers/ProfileContainer/Tabs/GeneralTab';

function ProfilePage() {
  const [selectedTab, setSelectedTab] = useState<ProfilePageTabs>();

  function displayTabData() {
    switch (selectedTab) {
      case ProfilePageTabs.RETAINERS:
        return <RetainersTab />;
      case ProfilePageTabs.GENERAL:
      default:
        return <GeneralTab />;
    }
  }

  return (
    <div className="flex m-6 flex-col gap-6">
      <h1
        className="text-3xl font-semibold text-slate-700"
      >
        Profil
      </h1>
      <ProfileTabList setSelectedTab={setSelectedTab} />
      {displayTabData()}
    </div>
  );
}

export default ProfilePage;
