import React, { useContext } from 'react';
import { Navbar, Nav, Dropdown } from 'rsuite';
import layout from '../../shared/constants/layout'
import { AuthContext } from "../../context/auth/auth_context";
import { logoutSuccess, loginAdminSuccess } from "../../context/auth/auth_action"

const HeaderBar = (props) => {
    const { sideMenuList, onClickNavItem } = props;
    const authContext = useContext(AuthContext);
    const { dispatchAuth } = authContext;

    const onLogout = () => {
        logoutSuccess(dispatchAuth);
    }
    const onAdmin = () => {
        loginAdminSuccess(dispatchAuth);
    }


    return (
        <Navbar
            style={{ height: layout.HEADER_HEIGHT }}
            appearance="inverse"
        >
            {authContext.isAuthenticate &&
                <Nav className='block lg:hidden'>
                    <Dropdown title="Menu">
                        {sideMenuList?.map((item, index) => {
                            const disableMenu = (authContext.isUser && item.isUser);
                            return (authContext.isUser ? disableMenu : !disableMenu) && (
                                <Dropdown.Item key={index} onClick={onClickNavItem(item.path)}>
                                    {item.name}
                                </Dropdown.Item>
                            )
                        })}
                    </Dropdown>
                </Nav>
            }
            <Nav pullRight>
                {authContext.isAuthenticate ?
                    <Nav.Item onClick={onLogout} >Logout</Nav.Item> :
                    <Nav.Item onClick={onAdmin} >Admin</Nav.Item>
                }
            </Nav>
        </Navbar >
    );
};


export default HeaderBar;
