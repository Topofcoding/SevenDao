import React from "react";
import Container from "src/components/Container";
import { IntroContainer, LandingIntroWrapper, IntroImageContainer } from "./landing.styles";
import logoImg from "../../assets/image/logo.png";

const LandingIntro: React.FC = () => {
    // commit 
    return (
        <Container>
            <LandingIntroWrapper>
                <IntroContainer>
                    <h3>SVC Protocol</h3>
                    <h1>
                        Node up.
                        <br />
                        Contribute to liquidity.
                    </h1>
                    <p>A node protocol that owns its liquidity and automatically adjusts its supply in order to maintain a stable yield.</p>
                </IntroContainer>
                <IntroImageContainer>
                    <div>
                        <img src={logoImg} alt="logoImg" />
                    </div>
                </IntroImageContainer>
            </LandingIntroWrapper>
        </Container>
    );
};

export default LandingIntro;
