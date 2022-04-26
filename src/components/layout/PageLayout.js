
import HeaderBar from "./HeaderBar"
import SideBar from "./SideBar"
import layout from '../../shared/constants/layout'
import route from '../../shared/constants/route_list';
import PeoplesIcon from '@rsuite/icons/Peoples';
import PeoplesCostomizeIcon from '@rsuite/icons/PeoplesCostomize';
import { useNavigate } from "react-router-dom";

const PageLayout = ({ children }) => {
    const navigate = useNavigate();

    const sideMenuList = [
        {
            name: "Home",
            path: route.HOME,
            icon: <PeoplesIcon />,
            isUser: true
        }, {
            name: "Management",
            path: route.MANAGEMENT,
            icon: <PeoplesCostomizeIcon />,
            isUser: false
        }
    ]
    const onClickNavItem = (path) => (event) => {
        navigate(path)
    };

    return (
        <div className="flex">
            <div className="h-screen w-screen">
                <HeaderBar sideMenuList={sideMenuList} onClickNavItem={onClickNavItem} />
                <div className={`flex flex-row h-[calc(100%_-_${layout.HEADER_HEIGHT})] bg-[#E8EEFA]`}>
                    <SideBar sideMenuList={sideMenuList} onClickNavItem={onClickNavItem} />
                    <div className="w-full p-[24px]" >
                        {children}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PageLayout;
