import styled from "styled-components";

export const Container = styled.div`
    grid-area: UL;
    display: flex;
    flex-direction: column;
    background-color: var(--secondary);
    padding: 3px 6px 0px 19px;
    margin-top: -8px;
    max-height: calc(100vh - 46px);

    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: var(--tertiary) var(--secondary);
`

export const Status = styled.div`
    margin-top: 20px;

    text-transform: uppercase;
    font-weight: 500;
    color: var(--gray)
`
export const User = styled.div`
    display: flex;
    align-items: center;

    margin-top: 5px;
    padding: 5px;

    border-radius: 4px;

    cursor: pointer;
    background: transparent;
    transition: background .2s;
    
    &:hover {
        background: rgba(255, 255, 255, 0.1);
    }

    > strong {
        margin-left: 13px;
        font-weight: 500;
        color: var(--white);
        opacity: 0.7;
        
        white-space: nowrap;
        text-overflow: ellipsis;

        overflow: hidden;
    }

    > span {
        margin-left: 9px;
        background-color: var(--discord);
        padding: 4px 5px;
        border-radius: 4px;

        color: var(--white);
        font-weight: 500;
        text-transform: uppercase;
        font-size: 11px;
    }
`
export const Avatar = styled.div`
    flex-shrink: 0;

    width: 32px;
    height: 32px;

    background-color: var(--primary);
    border-radius: 50%;

    &.bot {
        background-color: var(--mention-detail);
    }
`