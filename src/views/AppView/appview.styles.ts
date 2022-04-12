import styled from "styled-components";

export const AppViewWrapper = styled.div``;

export const AppCardGroup = styled.div<{ repeat: number; padding?: boolean }>`
    display: grid;
    grid-template-columns: repeat(${({ repeat }) => repeat}, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 48px;
    padding: ${({ padding }) => (padding ? "48px 0" : "100px 0")};
    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`;

export const AppCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #eee7fa;
    padding: 1rem 1rem;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    h3,
    h4,
    h5 {
        margin: 0;
        color: #000;
        text-align: center;
    }
    h3 {
        font-weight: 500;
        font-size: 1.25rem;
        line-height: 1.2;
        margin-bottom: 0.5rem;
    }
    h4 {
        margin-bottom: 1rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
    }
    h5 {
        font-size: 0.9rem;
        font-weight: 400;
        line-height: 1.5;
    }
    img {
        width: 40px;
    }
`;

export const Divider = styled.div`
    width: 100%;
    height: 2px;
    background-color: #ddd;
`;

export const ModalHeader = styled.div`
    font-size: 20px;
    padding: 20px 30px;
    border-bottom: 1px solid #ddd;
`;

export const ModalContainer = styled.div`
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .select-label {
        padding: 0 0 20px;
    }
`;

export const ModalFooter = styled.div`
    padding: 20px 30px;
    border-top: 1px solid #ddd;
    display: flex;
    justify-content: flex-end;
`;

export const MintFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    width: 100%;
`;
``;

export const FormLabel = styled.div``;

export const MintForm = styled.div`
    padding-top: 10px;
    justify-content: center;
    display: flex;
    align-items: center;
    width: 100%;
    i {
        font-size: 40px;
        font-weight: 900;
        color: rgb(24, 104, 183);
    }
`;
