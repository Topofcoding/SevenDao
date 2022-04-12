import React, { useEffect, useState } from "react";
import { LandingHeaderContainer, LandingHeaderWrapper, LogoWrapper, NavbarItem, NavbarWrapper } from "./layout.styles";
import Container from "../Container";
import { Link, useHistory } from "react-router-dom";

import logoImg from "../../assets/image/logoN.png";
import Button from "../Button/Button";
import { SidebarBtn, SidebarClose } from "../AppLayout/applayout.styles";
import Sidebar from "../AppLayout/Sidebar";

const LandingHeader: React.FC = () => {
    const [sidebar, setSidebar] = useState(false);
    const router = useHistory();
    const handleScroll = () => {
        const header: any = document.querySelector("#landing-header");
        if (document.documentElement.scrollTop > 0) {
            header.style.boxShadow = "0 1rem 3rem rgb(31 45 61 / 13%)";
        } else {
            header.style.boxShadow = "none";
        }
    };
    useEffect(() => {
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <LandingHeaderWrapper id="landing-header">
                <Container>
                    <LandingHeaderContainer>
                        <SidebarBtn style={{ color: "#000" }} onClick={() => setSidebar(true)}>
                            <i className="bi bi-text-indent-right"></i>
                        </SidebarBtn>
                        <NavbarWrapper>
                            <NavbarItem to="/app">App</NavbarItem>
                            <NavbarItem to="">Buy SVC</NavbarItem>
                            <NavbarItem to="">Discord</NavbarItem>
                            <NavbarItem to="">Twitter</NavbarItem>
                            <NavbarItem to="">Medium</NavbarItem>
                            <NavbarItem to="">Docs</NavbarItem>
                            <NavbarItem to="">Contracts</NavbarItem>
                        </NavbarWrapper>
                        <Button
                            label="Open the app"
                            onClick={() => {
                                router.push("/app");
                            }}
                        />
                    </LandingHeaderContainer>
                </Container>
            </LandingHeaderWrapper>
            <Sidebar active={sidebar} onClick={() => setSidebar(false)}>
                <SidebarClose onClick={() => setSidebar(false)}>
                    <i className="bi bi-x-lg"></i>
                </SidebarClose>
                <NavbarItem to="/app">App</NavbarItem>
                <NavbarItem to="">Buy SVC</NavbarItem>
                <NavbarItem to="">Discord</NavbarItem>
                <NavbarItem to="">Twitter</NavbarItem>
                <NavbarItem to="">Medium</NavbarItem>
                <NavbarItem to="">Docs</NavbarItem>
                <NavbarItem to="">Contracts</NavbarItem>
            </Sidebar>
        </>
    );
};

export default LandingHeader;
