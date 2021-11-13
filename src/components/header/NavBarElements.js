import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import {FaBars} from "react-icons/fa"

export const Nav = styled.nav`
    background: rgb(43,43,43);
    height: 80px;
    display: flex;
    /*justify-content: space-between;*/
    padding: 0.5rem calc((100vw - 1000px)/2);
    z-index: 10;

    /*3rd*/
    justify-content: flex-start;
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
&.active{
    color: #15cdfc;
}
`

export const Bars = styled(FaBars)`
    display:none;
    color:#fff;
    @media screen and (max-width: 768px){
        img{
            width:35%;
        }
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
&:active{
    color:red;
    
}
`

export const NavMenu = styled.div`
    display:flex;
    align-items: center;
    /*margin-right: -24px;*/
    /* 2nd */
    /*margin-right: 24px;*/

    /*3rd*/
    width: 100vw;
    white-space: nowrap;

    @media screen and (max-width: 768px){
        display:none;
        img{
            width:35%;
        }
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    /*3rd*/
    justify-content: flex-end;
    width: 100vw;


    @media screen and (max-width: 768px){
        display:none;
        img{
            width:35%;
        }
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    border: none;
    color: #fff;
    outline: none;
    cursor: pointer;
    transition: all 0.2 ease-in-out;
    text-decoration:none;


    /*margin-left: 24px;*/


    &:hover{
        transition: all 0.2 ease-in-out;
        background: #fff;
        color: #010606;
    }
`