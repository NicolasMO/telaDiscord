import React, { useRef, useEffect } from 'react'
import ChannelMessage, { Mention } from '../ChannelMessage';

import { 
  Container, 
  Messages, 
  InputWrapper, 
  Input, 
  InputIcon 
} from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messagesRef.current

    if(div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage 
          key={n}
          author="Nícolas Martins"
          date="28/05/2024"
          content="Mensagem Spam!"
        />
        ))}

        <ChannelMessage 
          author="Bot de Música"
          date="28/05/2024"
          content={
            <>
              <Mention>@Nícolas Martins</Mention> adicionou uma música na fila
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre"/>
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData;