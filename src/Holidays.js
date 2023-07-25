import React from "react";

import "./Holidays.css";

export default function Holidays() {
  return (
    <div className="Holidays">
      <h2 className="text-start my-4">Dec 25th</h2>
      <div className="holidayCardContainer">
        <div className="holidayCard">
          <h3>Christmas</h3>
          <div className="holidayDescription mx-4">
            Get into the festive spirit with Christmas cheer! Deck the falls with
            boughs of holly, indulge in delicious treats, and make unforgettable
            memories with loved ones.
          </div>
        </div>
        <div className="holidayCard">
          <h3>National Pumpkin Pie Day</h3>
          <div className="holidayDescription mx-4">
          It's a great excuse to choose pumpkin pie for your dessert table, even though it may be overshadowed by Christmas Day.
          Pumpkin pie is a symbol of the fall harvest season and a holiday favorite, especially at Thanksgiving and Christmas. It's made with a pie shell base filled with pumpkin custard and garnished with spices like cinnamon, nutmeg, and ginger.
          </div>
        </div>
      </div>
    </div>
  );
}