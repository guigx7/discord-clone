import styled from "styled-components";
import { AddCircle } from "styled-icons/material";
import { FaLaughSquint, FaGift } from "react-icons/fa";
import { RiFileGifFill, RiFile3Fill } from "react-icons/ri";


export const Container = styled.div`
  grid-area: CD;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--primary);
  padding-right: 4px;
`;

export const Messages = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 46px - 67px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--tertiary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    margin: 4px;
    background: #2e3338;
    border-radius: 4px;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  padding: 0 16px;
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 142px 0 57px;
  border-radius: 7px;
  color: var(--white);
  background-color: var(--chat-input);
  position: relative;

  &::placeholder {
    color: var(--gray);
  }

  ~ svg {
    position: relative;
    transition: 180ms ease-in-out;

    &.left{
      top: -50%;
      left: 14px;
    }

    &.right{
      float: right;
      top: -50%;
      right: 14px;
    }

    &.mp{
      margin-right: 5px;
    }
  }
`;

export const InputIcon = styled(AddCircle)`
  width: 24px;
  height: 24px;
  color: var(--gray);
  cursor: pointer;

  &:hover {
    color: var(--white);
  }
`;

export const GiftIcon = styled(FaGift)`
  width: 24px;
  height: 24px;
  color: var(--gray);
  cursor: pointer;

  &:hover {
    color: var(--white);
  }
`;

export const GifIcon = styled(RiFileGifFill)`
  width: 24px;
  height: 24px;
  color: var(--gray);
  cursor: pointer;

  &:hover {
    color: var(--white);
  }
`;

export const StickerIcon = styled(RiFile3Fill)`
  width: 24px;
  height: 24px;
  color: var(--gray);
  cursor: pointer;

  &:hover {
    color: var(--white);
  }
`;

export const EmojiIcon = styled(FaLaughSquint)`
  width: 24px;
  height: 24px;
  color: var(--gray);
  cursor: pointer;

  &:hover {
    color: var(--white);
  }
`;