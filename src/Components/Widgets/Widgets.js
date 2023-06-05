import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecordIcon />
        </div>
        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "Zlatan Ibrahimović",
        "Swedish legend hangs up his boots at 41."
      )}
      {newsArticle("F1", "Verstappen dominates the Spanish Grand Prix 2023.")}
      {newsArticle("World Cup 2022", "Argentina and Messi win the World Cup.")}
      {newsArticle("Ballon d'Or", "Messi or Haaland?")}
    </div>
  );
}

export default Widgets;
