import { Component } from "react";
import Gitlog from "../img/iconfinder_github_317712.svg";
import LinkinLog from "../img/iconfinder_Rounded_Linkedin2_svg_5282542.png"

function Footer() {
  return (
    <div className="Footer">
      <footer>
      <div className="logos" style={{paddingLeft: ""}}>
            <p className="footer-name" style={{float: "left"}, {marginLeft: "12px"}}>Fernando Guardado 2021</p>
            <div className="img-logos" style={{float: "right"}}>
              <a href="https://github.com/FernGuardado">
                <img src={Gitlog} style={{paddingRight: "1px"}}className="git-log" alt="gl" /> 
              </a>
              <a href="https://www.linkedin.com/in/fernguardado">
                <img src={LinkinLog} style={{paddingRight: "12px"}} className="linkdin-logo" alt="lkl" />
              </a>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
