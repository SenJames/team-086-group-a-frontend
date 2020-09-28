import React from "react";
import { withRouter } from "react-router-dom";
import CustomImage from "../Image.component/Image";
import CustomNavLinks from "../NavLink.component/NavLink";
import CustomButton from "../Button.component/Button";
import LogoImage from "../../Asset/android-chrome-192x192.png";
import CustomList from "../../Common/List.component/List";
import HeaderStyles from "../Header.Component/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const { history, headerNavLinks, match } = props;
  const { path } = match;

  const authorization = path === "/team-086-group-a-frontend/home";

  const handleSignupButton = () => {
    // routing to the signin page
    history.push("/team-086-group-a-frontend/signin");
  };

  // destructuring of styles
  const {
    container,
    headerBackground,
    logo,
    image,
    navWrapper,
    navBars,
    links,
    buttonWrapper,
    button,
  } = HeaderStyles;

  return (
    <div className={container}>
      <div className={headerBackground}>
        <div className={logo}>
          <CustomImage src={LogoImage} ait={"logo icon"} className={image} />
        </div>
        <div className={navWrapper}>
          <div className={navBars}>
            {headerNavLinks &&
              headerNavLinks.map((navlinks, index) => (
                <CustomList
                  key={index}
                  text={
                    <CustomNavLinks
                      url={`/team-086-group-a-frontend/${navlinks}`}
                      text={navlinks}
                      className={links}
                    />
                  }
                />
              ))}
          </div>
          <div className={buttonWrapper}>
            {!authorization && sessionStorage.getItem("Token") ? (
              <FontAwesomeIcon icon={faUser} color={"white"} size="2x" />
            ) : (
              <CustomButton
                text={"Sign Up"}
                className={button}
                width={"12vw"}
                backgroundColor={"#000"}
                click={handleSignupButton}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
