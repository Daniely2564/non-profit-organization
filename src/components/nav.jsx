import { useRouter } from "next/router";
const Nav = () => {
  const { pathname } = useRouter();
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className={`nav-item${pathname === "/" ? " active" : ""}`}>Home</li>
        <li className="nav-item">
          <span className="main-item">Who We Are</span>
          <ul className="hidden-nav-item">
            <li>History</li>
            <li>Goals</li>
            <li>Team</li>
          </ul>
        </li>
        <li className="nav-item">
          <span className="main-item">Education&nbsp;</span>
          <ul className="hidden-nav-item">
            <li>Initiative</li>
            <li>Program</li>
            <li>Awareness</li>
            <li>Partners</li>
          </ul>
        </li>
        <li className="nav-item">Give</li>
        <li className="nav-item">Contact Us</li>
      </ul>
    </nav>
  );
};
export default Nav;
