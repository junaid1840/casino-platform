import React, { FC } from "react";
import loaderImg from "../../../assets/images/_.gif";
import "./Loader.scss";

export const Loader: FC = () => (
  <img className="loader-gif" src={loaderImg} alt="loading" />
);
