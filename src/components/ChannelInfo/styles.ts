import styled from "styled-components";
import { Hashtag } from 'styled-icons/heroicons-outline'

export const Container = styled.div`
    grid-area: CI;
    background-color: var(--primary);

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 17px;
    box-shadow: rgba(0, 0, 0, 0.7) 0 2px 0 0;
    z-index: 2;
    
    height: calc(100% - 10px);
`

export const HashtagIcon = styled(Hashtag)`
    width: 24px;
    height: 24px;
    color: var(--symbol);
`

export const Title = styled.h1`
    margin-left: 9px;
    font-size: 16px;
    font-weight: bold;
    color: var(--white)
`

export const Separator = styled.div`
    border-right: 1px solid var(--white);
    height: 24px;
    margin: 0 13px;
    opacity: 0.2;
`

export const Description = styled.span`
    font-size: 15px;
    color: var(--gray)
`