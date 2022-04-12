import styled from "styled-components";

export const LandingViewWrapper = styled.div``;

export const LandingIntroWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const LandingContainer = styled.div`
    padding-top: 112px;
`;

export const IntroContainer = styled.div`
    max-width: 500px;
    width: 100%;
    h1,
    h3,
    p {
        margin: 0;
        padding: 0;
    }
    h1 {
        color: #03032d;
        margin-bottom: 1rem;
        font-weight: 600;
        line-height: 1.3;
        font-size: 2.5rem;
    }
    h3 {
        color: #8247e5;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.3;
    }
    p {
        margin-bottom: 1.5rem;
        font-size: 1.15rem;
        line-height: 1.7;
        color: #6c7a87;
        font-weight: 400;
    }
`;

export const IntroImageContainer = styled.div`
    align-items: center;
    max-width: 600px;
    width: 100%;
    div {
        max-width: 350px;
        width: 100%;
        margin: auto;
    }
    img {
        width: 100%;
    }
`;

export const CardGroupWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
    padding: 100px 0;
    border-bottom: 1px solid #e2e8f0;
    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`;

export const CardWrapper = styled.div`
    width: 100%;
    z-index: 3;
    position: relative;
    padding: 28px;
    border: 1px solid #eaecf3;
    border-radius: 0.5rem;
    transition: all 0.25s;
    box-shadow: none;
    :hover {
        box-shadow: 0 0 1.24rem rgb(31 45 61 / 10%);
    }
    h1,
    p {
        padding-left: 24px;
        margin: 0;
    }
    h1 {
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
        font-weight: 600;
        line-height: 1.3;
        color: #03032d;
    }
    p {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.7;
        color: #6c7a87;
    }
`;

export const LandingAboutWrapper = styled.div`
    max-width: 600px;
    width: 100%;
    margin: auto;
    padding: 100px 0;
`;

export const AboutTitle = styled.div`
    text-align: center;
    margin-bottom: 3rem;
    h1 {
        line-height: 1.2;
        margin: 0;
        margin-bottom: 1rem;
        font-weight: 600;
        color: #03032d;
    }
    p {
        margin: 0;
        font-size: 1.15rem;
        font-weight: 400;
        line-height: 1.7;
        color: #6c7a87;
    }
`;

export const TabWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 600px;
    overflow: auto;
`;

export const TabContainer = styled.div`
    overflow: auto;
`;

export const TabButton = styled.div<{ active: boolean }>`
    width: 100%;
    text-align: center;
    background-color: ${({ active }) => (active ? "rgb(24, 104, 183)" : "#fff")};
    border: 1px solid transparent;
    border-color: ${({ active }) => (active ? "rgb(24, 104, 183)" : "#eaecf3")};
    color: ${({ active }) => (active ? "#fff" : "#03032d")};
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    padding: 0.5rem 1.25rem;
    font-size: 0.875rem;
    border-radius: 0.2rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    font-weight: 500;
    cursor: pointer;
    line-height: 1.7;
`;

export const TabContent = styled.div<{ active: boolean }>`
    opacity: ${({ active }) => (active ? 1 : 0)};
    padding: 80px 12px 0 56px;
    h3,
    h5,
    h4,
    h1,
    p {
        margin: 0;
    }

    h3 {
        margin-bottom: 16px;
        color: rgb(24, 104, 183) !important;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.3;
    }

    h1 {
        margin-bottom: 8px;
        font-weight: 700;
        line-height: 1.3;
        color: #03032d;
        font-size: 1.75rem;
    }
    p {
        margin-bottom: 32px;
        font-size: 1.15rem;
        font-weight: 400;
        line-height: 1.7;
        color: #6c7a87;
    }
`;

export const TabList = styled.div`
    margin-bottom: 24px;
    display: flex;
`;

export const ListNum = styled.div`
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 999px;
    color: rgb(24, 104, 183);
    background-color: rgba(24, 104, 183, 0.3);
`;

export const ListContent = styled.div`
    width: calc(100% - 1rem);
    padding-left: 16px;
    h4 {
        margin-bottom: 0.25rem !important;
        font-weight: 700;
        line-height: 1.3;
        color: #03032d;
    }
    h5 {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.7;
        color: #6c7a87;
    }
`;

export const LandingQuestionWrapper = styled.div`
    background-color: rgb(24, 104, 183);
    padding: 100px 0;
`;

export const SectionTitle = styled.div`
    margin-bottom: 48px;
    h1,
    p {
        margin: 0;
        text-align: center;
    }
    h1 {
        color: #ffffff;
        line-height: 1.2;
        font-size: 2.5rem;
        margin-bottom: 1rem !important;
        font-weight: 700;
    }
    p {
        font-size: 1.15rem;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.65);
    }
`;

export const QestionCardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 32px;
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const QuestionCardWrapper = styled.div`
    background-color: #fff;
    border-radius: 0.5rem;

    padding: 28px;
    display: flex;
`;

export const IconWrapper = styled.div`
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    background-color: rgb(24, 104, 183);
    color: #ffffff;
    border-radius: 999px;
`;

export const QuestionCardContent = styled.div`
    width: calc(100% - 66px - 64px);
    h3,
    p {
        margin: 0;
    }
    h3 {
        margin-bottom: 0.5rem;
        font-weight: 600;
        line-height: 1.3;
        font-size: 1.25rem;
        color: #03032d;
    }
    p {
        width: 90%;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.7;
        color: #6c7a87;
    }
    margin-left: 10px;
`;
