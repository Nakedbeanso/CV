import React from 'react'
import { Navbar, NavbarLink } from "flowbite-react";

const Header = () => {
  return (
   <>
   <Navbar fluid rounded>
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Curriculum Vite</span>
      </Navbar.Brand>
      <Navbar.Collapse>
        <Navbar.Link href="#">Home</Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
   </>
  )
}

export default Header