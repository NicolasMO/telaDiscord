import React from 'react';
import ServerButton from '../components/ServerButton';

import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
  return (
    <Container>
        <ServerButton isHome />

        <Separator></Separator>

        <ServerButton />
        <ServerButton hasNotifications />
        <ServerButton mentions={3} />
        <ServerButton />
        <ServerButton />
        <ServerButton />
        <ServerButton />
        <ServerButton hasNotifications />
        <ServerButton />
        <ServerButton />
        <ServerButton hasNotifications mentions={7} />
        <ServerButton />
        <ServerButton mentions={5} />
    </Container>
  )
}

export default ServerList;