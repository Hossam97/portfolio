import React, { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";

const NavMenu = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <Hamburger toggle={() => setOpen(!isOpen)} toggled={isOpen} />
    </div>
  );
};

export default NavMenu;
