import React from 'react';
import {Container, HashtagIcon, SettingsIcon, InviteIcon} from './styles'

export interface Props {
    channelName: string;
    selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({
    channelName, selected
}) => {
    return (
        <Container className={selected ? 'active' : ''}>
            <div>
                <HashtagIcon/>
                <span>{channelName}</span>
            </div>

            <div className="icons">
                <SettingsIcon/>
                <InviteIcon/>
            </div>
        </Container>
    )
}

export default ChannelButton;