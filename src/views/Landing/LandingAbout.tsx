import React, { useState } from "react";
import Container from "src/components/Container";
import { AboutTitle, LandingAboutWrapper, ListContent, ListNum, TabButton, TabContent, TabWrapper, TabList, TabContainer } from "./landing.styles";

const LandingAbout: React.FC = () => {
    const [tab, setTab] = useState("types");
    const handleTabClick = (key: string) => {
        setTab(key);
    };
    return (
        <Container>
            <LandingAboutWrapper>
                <AboutTitle>
                    <h1>What we're about.</h1>
                    <p>A stable return on investment that will last indefinitely.</p>
                </AboutTitle>
                <TabButtonGroup onClick={handleTabClick} />
                {tab === "types" && <AboutTypes active={tab === "types"} />}
                {tab === "protocol" && <AboutProtocol active={tab === "protocol"} />}
                {tab === "auto" && <AboutAuto active={tab === "auto"} />}
            </LandingAboutWrapper>
        </Container>
    );
};

const TabButtonGroup: React.FC<{ onClick: Function }> = ({ onClick }) => {
    const [selected, setSelected] = useState("types");
    const tabBtns = [
        {
            key: "types",
            title: "Types of Nodes",
        },
        {
            key: "protocol",
            title: "Protocol owned LPs",
        },
        {
            key: "auto",
            title: "Auto-adjusting supply",
        },
    ];

    const handleClick = (key: string) => {
        setSelected(key);
        onClick(key);
    };

    return (
        <TabContainer>
            <TabWrapper>
                {tabBtns.map((item: { title: string; key: string }, key: number) => (
                    <TabButton active={item.key === selected} key={key} onClick={() => handleClick(item.key)}>
                        {item.title}
                    </TabButton>
                ))}
            </TabWrapper>
        </TabContainer>
    );
};

const AboutTypes: React.FC<{ active: boolean }> = ({ active }) => {
    const data = [
        {
            title: "Planck SVC",
            desc: "25 SVC x 25 DAI - returns 0.1 SVC/day",
        },
        {
            title: "Femto SVC",
            desc: "50 SVC x 50 DAI - returns 0.3 SVC/day",
        },
        {
            title: "Pico SVC",
            desc: "75 SVC x 75 DAI - returns 0.6 SVC/day",
        },
        {
            title: "Nano SVC",
            desc: "100 SVC x 100 DAI - returns 1 SVC/day",
        },
        {
            title: "Mini SVC",
            desc: "250 SVC x 250 DAI - returns 3 SVC/day",
        },
        {
            title: "Kilo SVC",
            desc: "1000 SVC x 1000 DAI - returns 16 SVC/day",
        },
        {
            title: "Giga SVC",
            desc: "5000 SVC x 5000 DAI - returns 100 SVC/day",
        },
    ];
    return (
        <TabContent active={active}>
            <h3>8 different types of nodes</h3>
            <h1>Choose yours...</h1>
            <p>The bigger the node, the better the daily return</p>
            {data.map((item: { title: string; desc: string }, key: number) => (
                <TabList key={key}>
                    <ListNum>{key + 1}</ListNum>
                    <ListContent>
                        <h4>{item.title}</h4>
                        <h5>{item.desc}</h5>
                    </ListContent>
                </TabList>
            ))}
        </TabContent>
    );
};

const AboutProtocol: React.FC<{ active: boolean }> = ({ active }) => {
    return (
        <TabContent active={active}>
            <h3>LP tokens pool</h3>
            <h1>Protocol owned liquidity</h1>
            <p>
                {
                    "When a node is minted we create a SVC-DAI liquidity pair in SushiSwap and store the LP tokens in the contract's pool. This means that SVC will always have enough liquidity to be traded. The more nodes are minted, the more liquid SVC has."
                }
            </p>
        </TabContent>
    );
};

const AboutAuto: React.FC<{ active: boolean }> = ({ active }) => {
    return (
        <TabContent active={active}>
            <h1>Auto-adjusting supply</h1>
            <p>
                {
                    "SVC DAO's contract adjusts it's own supply daily to keep a constant APR runway of 365 days. This means that for every node that exists we'll always have enough rewards to pay one year ahead. This value is adjusted daily, so it means there will always exist enough SVC to pay node holders."
                }
            </p>
            <p>
                {
                    "This system also makes the token inflationary if there's new nodes being created, but deflationary if there's an excess of SVC in the pool. The total supply isn't a fixed number as in other tokens."
                }
            </p>
        </TabContent>
    );
};

export default LandingAbout;
