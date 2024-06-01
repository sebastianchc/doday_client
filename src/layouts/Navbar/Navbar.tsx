import {
  BlackBriefcase,
  BlackCalendar,
  BlackWallet,
  WhiteBriefcase,
  WhiteCalendar,
  WhiteWallet,
} from "assets/images";
import { ButtonStatic } from "components/Button";
import { useNavigate } from "react-router-dom";
import { TimeProps } from "utils/types/props/types";

interface NavbarProps extends TimeProps {}

const Navbar = ({ time }: NavbarProps) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <ButtonStatic
            type="button"
            onClick={() => navigate("/schedule")}
            calledFrom="sidebar"
          >
            {time === 11 || time === 12 ? <WhiteCalendar /> : <BlackCalendar />}
            <p className={`navbar__item--${time}`}>Schedule</p>
          </ButtonStatic>
        </li>
        <li className="navbar__item">
          <ButtonStatic
            type="button"
            onClick={() => navigate("/projects")}
            calledFrom="sidebar"
          >
            {time === 11 || time === 12 ? (
              <WhiteBriefcase />
            ) : (
              <BlackBriefcase />
            )}
            <p className={`navbar__item--${time}`}>Projects</p>
          </ButtonStatic>
        </li>
        <li className="navbar__item">
          <ButtonStatic
            type="button"
            onClick={() => navigate("/budget")}
            calledFrom="sidebar"
          >
            {time === 11 || time === 12 ? <WhiteWallet /> : <BlackWallet />}
            <p className={`navbar__item--${time}`}>Budget</p>
          </ButtonStatic>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
