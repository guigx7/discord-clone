import React from "react";
import ChannelMessage, { Mention } from "../ChannelMessage";
import { Container, Messages, InputWrapper, Input, InputIcon, GiftIcon, GifIcon, StickerIcon, EmojiIcon } from "./styles";

const ChannelData: React.FC = () => {
  return (
    <Container>
      <Messages>
        <ChannelMessage
          author="guigx7"
          date="Today at 1:53 PM"
          content="teste"
        />

        <ChannelMessage
          author="guigx7"
          date="Today at 2:03 PM"
          content=";;play mc marcinho rap do solitario"
        />

        <ChannelMessage
          author="guigx7"
          date="Today at 2:03 PM"
          content=";;play sou alaska 2"
        />

        <ChannelMessage
          author="FredBoat♪♪"
          date="Today at 2:03 PM"
          content="Rap Do Solitário (05:31) will now play."
          isBot
        />

        <ChannelMessage
          author="FredBoat♪♪"
          date="Today at 2:03 PM"
          content="Froid feat. Cynthia Luz - Sou Alaska 2 (videoclipe oficial) (04:22) added to the queue."
          isBot
        />

        <ChannelMessage
          author="leozin"
          date="Today at 2:05 PM"
          content="LOUD LOUD LOUD"
        />

        <ChannelMessage
          author="yabks"
          date="Today at 2:05 PM"
          content={
            <>
              <Mention>@guigx7</Mention> zzz
            </>
          }
          hasMention
        />

        <ChannelMessage
          author="gama"
          date="Today at 2:07 PM"
          content="bom dia crianças"
        />

        <ChannelMessage
          author="nadin"
          date="Today at 5:45 PM"
          content={
            <>
              <Mention>@guigx7</Mention> <Mention>@BrunoP</Mention> <Mention>@yVieiiraHS</Mention> <Mention>@EnricoHernandez</Mention> bora cs?
            </>
          }
          hasMention
        />

        <ChannelMessage
          author="guigx7"
          date="Today at 5:45 PM"
          content="vamo"
        />

        <ChannelMessage
          author="BrunoP"
          date="Today at 5:46 PM"
          content="bora"
        />

        <ChannelMessage
          author="EnricoHernandez"
          date="Today at 5:45 PM"
          content="Nem da, to jogando roblox"
        />

        <ChannelMessage
          author="guigx7"
          date="Today at 5:45 PM"
          content="KKKKKKKKKKKKKKKKKKKKKKKK"
        />

        <ChannelMessage
          author="Nome Filtrado"
          date="Today at 5:55 PM"
          content="oii"
        />

        <ChannelMessage
          author="Nome Infiltrado"
          date="Today at 5:56 PM"
          content="oiiii"
        />

        <ChannelMessage
          author="NEGAO"
          date="Today at 6:13 PM"
          content=";;play abertura chaves"
        />

        <ChannelMessage
          author="FredBoat♪♪"
          date="Today at 6:13 PM"
          content="Vinheta: Chaves - SBT (1993) (00:36) will now play."
          isBot
        />

        <ChannelMessage
          author="NEGAO"
          date="Today at 6:14 PM"
          content="vlw bot"
        />
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #geral" />
        <InputIcon className="left"/>
        <EmojiIcon className="right"/>
        <StickerIcon className="right mp"/>
        <GifIcon className="right mp"/>
        <GiftIcon className="right mp"/>
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
