import React from 'react';
import Users from '../../Assets/Users.json';

const UserInfo = ({match: {params}}) => {
  const {guid} = params;
  const {name, about, age, favoriteFruit} = Users.find(u => u.guid === guid);

  return (
    <div>
      {'sefgsefs'}
      {guid}
      {name}
      {age}
      {about}
      {JSON.stringify(favoriteFruit)}
    </div>
  );
};

export default UserInfo;