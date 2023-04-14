import React from "react";
import { Link } from "gatsby";
import { useWindowWidth } from "@react-hook/window-size";
import LogoSmallColor from "../images/ugjs-logo-sm-color.png";
import { Menu, X } from "react-feather";

const menuItemStyleFull = { padding: "0 8px" };
const menuItemStyleCollapsed: React.CSSProperties = {
  display: "block",
  width: "100%",
  borderTop: "2px orange solid",
  padding: "16px 24px",
  fontWeight: "bold",
  fontSize: "1.5rem",
};

type MenuState = "full" | "collapsed" | "open";
const windowMinForFull = 480;

const setMenuBasedOnWindow = (
  windowWidth: number,
  currentMenuState: MenuState = "full"
): MenuState => {
  if (windowWidth >= windowMinForFull && currentMenuState !== "full") {
    return "full";
  }
  // only moved to collapsed if we below the minimum and the menu is still full, this avoid closing the menu
  if (currentMenuState === "full") {
    return "collapsed";
  }
  return currentMenuState;
};

const menuItems = [
  { text: "Home", url: "/" },
  { text: "About", url: "/about" },
  // { text: "Speakers", url: "/speakers" },
  // { text: "Venue", url: "/venue" },
  { text: "Sponsors", url: "/sponsoring" },
  // { text: "Schedule", url: "/schedule" },
  // { text: "Faq", url: "/faq" },
  { text: "Contact", url: "/contact" },
];

const getMenuStyle = (menuState: MenuState): React.CSSProperties => {
  if (menuState === "collapsed") {
    return { display: "none" };
  }
  if (menuState === "open") {
    return {
      display: "flex",
      backgroundColor: "#fff",
      flexDirection: "column",
      position: "absolute",
      top: "5rem",
      width: "100%",
      zIndex: 1,
    };
  }
  return {
    display: "flex",
    margin: 0,
    padding: "0 16px 0 0",
    listStyle: "none",
    flexDirection: "row",
    alignItems: "center",
    color: "#fff",
    fontSize: "1.1em",
    fontWeight: "bold",
  };
};

const Header: React.FC = () => {
  const windowWidth = useWindowWidth();
  const [menuState, setMenuState] = React.useState<MenuState>(() =>
    setMenuBasedOnWindow(windowWidth)
  );

  React.useEffect(() => {
    setMenuState(setMenuBasedOnWindow(windowWidth, menuState));
  }, [windowWidth]);
  return (
    <header
      style={{
        background: "#5c5c5c",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div style={{ padding: "16px" }}>
        <Link to="/">
          <img src={LogoSmallColor} style={{ height: "48px" }} />
        </Link>
      </div>
      <ul style={getMenuStyle(menuState)}>
        {menuItems.map((item) => (
          <li
            style={
              menuState === "full" ? menuItemStyleFull : menuItemStyleCollapsed
            }
            key={item.text}
          >
            <Link
              to={item.url}
              style={{
                textDecoration: "none",
                color: menuState === "full" ? "#fff" : "#000",
              }}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
      <div
        style={{
          display: menuState !== "full" ? "flex" : "none",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2em",
          fontWeight: "bold",
          color: "#FFF",
          margin: "0 8px",
          padding: "0 16px",
        }}
        onClick={() =>
          setMenuState(menuState === "collapsed" ? "open" : "collapsed")
        }
      >
        {menuState === "collapsed" ? <Menu color="#FFF" /> : <X color="#FFF" />}
      </div>
    </header>
  );
};

export default Header;
