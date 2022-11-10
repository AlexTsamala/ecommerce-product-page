import styled from "styled-components";
import ViewIcon from "../assets/icon-view-image.svg";
import {useState} from 'react'

const ViewImage = (props: { setStatus: (arg0: boolean) => void; status: boolean; }) => {

    const statusHandler = () => {
        props.setStatus(!props.status)
    }

    return ( 
        <>
            <Container onClick={statusHandler} type="button">
                <img alt="ViewIcon" src={ViewIcon} />
                <h1>VIEW IMAGE</h1>
            </Container>
        </>
     );
}
 
export default ViewImage;

const Container = styled.button`
    position: absolute;
    background-color: #000000;
    width: 152px;
    height: 40px;
    opacity: 0.75;
    top: 16px;
    left: 16px;
    display: flex;
    padding: 14px;
    align-items: center;
    gap: 14px;
    justify-content: center;
    cursor: pointer;
    h1{
        color:#ffffff;
        font-size: 10px;
        font-weight: 700;
        line-height: 12px;
        letter-spacing: 2.1px;
        padding-top: 3px;
    }
`
