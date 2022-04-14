import React from 'react';
import {Container, Role, User, Avatar} from './styles'

interface UserProps{
    nickname: string;
    isbot?: boolean;
}

const UserRow: React.FC<UserProps> = ({nickname, isbot}) => {
    return (
        <User>
            <Avatar className={isbot ? 'bot' : ''}/>
            <strong>{nickname}</strong>
            {isbot && <span>BOT</span>}
        </User>
    )
}

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Adm - 1</Role>
            <UserRow nickname="guigx7"/>

            <Role>Bots - 2</Role>
            <UserRow nickname="MEE6" isbot />
            <UserRow nickname="Loritta" isbot />

            <Role>Disponível - 13</Role>
            <UserRow nickname="nadin"/>
            <UserRow nickname="NEGAO"/>
            <UserRow nickname="deyy"/>
            <UserRow nickname="EnricoHernandez"/>
            <UserRow nickname="kadz"/>
            <UserRow nickname="BrunoP"/>
            <UserRow nickname="gama"/>
            <UserRow nickname="leozin"/>
            <UserRow nickname="yVieiiraHS"/>
            <UserRow nickname="Nome Filtrado"/>
            <UserRow nickname="yabiks"/>
            <UserRow nickname="Joao.lizarelli"/>
            <UserRow nickname="yabks"/>

            <Role>Offline - 7</Role>
            <UserRow nickname="vitorpfi"/>
            <UserRow nickname="Ernesta"/>
            <UserRow nickname="Ogasawara"/>
            <UserRow nickname="Lil Cheko"/>
            <UserRow nickname="Tuts"/>
            <UserRow nickname="Nome Infiltrado"/>
            <UserRow nickname="Chines15"/>

            
            
        </Container>
    )
}

export default UserList;