import React from 'react';
import ProfilePicture from './Profilepicture';
import AboutMe from './aboutme';
import Skills from './skills';
import Button from './button';

const Profile = () => {
  return (
    <div className="profile">
      <ProfilePicture />
      <AboutMe />
      <Skills />
      <Button />
    </div>
  );
};

export default Profile;
