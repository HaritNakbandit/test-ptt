import React, { useContext } from 'react';
import { Sidenav, Nav } from 'rsuite';
import layout from '../../shared/constants/layout'
import { AuthContext } from "../../context/auth/auth_context";
import { useLocation } from "react-router-dom";

const SideBar = (props) => {
  const { sideMenuList, onClickNavItem } = props
  const authContext = useContext(AuthContext);
  const location = useLocation();
  const activeMenu =
    location.pathname === "/"
      ? "/"
      : `/${location.pathname.split("/")[1]}`;



  return (
    <div >
      <Sidenav
        appearance="inverse"
        className='hidden lg:block'
        style={{ width: layout.SIDEBAR_WIDTH, height: `calc(${layout.SIDEBAR_HEIGHT} - ${layout.HEADER_HEIGHT})` }}
      >
        <Sidenav.Body>
          <Nav activeKey={activeMenu}>
            {sideMenuList.map((item, index) => {
              const disableMenu = (authContext.isUser && item.isUser);

              return (authContext.isUser ? disableMenu : !disableMenu) && (
                <Nav.Item key={index} eventKey={item.path} icon={item.icon} onClick={onClickNavItem(item.path)}>
                  {item.name}
                </Nav.Item>
              )
            })}
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};


export default SideBar;
