import { Link } from "react-router-dom";
import styled from "styled-components";

export const LandingHeaderWrapper = styled.div`
    transition: all 0.3s;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #fff;
    z-index: 999;
`;

export const LandingHeaderContainer = styled.div`
    display: flex;
    height: 76px;
    justify-content: space-between;
    align-items: center;
`;

export const NavbarWrapper = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 1024px) {
        display: none;
    }
`;

export const LogoWrapper = styled.div`
    width: 50px;
    height: auto;
    img {
        width: 100%;
    }
`;

export const NavbarItem = styled(Link)`
    display: block;
    text-decoration: none;
    font-weight: 500;
    cursor: pointer;
    font-size: 1rem;
    line-height: 60px;
    transition: all 0.3s;
    color: #03032d;
    padding: 0.5rem 1rem;
    padding-right: 0.8rem;
    padding-left: 0.8rem;
    :hover {
        color: rgb(24, 104, 183);
    }
`;

export const LandingFooterWrapper = styled.div`
    background-color: rgb(24, 104, 183);
    border-top: 1px solid #e2e8f0;
`;

export const LandingFooterContainer = styled.div`
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        margin: 0;
        color: rgba(255, 255, 255, 0.5);
    }
`;

export const SocialLinkGroup = styled.div`
    display: flex;
`;

export const SocialLink = styled.div`
    width: 32px;
    height: 32px;
    color: rgb(24, 104, 183);
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    background-color: #fff;
    transition: all 0.3s;
    :hover {
        background-color: #c4d9f7;
    }
`;
