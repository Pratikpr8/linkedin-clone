import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
// adding mui imports for drawar component
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ArticleIcon from "@mui/icons-material/Article";

function Widgets() {
  // drawar component
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {newsArticle(
          "Zlatan Ibrahimović",
          "Swedish legend hangs up his boots at 41."
        )}
      </List>
      <Divider />
      <List>
        {newsArticle("F1", "Verstappen dominates the Spanish Grand Prix 2023.")}
      </List>
      <Divider />
      <List>
        {newsArticle(
          "World Cup 2022",
          "Argentina and Messi win the World Cup."
        )}
      </List>
      <Divider />
      <List>{newsArticle("Ballon d'Or", "Messi or Haaland?")}</List>
    </Box>
  );

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
    <>
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
        {newsArticle(
          "World Cup 2022",
          "Argentina and Messi win the World Cup."
        )}
        {newsArticle("Ballon d'Or", "Messi or Haaland?")}
      </div>

      <div className="widgets__smallscreen">
        <div>
          {["right"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>
                <ArticleIcon className="widgetsIcon" />
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default Widgets;
