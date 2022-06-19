import React, { FC } from "react";
import logoImage from "./../../assets/images/logo.svg";
import "./Header.scss";

export const Header: FC = () => (
  <header>
    <img src={logoImage} alt="logo-image" />
  </header>
);
