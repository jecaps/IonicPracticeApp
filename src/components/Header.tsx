import logo from "../images/kanzept-logo.png";
import "./Header.css";

export default function Header() {
  return (
    <div className="app-header--container">
      <h1 className="app-header--title">
        Kanzepts
        <img src={logo} alt="" className="app-header--logo" />
      </h1>
    </div>
  );
}
