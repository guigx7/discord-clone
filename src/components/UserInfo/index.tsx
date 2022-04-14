import React from "react";
import { Container, Profile, UserData, Avatar, Icons, MicIcon, HeadphoneIcon, SettingsIcon } from "./styles";

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
            <strong>guigx7</strong>
            <span>#2377</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo;
