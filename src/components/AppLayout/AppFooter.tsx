import React from "react";
import { AppFooterWrapper } from "./applayout.styles";

const AppFooter: React.FC = () => {
    return (
        <AppFooterWrapper>
            <a href="#">Twitter</a>|<a href="#">Discord</a>|<a href="#">Docs</a>|<a href="#">Contracts</a>
        </AppFooterWrapper>
    );
};

export default AppFooter;
