import styled from "styled-components";

const BubbleContainer = styled.div<{maxWidth?: string}>`
    display: inline-flex;
    flex-direction: column;
    padding: 0.5rem 1rem;
    background-color: rgba(255, 255, 255, 0.1); 
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(5px); 
    margin: 0.5rem;
    max-width: ${({maxWidth}) => maxWidth || "fit-content"};
`;

export default BubbleContainer;