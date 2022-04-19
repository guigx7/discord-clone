import React from 'react';
import ChannelButton from '../ChannelButton';
import VoiceChannelButton from '../VoiceChannelButton';
import {Container, Category, AddCategoryIcon} from './styles'

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Admin</span>
                <AddCategoryIcon/>
            </Category>

            <ChannelButton channelName="chat-adm"/>
            <VoiceChannelButton channelName="call-adm"/>

            <Category>
                <span>Geral</span>
                <AddCategoryIcon/>
            </Category>

            <ChannelButton channelName="geral"/>
            <ChannelButton channelName="comandos-bot"/>
            <VoiceChannelButton channelName="Geral1"/>
            <VoiceChannelButton channelName="Geral2"/>
            <VoiceChannelButton channelName="Geral3"/>

            <Category>
                <span>Ausentes</span>
                <AddCategoryIcon/>
            </Category>

            <VoiceChannelButton channelName="AFK"/>
        </Container>
    )
}

export default ChannelList;