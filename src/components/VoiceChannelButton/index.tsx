import React from 'react';
import {Container, VolumeUpIcon, SettingsIcon, InviteIcon} from './styles'

export interface Props {
    channelName: string;
    selected?: boolean;
}

const VoiceChannelButton: React.FC<Props> = ({
    channelName, selected
}) => {
    return (
        <Container className={selected ? 'active' : ''}>
            <div>
                <VolumeUpIcon/>
                <span>{channelName}</span>
            </div>

            <div className="icons">
                <SettingsIcon/>
                <InviteIcon/>
            </div>
        </Container>
    )
}

export default VoiceChannelButton;