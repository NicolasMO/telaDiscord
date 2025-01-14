import { styled } from "styled-components";

export const Container = styled.div`
    grid-area: SL;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--tertiary);
    padding: 11px 0;

    height: 100vh;
    overflow-y: scroll;

    /* Chrome, Safari, Opera */
    ::-webkit-scrollbar {
        display: none;
    }

    /* Firefox */
    scrollbar-width: none;

    /* IE 10+ */
    -ms-overflow-style: none;
`

export const Separator = styled.div`
    width: 32px;
    border-bottom: 2px solid var(--quaternary);
    margin-bottom: 8px;
`