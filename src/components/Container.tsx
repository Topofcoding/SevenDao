import React from "react";
import styled from "styled-components";

const ContainerWrapper = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: auto;
`;

const Container: React.FC = ({ children }) => {
    return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
