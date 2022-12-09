import React from 'react';
import Image from 'next/image';

type ProfileButtonProps = {
  avatar?: string,
}
function ProfileButton({
  avatar,
}: ProfileButtonProps) {
  return (
    <div className="flex flex-row gap-4 items-center p-4 border-t border-indigo-800">
      <div className="relative w-10 h-10">
        <Image
          className="rounded-3xl"
          src={avatar}
          alt=""
          fill
        />
      </div>
      <div className="flex flex-col text-white">
        Shiro Artemia
        <span className="text-sm text-slate-300">
          Voir le profil
        </span>
      </div>
    </div>
  );
}

ProfileButton.defaultProps = {
  avatar: 'https://img2.finalfantasyxiv.com/f/be875853d65fd0fc2ed46eb28c96dafa_0a122616f3718d3f45cab10fd8fc1604fc0_96x96.jpg?1670598649',
};

export default ProfileButton;
