import Link from "next/link";
import { useRouter } from "next/router";
import { StyledNav } from "../styles/styled-nav";

const Nav = () => {
  const { pathname } = useRouter();
  return (
    <StyledNav className="nav">
      <ul className="nav-list">
        <Link href="/">
          <li className={`nav-item${pathname === "/" ? " active" : ""}`}>
            Home
          </li>
        </Link>
        <li className="nav-item">
          <Link href="/whoweare">
            <span
              className={`main-item${
                pathname === "/whoweare" ? " active" : ""
              }`}
            >
              Who We Are
            </span>
          </Link>
          <ul className="hidden-nav-item">
            <Link href="/whoweare#history">
              <li>History</li>
            </Link>
            <Link href="/whoweare#goal">
              <li>Goals</li>
            </Link>
            <Link href="/whoweare#team">
              <li>Team</li>
            </Link>
          </ul>
        </li>
        <li className="nav-item">
          <Link href="/education">
            <span
              className={`main-item${
                pathname === "/education" ? " active" : ""
              }`}
            >
              Education&nbsp;
            </span>
          </Link>
          <ul className="hidden-nav-item">
            <Link href="/education#initiative">
              <li>Initiative</li>
            </Link>
            <Link href="/education#program">
              <li>Program</li>
            </Link>
            <Link href="/education#evaluation">
              <li>Evaluation</li>
            </Link>
            <Link href="/education#awareness">
              <li>Awareness</li>
            </Link>
            <Link href="/education#partners">
              <li>Partners</li>
            </Link>
          </ul>
        </li>
        <li className="nav-item">Give</li>
        <li className="nav-item">Contact Us</li>
      </ul>
    </StyledNav>
  );
};
export default Nav;
