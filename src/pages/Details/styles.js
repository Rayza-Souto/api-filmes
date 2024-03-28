import Styled from "styled-components";

export const Container = Styled.div`

    padding: 4rem 0;

    h1 {
        margin: 3rem 0;
    }

    .movie {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img{
        width: 300px;
        border-radius: 1rem;
    }

    .details {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-left: 5rem;
        max-width: 50%;
    }

    button {
        background: #6654da;
        border: none;
        cursor: pointer;
        border-radius: 1rem;
        color: white;
        padding: 0.8rem 2rem;
        margin-top: 1rem;
        font-size: 100%;
        transition: all 0.3s;
    }

    button.hover {
        background: #5848c2;
    }

    spam {
        line-height: 130%;
        margin-top: 1rem;
        font-size: 110%;
    }

    .release_date {
        opacity: 0.5;
    }
`;
