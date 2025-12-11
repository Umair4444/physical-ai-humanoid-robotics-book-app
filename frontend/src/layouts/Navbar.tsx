import React, { type ReactNode } from 'react';
import DynamicNavbar from '../components/DynamicNavbar';

interface NavbarProps {
  children?: ReactNode;
}

function Navbar({ children }: NavbarProps): JSX.Element {
  return (
    <DynamicNavbar>
      {children}
    </DynamicNavbar>
  );
}

export default Navbar;
