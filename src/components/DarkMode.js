import "../css/DarkMode.css";
import React from 'react'


//here component dark mode we can show in all pages in side - we use this component in Menu component

function DarkMode() {


  // 1
  const setDark = () => {
    // 2
    localStorage.setItem("theme", "dark");
    // 3
    document.documentElement.setAttribute("data-theme", "dark");
  };



  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };



  // 4
  const storedTheme = localStorage.getItem("theme");


  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;



  const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);


  if (defaultDark) {
    setDark();
  }



  // 5
  const toggleTheme = (e) => {

    window.location.reload(false); // רענון דף

    if (e.target.checked) {
      setDark();
    } else {
      setLight();
    }
  };


  

  return (

    <div className="toggle-theme-wrapper">
      <span>🌒</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          // 6
          onChange={toggleTheme}
          defaultChecked={defaultDark}
        />
        <div className="slider round"></div>
      </label>
      <span>☀️</span>
    </div>
  );

};

export default DarkMode;




// INFO !

// here if we use UseContext for change theme , but have problem every new page change them back.
// and we dont need this , we need show theme example dark in all pages


// import "../css/DarkMode.css";
// import React, { useContext } from "react";
// import { ThemeContext } from "./ThemeContext";


// function DarkMode() {

//   const theme = useContext(ThemeContext);
//   const darkMode = theme.state.darkMode;


//   const onClick = () => {
//     if (darkMode) {
//       theme.dispatch({ type: "LIGHTMODE" });
//     } else {
//       theme.dispatch({ type: "DARKMODE" });

//     }
//   };


//   return (

//     <div className="toggle-theme-wrapper">
//       <span>🌒</span>
//       <label className="toggle-theme" htmlFor="checkbox">
//         <input
//           type="checkbox"
//           id="checkbox"
//           onClick={onClick}
//         />
//         <div className="slider round"></div>
//       </label>
//       <span>☀️</span>
//     </div>
//   );

// };

// export default DarkMode;