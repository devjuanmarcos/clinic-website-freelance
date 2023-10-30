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

// import React from "react";
// import { IconContext } from "react-icons";

// const IconComponent = ({ iconName, color, size }) => {
//   const iconPrefix = iconName.substring(0, 2).toLowerCase(); // Obtém as duas primeiras letras em minúsculas

//   let Icon = null;

//   try {
//     // Use import dinâmico para importar o ícone com base nas duas primeiras letras
//     Icon = require(`react-icons/${iconPrefix}/${iconName}`).default;
//   } catch (error) {
//     // Lidere com erros, por exemplo, se o ícone não for encontrado
//     console.error(`Ícone não encontrado: ${iconName}`);
//   }

//   if (!Icon) {
//     return null; // Retorna null se o ícone não for encontrado
//   }

//   return (
//     <IconContext.Provider value={{ color, size }}>
//       <Icon />
//     </IconContext.Provider>
//   );
// };

// export default IconComponent;
