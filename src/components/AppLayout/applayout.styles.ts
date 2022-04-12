import styled from "styled-components";

export const AppHeaderWrapper = styled.div`
    display: flex;
    padding: 8px 12px;
    background-color: rgb(24, 104, 183);
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    left: 0;
    z-index: 999;
    justify-content: space-between;
`;

export const SidebarBtn = styled.div`
    cursor: pointer;
    color: white;
    font-size: 24px;
    display: none;
    @media screen and (max-width: 1024px) {
        display: block;
    }
`;

export const SidebarClose = styled.div`
    cursor: pointer;
    color: white;
    font-size: 24px;
    position: absolute;
    right: 20px;
    top: 20px;
`;

export const AppNavbarWrapper = styled.div`
    display: flex;
    @media screen and (max-width: 1024px) {
        display: none;
    }
`;

export const HeaderTitle = styled.div`
    color: #fff;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    font-size: 1.25rem;
    margin-right: 16px;
`;

export const NavbarLinkGroup = styled.div`
    display: flex;
`;

export const NavbarLink = styled.div<{ active?: boolean }>`
    display: flex;
    align-items: center;
    color: ${({ active }) => (active ? "#fff" : "rgba(255,255,255, 0.55)")};
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    img {
        width: 25px;
    }
`;

export const AppFooterWrapper = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;

    & > * {
        text-decoration: none;
        color: #000;
        cursor: pointer;
        padding: 20px 5px;
    }
`;

export const AppSidebarWrapper = styled.div<{ active: boolean }>`
    display: none;
    @media screen and (max-width: 1024px) {
        position: fixed;
        max-width: 320px;
        background-color: rgb(0, 80, 183);

        width: 100%;
        height: 100%;
        transition: all 0.3s;
        z-index: 9999;
        top: 0;
        left: ${({ active }) => (active ? 0 : "-320px")};
        padding: 70px 40px;
    }
`;

export const SidebarOverLay = styled.div<{ active: boolean }>`
    display: none;
    @media screen and (max-width: 1024px) {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: all 0.3s;
        z-index: 9998;
        background-color: #00000080;
        opacity: ${({ active }) => (active ? 1 : 0)};
        visibility: ${({ active }) => (active ? "visible" : "hidden")};
    }
`;
