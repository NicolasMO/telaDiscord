import React from 'react'

import { Container, Status, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''}/>
      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Status>Disponível - 1</Status>
      <UserRow nickname="Nícolas Martins" />

      <Status>Offline - 15</Status>
      <UserRow nickname="Bot de Música" isBot />
      <UserRow nickname="Fulano"  />
      <UserRow nickname="Fulano"  />
      <UserRow nickname="Fulano"  />
      <UserRow nickname="Fulano"  />
      <UserRow nickname="Fulano"  />
      <UserRow nickname="Fulano"  />
      <UserRow nickname="Fulano"  />
      <UserRow nickname="Fulano"  />
      <UserRow nickname="Fulano"  />
      <UserRow nickname="Fulano"  />
      <UserRow nickname="Fulano"  />
      <UserRow nickname="Fulano"  />
      <UserRow nickname="Fulano"  />
      <UserRow nickname="Fulano"  /> 
    </Container>
  )
}

export default UserList;