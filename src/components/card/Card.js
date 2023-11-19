import React, { useState } from "react";
import "./card.css";

const bg = ["red", "rgb(255, 132, 0)", "skyblue", "green", "rgb(201, 45, 97)"];

const Card = ({ item, users }) => {
  let name = "ABC";

  let idx = Math.floor(Math.random() * 5);

  for (let user of users) {
    if (item.userId === user.id) {
      name = user.name;
    }
  }

  function generateImage(name) {
    const list = name.split(" ");
    if (list.length > 1) {
      const fn = list[0][0];
      const ln = list[1][0];
      const text = fn.toUpperCase() + ln.toUpperCase();
      return text;
    } else {
      return list[0][0].toUpperCase();
    }
  }

  return (
    <div className="card">
      <div className="head">
        {item.id}
        <div className="image" style={{ backgroundColor: bg[idx] }}>
          {generateImage(name)}
          <div className="dot"></div>
        </div>
      </div>
      <h4>
        <input type="checkbox"></input>
        {item.title}
      </h4>
      <div className="buttdiv">
        <button className="butt">
          <span class="material-symbols-outlined icon">more_horiz</span>
        </button>
        <button className="butt">
          <div className="circle"></div>
          {item.tag[0]}
        </button>
      </div>
    </div>
  );
};

export default Card;
