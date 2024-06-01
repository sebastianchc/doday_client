import {
  BlackBell,
  BlackSettings,
  WhiteBell,
  WhiteSettings,
} from "assets/images";
import { ButtonStatic } from "components/Button";
import Navbar from "layouts/Navbar/Navbar";
import { TimeProps } from "utils/types/props/types";

interface SidebarProps extends TimeProps {}

const Sidebar = ({ time }: SidebarProps) => {
  return (
    <aside className={`sidebar sidebar--${time}`}>
      <div className="sidebar-header">
        <ButtonStatic type="button" calledFrom="sidebar">
          {time === 11 || time === 12 ? <WhiteBell /> : <BlackBell />}
        </ButtonStatic>
      </div>
      <figure className="sidebar-user">
        <div className={`sidebar-user__avatar sidebar-user__avatar--${time}`}>
          {/* Cartoon Avatar */}
          SC
        </div>
        <h1 className={`sidebar-user__name sidebar-user__name--${time}`}>
          Sebastian,
        </h1>
        <p className={`sidebar-user__quote sidebar-user__quote--${time}`}>
          Do what you can do with what you have
        </p>
      </figure>
      <Navbar time={time} />
      <div className="sidebar-footer">
        <ButtonStatic type="button" calledFrom="sidebar">
          {time === 11 || time === 12 ? <WhiteSettings /> : <BlackSettings />}
        </ButtonStatic>
      </div>
    </aside>
  );
};

export default Sidebar;
