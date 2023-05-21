import { motion } from 'framer-motion';
import { useState } from 'react';
import { styled } from 'styled-components';

const NavContainer = styled(motion.div)`
  position: absolute;
  top: ${({ open, theme }) => (open ? '0' : `-${theme.height.navbar}`)};
  width: 100%;
  z-index: 5;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s ease;
`;

const MenuItems = styled(motion.ul)`
  position: relative;
  height: ${({ theme }) => theme.height.navbar};
  background-color: ${({ theme }) => theme.color.body};
  color: ${({ theme }) => theme.color.text};

  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
`;

const MenuBtn = styled.li`
  cursor: pointer;
  background-color: ${({ theme }) => `rgba(${theme.color.textrgba},0.6)`};
  color: ${({ theme }) => theme.color.body};
  width: 15rem;
  height: 2.5rem;

  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);

  position: absolute;
  top: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.font.md};
  font-weight: 600;
  text-transform: uppercase;
`;

const MenuItem = styled(motion.li)`
  text-transform: uppercase;
`;

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <NavContainer
      open={open}
      initial={{
        y: '-100%'
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 2,
        delay: 2
      }}
    >
      <MenuItems
        drag="y"
        dragConstraints={{
          top: 0,
          bottom: 70
        }}
        dragElastic={0.05}
        dragSnapToOrigin
      >
        <MenuBtn onClick={() => setOpen(!open)}>Menu</MenuBtn>
        <MenuItem whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9, y: 0 }}>
          Home
        </MenuItem>
        <MenuItem whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9, y: 0 }}>
          About
        </MenuItem>
        <MenuItem whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9, y: 0 }}>
          Shop
        </MenuItem>
        <MenuItem whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9, y: 0 }}>
          New arrivals
        </MenuItem>
      </MenuItems>
    </NavContainer>
  );
};

export default NavBar;
