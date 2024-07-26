import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";

export default function ContainerNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavBar isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />
  );
}
