import React, { useState } from "react";
import { IconContext } from "react-icons";
import * as ReactIconsAi from "react-icons/ai";
import * as ReactIconsSi from "react-icons/si";
import * as ReactIconsBs from "react-icons/bs";
import UsePointer from "hooks/UsePointer";

const IconComponent = ({ iconName, color, size, link }) => {
  const [wppLink, setWppLink] = useState();

  // Tente acessar o ícone usando ReactIcons[iconName]
  const Icon =
    ReactIconsAi[iconName] || ReactIconsSi[iconName] || ReactIconsBs[iconName];

  if (!Icon) {
    return null; // Retorna null se o ícone não for encontrado
  }

  const pointerStyle = UsePointer(); // Invoke the function to get the style object

  const handleClick = () => {
    if (link) {
      // Abre o link em uma nova aba
      window.open(link, "_blank");
    }
  };

  return (
    <div
      onClick={handleClick}
      style={pointerStyle} // Use the style object directly
    >
      <IconContext.Provider value={{ color, size }}>
        <Icon />
      </IconContext.Provider>
    </div>
  );
};

export default IconComponent;
