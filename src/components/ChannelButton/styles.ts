import styled from "styled-components";
import { Hashtag } from "styled-icons/heroicons-outline"
import { PersonAdd, Settings } from "styled-icons/material"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 5px 3px;
    border-radius: 5px;
    cursor: pointer;

    background-color: transparent;
    transition: background-color .2s color .2s;

    > div {
        display:flex;
        align-items: center;
        
        > span {
            color: var(--senary);
            font-size: 15px;
            margin-left: 5px;
        }
    }
    
    &.active, &:hover {
        background-color: var(--quinary);
        > div span {
            color: var(--white);
        }

        div:nth-child(2) > svg {
            display: flex;
        }
    }

    div:nth-child(2) > svg {
        display: none;
    }
`
export const HashtagIcon = styled(Hashtag)`
    width: 20px;
    height: 20px;
    color: var(--symbol);
`
export const InviteIcon = styled(PersonAdd)`
    width: 20px;
    height: 20px;
    color: var(--symbol);
    margin-right: 3px;

    transition: color .2s;

    &:hover{
        color: var(--white)
    }
`
export const SettingsIcon = styled(Settings)`
    width: 20px;
    height: 20px;
    color: var(--symbol);

    transition: color .2s;

    &:hover{
        color: var(--white)
    }
`