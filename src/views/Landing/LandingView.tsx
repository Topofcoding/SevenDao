import React from "react";
import LandingFooter from "src/components/LandingLayout/LandingFooter";
import LandingHeader from "src/components/LandingLayout/LandingHeader";
import { LandingContainer, LandingViewWrapper } from "./landing.styles";
import LandingAbout from "./LandingAbout";
import LandingCardGroup from "./LandingCardGroup";
import LandingIntro from "./LandingIntro";
import LandingQuestion from "./LandingQuestion";

const LandingView: React.FC = () => {
    return (
        <LandingViewWrapper>
            <LandingHeader />
            <LandingContainer>
                <LandingIntro />
                <LandingCardGroup />
                <LandingAbout />
                <LandingQuestion />
            </LandingContainer>
            <LandingFooter />
        </LandingViewWrapper>
    );
};

export default LandingView;
