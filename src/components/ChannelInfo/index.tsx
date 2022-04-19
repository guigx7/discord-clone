import React from "react";
import {
  Container,
  HashtagIcon,
  Title,
  Separator,
  Description,
  SubContainer,
  HelpIcon,
  InboxIcon,
  MembersIcon,
  PinIcon,
  NotificationIcon,
  ThreadsIcon,
} from "./styles";

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <SubContainer>
        <HashtagIcon />
        <Title>geral</Title>
        <Separator />
        <Description>Chat geral</Description>
      </SubContainer>
      <SubContainer>
        <ThreadsIcon className="right mr" />
        <NotificationIcon className="right mr" />
        <PinIcon className="right mr" />
        <MembersIcon className="right mr" />
        <InboxIcon className="right mr" />
        <HelpIcon className="right" />
      </SubContainer>
    </Container>
  );
};

export default ChannelInfo;
