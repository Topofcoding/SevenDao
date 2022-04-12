import React from "react";
import { LandingFooterContainer, LandingFooterWrapper, SocialLink, SocialLinkGroup } from "./layout.styles";
import Container from "../Container";

const LandingFooter = () => {
    return (
        <LandingFooterWrapper>
            <Container>
                <LandingFooterContainer>
                    <SocialLinkGroup>
                        <SocialLink>
                            <i className="bi bi-discord"></i>
                        </SocialLink>
                        <SocialLink>
                            <i className="bi bi-twitter"></i>
                        </SocialLink>
                    </SocialLinkGroup>
                    {/* <p>{new Date().getFullYear()} ❤️ SVC</p> */}
                </LandingFooterContainer>
            </Container>
        </LandingFooterWrapper>
    );
};

export default LandingFooter;
