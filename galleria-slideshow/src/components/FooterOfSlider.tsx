import styled from "styled-components";
import { useAppSelector } from "store/redux";
import backButton from "../assets/icon-back-button.svg";
import nextButton from "../assets/icon-next-button.svg";
import { useState } from "react";

const FooterOfSlider = (props: { listOrder:number; setListOrder: (type:number) => void }) => {
    
    const [percentage,setPercentage] = useState<number>(6.7)
    const list = useAppSelector(state => state.galleriaList.items);
    const leftButton = () => {
        if(props.listOrder===0){
            props.setListOrder(0);
        }else{
            props.setListOrder(props.listOrder-1)
        }
        
        if(percentage<=10){
           return
        }else{
        setPercentage(percentage-100/(list.length));
        }
    }
    const rightButton = () => {
        if(props.listOrder===list.length-1){
            props.setListOrder(list.length-1);
        }else{
            props.setListOrder(props.listOrder+1);
        }

        if(percentage>=100){
            return
        }else{
        setPercentage(percentage+100/(list.length));
        }
    }
    return ( 
        <FooterContainer>
            <div>
                <StaticHr></StaticHr>
                <Progress style={{width:percentage+"%"}}></Progress>
            </div>
            <ContainerOfTextAndButtons>
                <div>
                    <h1>{list[props.listOrder].name}</h1>
                    <span>{list[props.listOrder].artist.name}</span>
                </div>
                <ContainerOfButtons>
                    <img onClick={leftButton} alt="back-button" src={backButton} />
                    <img onClick={rightButton} alt="back-button" src={nextButton} />
                </ContainerOfButtons>
            </ContainerOfTextAndButtons>
        </FooterContainer>
    );
}

const FooterContainer = styled.div`
    margin-top: 100px;
    position: relative;
    h1{
        color:#000000;
        font-size: 14px;
        font-weight: 700;
        line-height: 17px;
        letter-spacing: 0px;
        @media screen {
            font-size: 18px;
            line-height: 22px;
        }
    }
    span{
        font-family: #000000;
        font-size: 10px;
        font-weight: 400;
        line-height: 12px;
        letter-spacing: 0px;
        mix-blend-mode: normal;
        opacity: 0.75;
        @media screen {
            font-size: 13px;
            line-height: 16px;
        }
    }
`
const ContainerOfTextAndButtons = styled.div`
    display: flex;
    justify-content: space-between;
    margin:16px 24px 17px;
    img{
        width:16px;
        height:16px;
    }
`
 
const ContainerOfButtons = styled.div`
    display: flex;
    gap: 24px;
    img{
        cursor: pointer;
    }
`
const Progress = styled.hr`
    position: absolute;
    background-color: red;
    top: -1px;
    height: 3px;
`
const StaticHr = styled.hr`
    width:100%;
`

export default FooterOfSlider;