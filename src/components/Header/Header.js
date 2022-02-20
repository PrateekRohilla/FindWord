import { ThemeProvider } from "@emotion/react";
import { MenuItem, TextField } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import React from "react";
import "./Header.css";


const Header = ({
  word, 
  setWord, 
  LightMode,
  setMeanings  
}) => {

    const handleChange = (language) => {
        setWord("");
        setMeanings([]);
    }
    
    const darkTheme = createTheme({
      palette: {
        primary: {
          main: LightMode ? "#000" : "#fff",
        },
        mode: LightMode ? "light": "dark",
      },
    });


  return (
    <div className="header">
      <span className="title">{word ? word : "Find Word"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            id="standard-basic"
            label="Search a Word"
            variant="standard"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
