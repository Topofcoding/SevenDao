import React from "react";
import { AppSidebarWrapper, SidebarOverLay } from "./applayout.styles";

const Sidebar: React.FC<any> = ({ active, onClick, children }) => {
    return (
        <>
            <AppSidebarWrapper active={active}>{children}</AppSidebarWrapper>
            <SidebarOverLay active={active} onClick={onClick} />
        </>
    );
};

export default Sidebar;
