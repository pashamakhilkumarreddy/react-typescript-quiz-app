import React, { useState } from 'react';
import { Input, Menu, Item } from 'semantic-ui-react';

const Header = () => {
  const [activeItem, setActiveItem] = useState(null);
  // const handleItemClick = (e: HTMLElementEventMap, {name: string}) => setActiveItem(name);
  return (
    <header>
      <Menu pointing secondary>
        <Menu.Item name='home' active={activeItem === 'home'} />
        <Menu.Menu position='right'>
          <Menu.Item name='login'>Log In</Menu.Item>
          <Menu.Item name='logout'>Log Out</Menu.Item>
        </Menu.Menu>
      </Menu>
    </header>
  );
};

export default Header;
