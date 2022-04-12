import React from "react";
import Container from "src/components/Container";
import { LandingQuestionWrapper, QestionCardGrid, IconWrapper, QuestionCardWrapper, SectionTitle, QuestionCardContent } from "./landing.styles";

interface CardProps {
    icon: string;
    title: string;
    desc: string;
}

const LandingQuestion: React.FC = () => {
    const data = [
        {
            icon: "patch-question",
            title: "What's SVC?",
            desc: "SVC is a node protocol that owns its liquidity and that automatically adjusts its supply in order to maintain a stable yield forever.",
        },
        {
            icon: "box",
            title: "Why does SVC exist?",
            desc: "We're very passionate about passive income, we set out to create a passive income machine that would just work by itself.",
        },
        {
            icon: "people",
            title: "How can I participate?",
            desc: "We're in the Polygon network. 1. Buy SVC, 2. Buy DAI, 3. Setup a node by providing SVC and DAI at the same amount.",
        },
        {
            icon: "people",
            title: "What's in it for me?",
            desc: "A stable return. SVC pays a daily return per node, depending on the type. That's effectively between 0.1 and 1% per day.",
        },
    ];
    return (
        <LandingQuestionWrapper>
            <Container>
                <SectionTitle>
                    <h1>Any questions?</h1>
                    <p>{"We have way more content in our docs, but here's a TL;DR"}</p>
                </SectionTitle>
                <QestionCardGrid>
                    {data.map((item: CardProps, key: number) => (
                        <QuestionCard key={key} {...item} />
                    ))}
                </QestionCardGrid>
            </Container>
        </LandingQuestionWrapper>
    );
};

const QuestionCard: React.FC<CardProps> = ({ icon, title, desc }) => {
    return (
        <QuestionCardWrapper>
            <IconWrapper>
                <i className={`bi bi-${icon}`}></i>
            </IconWrapper>
            <QuestionCardContent>
                <h3>{title}</h3>
                <p>{desc}</p>
            </QuestionCardContent>
        </QuestionCardWrapper>
    );
};

export default LandingQuestion;
