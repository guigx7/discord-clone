import styled from "styled-components";
import {Hashtag} from 'styled-icons/heroicons-outline';
import {Help, Inbox, PushPin, Notifications, PeopleAlt, Tag} from 'styled-icons/material';

export const Container = styled.div`
    grid-area: CI;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 17px;
    background-color: var(--primary);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
    z-index: 2;
`;

export const SubContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const HashtagIcon = styled(Hashtag)`
    width: 24px;
    height: 24px;
    color: var(--symbol);
`;

export const Title = styled.div`
    margin-left: 9px;
    font-size: 16px;
    font-weight: bold;
    color: var(--white);

`;

export const Separator = styled.div`
    height: 24px;
    width: 1px;

    background-color: var(--white);
    opacity: 0.2;
    margin: 0 13px;
`;

export const Description = styled.span`
    font-size: 15px;
    color: var(--gray);
`;

export const HelpIcon = styled(Help)`
    width: 24px;
    height: 24px;
    color: var(--gray);
    cursor: pointer;
    transition: color 0.2s;

    &:hover{
        color: var(--white);
        transition: color 0.2s;
    }

    &.active{
        color: var(--white);
    }

    &.mr{
        margin-right: 5px;
    }
`;

export const InboxIcon = styled(Inbox)`
    width: 24px;
    height: 24px;
    color: var(--gray);
    cursor: pointer;
    transition: color 0.2s;

    &:hover{
        color: var(--white);
        transition: color 0.2s;
    }

    &.active{
        color: var(--white);
    }

    &.mr{
        margin-right: 5px;
    }
`;

export const MembersIcon = styled(PeopleAlt)`
    width: 24px;
    height: 24px;
    color: var(--gray);
    cursor: pointer;
    transition: color 0.2s;

    &:hover{
        color: var(--white);
        transition: color 0.2s;
    }

    &.active{
        color: var(--white);
    }

    &.mr{
        margin-right: 5px;
    }
`;

export const PinIcon = styled(PushPin)`
    width: 24px;
    height: 24px;
    color: var(--gray);
    cursor: pointer;
    transition: color 0.2s;

    &:hover{
        color: var(--white);
        transition: color 0.2s;
    }

    &.active{
        color: var(--white);
    }

    &.mr{
        margin-right: 5px;
    }
`;

export const NotificationIcon = styled(Notifications)`
    width: 24px;
    height: 24px;
    color: var(--gray);
    cursor: pointer;
    transition: color 0.2s;

    &:hover{
        color: var(--white);
        transition: color 0.2s;
    }

    &.active{
        color: var(--white);
    }

    &.mr{
        margin-right: 5px;
    }
`;

export const ThreadsIcon = styled(Tag)`
    width: 24px;
    height: 24px;
    color: var(--gray);
    cursor: pointer;
    transition: color 0.2s;

    &:hover{
        color: var(--white);
        transition: color 0.2s;
    }

    &.active{
        color: var(--white);
    }

    &.mr{
        margin-right: 5px;
    }
`;