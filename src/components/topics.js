import React from "react";
import { Link } from "gatsby";
import { container, navLinks, navLinkItem, navLinkText } from "./topics.module.css";

export const Topics = () => {
  return (
    <div className={container}>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link className={navLinkText} to="/topics/basic">Basics</Link>
        </li>
        <li className={navLinkItem}>
          {" "}
          <Link className={navLinkText} to="/topics/intermediate">Intermediate</Link>
        </li>
        <li className={navLinkItem}>
          <Link className={navLinkText} to="/topics/advanced">Advanced</Link>
        </li>
      </ul>
    </div>
  );
};

export default Topics;
