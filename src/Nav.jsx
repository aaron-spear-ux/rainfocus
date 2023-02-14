import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const navArray = [
  "Attendees",
  "Attendee types",
  "Packages",
  "Reg codes",
  "Discounts",
];
const subNav = navArray.map((navLink) => <li key={uuid()}>{navLink}</li>);

const Nav = () => {
  const [isChange, setIsChange] = useState(true);

  const handleChange = () => setIsChange(!isChange);
  return (
    <div className={isChange ? "nav-close" : "nav-open"}>
      <div className="header__btn-nav">
        <button onClick={handleChange} type="button">
          <div className="header__btn-nav-lines">
            <span className="line line-top"></span>
            <span className="line line-middle"></span>
            <span className="line line-bottom"></span>
          </div>
        </button>
      </div>
      <aside className="side-nav">
        <nav className="main-nav">
          <ul className="main-nav__list">
            <li>
              <span className="rf-logo"></span>
            </li>
            <li>
              <span className="summit-logo"></span>
            </li>
            <li>
              <span>
                <span className="user-circle">FL</span>
              </span>
            </li>
          </ul>
        </nav>
        <nav className="event-nav">
          <div className="event-nav__heading">RainFocus Summit</div>
          <div className="event-nav__info">
            Lehi, UT <span>&middot;</span> December 15th
          </div>
          <div className="event-nav__search">
            <input name="event-search" type="text" placeholder="Search" />
          </div>
          <ul className="event-nav__list">
            <li>
              <span className="nav-circle"></span>Guide
            </li>
            <li className="active">
              <span className="nav-circle"></span>Attendees
            </li>
            <ul className="sub-nav">{subNav}</ul>
            <li>
              <span className="nav-circle"></span>Content
            </li>
            <li>
              <span className="nav-circle"></span>Exhibitors
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Nav;
