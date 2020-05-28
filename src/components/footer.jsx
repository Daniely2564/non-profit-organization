import { StyledFooter } from "../styles/styled-footer";
import { FacebookSVG, TwitterSVG, InstagramSVG } from "./svgs";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <div className="box">
          Non-Profit Organization
          <br />
          <br />
          Email Address: something@gmail.com
        </div>
        <div className="box">
          <div className="svg-group">
            <div className="svg-wrapper">
              <FacebookSVG />
            </div>
            <div className="svg-wrapper">
              <TwitterSVG />
            </div>
            <div className="svg-wrapper">
              <InstagramSVG />
            </div>
            <div className="svg-wrapper">
              <InstagramSVG />
            </div>
          </div>
          <br />
          <br />
          <div>© 2020 NFO. All Rights Reserved.</div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
