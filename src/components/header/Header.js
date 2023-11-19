import React, { useState } from "react";
import "./header.css";

const Header = ({ grouping, setGrouping, ordering, setOrdering }) => {
  return (
    <div className="header">
      <div className="header_ul">
        <div className="cont">
          <span class="material-symbols-outlined">tune</span>
          Display
          <span class="material-symbols-outlined drop">expand_more</span>
        </div>
        <ul className="header_list">
          <li className="list_cont">
            Grouping
            <select
              className="dropdown"
              value={grouping}
              onChange={(e) => setGrouping(e.target.value)}
            >
              <option>Status</option>
              <option>User</option>
              <option>Priority</option>
            </select>
          </li>
          <li className="list_cont">
            Ordering
            <select
              className="dropdown"
              value={ordering}
              onChange={(e) => setOrdering(e.target.value)}
            >
              <option>Priority</option>
              <option>Title</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
