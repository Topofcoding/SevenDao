import React from "react";
import Container from "src/components/Container";
import { CardGroupWrapper, CardWrapper } from "./landing.styles";

interface CardProps {
    title: string;
    desc: string;
}

const cardData = [
    {
        title: "Stable passive income",
        desc: "Our nodes offer from 0.1% to 1% daily ROI depending on initial investment",
    },
    {
        title: "Nodes for everyone",
        desc: "We offer 8 different node sizes so you invest as much as you want",
    },
    {
        title: "Simple to use",
        desc: "Our app is simple to use and you can get started in 3 easy steps",
    },
];

const LandingCardGroup: React.FC = () => {
    return (
        <Container>
            <CardGroupWrapper>
                {cardData.map((item: CardProps, key: number) => (
                    <Card key={key} title={item.title} desc={item.desc} />
                ))}
            </CardGroupWrapper>
        </Container>
    );
};

const Card: React.FC<CardProps> = ({ title, desc }) => {
    return (
        <CardWrapper>
            <h1>{title}</h1>
            <p>{desc}</p>
        </CardWrapper>
    );
};

export default LandingCardGroup;
