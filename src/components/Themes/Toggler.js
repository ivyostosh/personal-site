import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  
  border: 0rem ${({ theme }) => theme.toggleBorder};
  // border-radius: 30px;
  cursor: pointer;
  font-size: 0.5rem;
  justify-content: space-between;
  // margin: 0 auto;
  margin: 0.5rem;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 2rem;
  height: 2rem;
  outline: none;
  }

`;

const Sun = styled.svg`
 height: auto;
 width: 1rem;
 transition: all 0.7s linear;
`;

const Moon = styled.svg`
  height: auto;
  width: 1rem;
  transition: all 0.7s linear;
`;

const Toggle = ({ theme, toggleTheme }) => (
  <Button onClick={toggleTheme} className="theme-icon-container">
    {theme === 'light'
      ? <Moon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="moon"><rect width="24" height="24" opacity="0" /><path d="M12.3 22h-.1a10.31 10.31 0 0 1-7.34-3.15 10.46 10.46 0 0 1-.26-14 10.13 10.13 0 0 1 4-2.74 1 1 0 0 1 1.06.22 1 1 0 0 1 .24 1 8.4 8.4 0 0 0 1.94 8.81 8.47 8.47 0 0 0 8.83 1.94 1 1 0 0 1 1.27 1.29A10.16 10.16 0 0 1 19.6 19a10.28 10.28 0 0 1-7.3 3z" /></g></g></Moon>
      : <Sun xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ fill: '#F6C358' }}> <g data-name="Layer 2"><g data-name="sun"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" /><path d="M12 6a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1z" /><path d="M21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z" /><path d="M6 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1z" /><path d="M6.22 5a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0 0-1.41z" /><path d="M17 8.14a1 1 0 0 0 .69-.28l1.44-1.39A1 1 0 0 0 17.78 5l-1.44 1.42a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.31z" /><path d="M12 18a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1z" /><path d="M17.73 16.14a1 1 0 0 0-1.39 1.44L17.78 19a1 1 0 0 0 .69.28 1 1 0 0 0 .72-.3 1 1 0 0 0 0-1.42z" /><path d="M6.27 16.14l-1.44 1.39a1 1 0 0 0 0 1.42 1 1 0 0 0 .72.3 1 1 0 0 0 .67-.25l1.44-1.39a1 1 0 0 0-1.39-1.44z" /><path d="M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4z" /></g></g></Sun>}
  </Button>
);

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
