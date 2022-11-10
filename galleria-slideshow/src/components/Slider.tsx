import { useAppSelector } from "store/redux";
import {useState} from 'react';
import styled from 'styled-components';
import FooterOfSlider from "./FooterOfSlider";
import ViewImage from "./ViewImage";

const SlideSHow = () => {
    const [listOrder,setListOrder] = useState<number>(0);
    const [status,setStatus] = useState<boolean>(false);
    const list = useAppSelector(state => state.galleriaList.items);
    const statusHandler = () => {
        setStatus(!status)
    }
    return (
        <>
        <Container>
            <PicturesDiv>
                <Picture alt={list[listOrder].name} src={process.env.PUBLIC_URL+list[listOrder].images.hero.small}/>
                <TabletPicture alt={list[listOrder].name} src={process.env.PUBLIC_URL+list[listOrder].images.gallery}/>
                <ViewImage status={status} setStatus={setStatus}/>
            </PicturesDiv>
            <ArtistsContainer>
                <h1>{list[listOrder].name}</h1>
                <span>{list[listOrder].artist.name}</span>
                <ArtistMobile alt={list[listOrder].artist.name} src={list[listOrder].artist.image} />
                <ArtistTablet alt={list[listOrder].artist.name} src={list[listOrder].artist.image} />
            </ArtistsContainer>
                <ParagraphDiv>
                    <span>{list[listOrder].year}</span>
                    <p>{list[listOrder].description}</p>
                    <a href={list[listOrder].source} target="_blank" rel="noreferrer">GO TO SOURCE</a>
                </ParagraphDiv>
        </Container>
        <FooterOfSlider listOrder={listOrder} setListOrder={setListOrder}/>
        {!status? <></> :
        <Modal>
                <div onClick={statusHandler} >CLOSE</div>
                <ModalMobilePicture alt={list[listOrder].artist.name} src={list[listOrder].images.thumbnail} />
                <ModalTabletPicture alt={list[listOrder].artist.name} src={list[listOrder].images.gallery} />
        </Modal>
        }
        </>
    );
}
 
export default SlideSHow;

const Container = styled.div`
    margin: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    @media (min-width:768px) {
        margin:40px;
    }
    @media (min-width:1440px) {
        flex-direction: row;
        justify-content: space-between;
    }
`
const PicturesDiv = styled.div`
    position: relative;
    @media (min-width:768px) {
        align-self: baseline;   
    }
`
const Picture = styled.img`
    width: 327px;
    @media (min-width:768px) {
        display: none;
    }
`
const TabletPicture = styled.img`
    display: none;
    @media (min-width:768px) {
        display: block;
        Width:475px;
        Height:560px;
    }
`

const ArtistsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: -48px;
    margin-left: -48px;
    background-color: white;
    width: 280px;
    padding-left: 24px;
    padding-top: 24px;
    z-index: 1;
    @media (min-width:768px) {
        width:445px;
        height:238px;
        position: absolute;
        top: 47px;
        left: 293px;
    }
    @media (min-width:1440px) {
        top: 47px;
        left: 477px;
    }
    h1{
        font-size: 24px;
        font-weight: 700;
        line-height: 29px;
        letter-spacing: 0px;
        @media (min-width: 768px) {
            font-size: 56px;
            line-height: 64px;
            letter-spacing: 0px;
        }
        @media (min-width: 1440px) {
            width:306px;
        }
    }
    span{
        font-size: 15px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0px;
        color:#7D7D7D;
    }
`
const ArtistMobile = styled.img`
        width: 64px;
        height:64px;
        margin-top:24px;
        margin-left: -10px;
        @media (min-width:768px){
            display: none;
        }

`
const ArtistTablet = styled.img`
       display: none;
        @media (min-width:768px){
            display: block;
            width:128px;
            height: 128px;
            position: absolute;
            top: 237px;
            right: 46px;
        }
        @media (min-width:1440px){
            top: 494px;
            right: 240px;
        }
`
const ParagraphDiv = styled.div`
    position: relative;
    p{
        font-size: 14px;
        font-weight: 700;
        line-height: 28px;
        letter-spacing: 0px;
        text-align: left;
        color:#7D7D7D;
        margin-top:54px;
        padding-left: 10px;
        min-height: 400px;
        @media (min-width: 768px) {
            width:457px;
            margin-top: 139px;
            min-height: 270px;
        }
        @media (min-width: 1440px) {
            height: 280px;
            width: 350px;
            margin: 50px 150px 100px 0 ;
        }
    }
    a{
        color:#7D7D7D;
        font-size: 9px;
        font-weight: 700;
        line-height: 11px;
        letter-spacing:2px;
        margin-top:68px;
        padding-left: 10px;       
    }
    span{
        height: 100px;
        width: 243px;
        left: 84px;
        top: -15px;
        position: absolute;
        font-size: 100px;
        font-weight: 700;
        line-height: 100px;
        letter-spacing: 0px;
        color:#F3F3F3;
        z-index: -1;
        @media (min-width:768px) {
            font-size: 200px;
            line-height: 150px;
            left: -155px;
            top: 39px;
        }
        @media (min-width:1440px) {
            left: -2px;
            top: -70px;
            height: 150px;
            width: 476px;
        }
    }
`
const Modal = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    /* display: none; */
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    z-index: 2;
    display: flex;
    flex-direction: column;
    div{
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 3px;
        color:#ffffff;
        margin-bottom:33px;
        transform: translateX(135px);
        cursor: pointer;
        @media (min-width: 768px) {
            transform: translateX(310px);
        }
        
    }
`
const ModalMobilePicture = styled.img`
    @media (min-width: 768px) {
        display: none;
    }
`
const ModalTabletPicture = styled.img`
    display: none;
    @media (min-width: 768px) {
        display: block;
        max-height: 740px;
        max-width: 670px;
    }
    @media (min-width: 768px) {
        max-height: 512px;
        max-width: 1440px;
    }
`