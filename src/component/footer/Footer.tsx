import React, { FC } from "react";
import "./Footer.scss";
import { FOOTER_LABELS } from "./footerlabels";

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <p>{FOOTER_LABELS.disclaimer}</p>
    </footer>
  );
};
