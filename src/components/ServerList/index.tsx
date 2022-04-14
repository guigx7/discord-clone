import React from 'react';
import ServerButton from '../ServerButon';
import {Container, Separator} from './styles';


const ServerList: React.FC = () => {
    return (
        <Container>
            <ServerButton isHome/>

            <Separator />
            
            <ServerButton />
            <ServerButton  hasNotifications/>
            <ServerButton hasNotifications mentions={3}/>
            <ServerButton />
            <ServerButton />
            <ServerButton hasNotifications/>
            <ServerButton hasNotifications/>
            <ServerButton />
            <ServerButton />
            <ServerButton hasNotifications mentions={72}/>
            <ServerButton />
            <ServerButton hasNotifications/>
            <ServerButton hasNotifications mentions={14}/>
        </Container>
    )
}

export default ServerList