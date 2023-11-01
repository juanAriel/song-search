import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchProps from "./interface";
import { useTranslation } from "react-i18next";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const style = {
  background: "linear-gradient(45deg, #f2f2f2 30%, #f2f2f2 90%)",
  borderRadius: 25,
  color: "black",
};

const Search = ({ onSearch }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const { t, i18n } = useTranslation();
  const changeLanguage = (e: SelectChangeEvent<string>) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <div className="header">
          <Select value={i18n.language} onChange={changeLanguage}>
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="es">Español</MenuItem>
          </Select>
          <h2>{t("search")}</h2>
        </div>
        <InputBase
          style={style}
          sx={{ ml: 1, flex: 1 }}
          placeholder={t("search")}
          value={searchTerm}
          onChange={handleChange}
          startAdornment={
            <IconButton color="default" aria-label="upload picture" component="span">
              <SearchIcon />
            </IconButton>
          }
        />
      </div>
    </div>
  );
};

export default Search;
