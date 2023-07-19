// style
import "./Footer.css";
import "../img/react-logo.png";

function Footer() {
  return (
    <div className="footer">
      TodoList with &nbsp; <span className="footer__react-title">React</span>{" "}
      <img
        className="footer__react-logo"
        width={15}
        src="../src/img/react-logo.png"
        alt=""
      />{" "}
      by&nbsp;{" "}
      <a className="footer-link" href="http://t.me/meyliboy_f">
        MBY
      </a>{" "}
    </div>
  );
}

export default Footer;
