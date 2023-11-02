import React from "react";
import { IconContext } from "react-icons";
import * as ReactIconsAi from "react-icons/ai";
import * as ReactIconsSi from "react-icons/si";
import * as ReactIconsBs from "react-icons/bs";

const IconComponent = ({ iconName, color, size }) => {
  // Tente acessar o ícone usando ReactIcons[iconName]
  const Icon =
    ReactIconsAi[iconName] || ReactIconsSi[iconName] || ReactIconsBs[iconName];

  if (!Icon) {
    return null; // Retorna null se o ícone não for encontrado
  }

  return (
    <IconContext.Provider value={{ color, size }}>
      <Icon />
    </IconContext.Provider>
  );
};

export default IconComponent;
