import React from "react";
import { TimeProps } from "utils/types/props/types";

interface FooterProps extends TimeProps {}

const Footer = ({ time }: FooterProps) => {
  return (
    <div className={`footer footer--${time}`}>
      <p className={`footer__text--${time}`}>
        © 2023 Doday. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
