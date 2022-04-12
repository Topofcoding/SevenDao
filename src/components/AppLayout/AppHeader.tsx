import React, { useState } from "react";
import { AppHeaderWrapper, AppNavbarWrapper, AppSidebarWrapper, HeaderTitle, NavbarLink, NavbarLinkGroup, SidebarBtn, SidebarClose } from "./applayout.styles";

import Sidebar from "./Sidebar";

import metamaskImg from "../../assets/image/metamask.svg";
import WalletConnectBtn from "../Header/connect-button";

const AppHeader: React.FC = () => {
    const [sidebar, setSidebar] = useState(false);
    return (
        <>
            <AppHeaderWrapper>
                <SidebarBtn onClick={() => setSidebar(true)}>
                    <i className="bi bi-text-indent-right"></i>
                </SidebarBtn>
                <AppNavbarWrapper>
                    <HeaderTitle>SVC Protocol</HeaderTitle>
                    <NavbarLinkGroup>
                        <NavbarLink active={true}>App</NavbarLink>
                        <NavbarLink>| Buy SVC</NavbarLink>
                        <NavbarLink>| Docs</NavbarLink>
                        <NavbarLink>Discord</NavbarLink>
                        <NavbarLink>Twitter</NavbarLink>
                        <NavbarLink>Medium</NavbarLink>
                        <NavbarLink>
                            | +<img src={metamaskImg} alt="metamaskImg" />
                        </NavbarLink>
                    </NavbarLinkGroup>
                </AppNavbarWrapper>
                <WalletConnectBtn />
            </AppHeaderWrapper>
            <Sidebar active={sidebar} onClick={() => setSidebar(false)}>
                <SidebarClose onClick={() => setSidebar(false)}>
                    <i className="bi bi-x-lg"></i>
                </SidebarClose>
                <HeaderTitle>SVC Protocol</HeaderTitle>
                <NavbarLink active={true}>App</NavbarLink>
                <NavbarLink>Buy SVC</NavbarLink>
                <NavbarLink>Docs</NavbarLink>
                <NavbarLink>Discord</NavbarLink>
                <NavbarLink>Twitter</NavbarLink>
                <NavbarLink>Old contract rewards</NavbarLink>
                <NavbarLink>Medium</NavbarLink>
                <NavbarLink>
                    +<img src={metamaskImg} alt="metamaskImg" />
                </NavbarLink>
            </Sidebar>
        </>
    );
};

export default AppHeader;
