import { useAppSelector } from "../store/redux";
import styled from 'styled-components';

const Gallery = () => {
    
    const list = useAppSelector(state => state.galleriaList.items);

    return ( 
        <MainContainer>
            {list.map((item,index) =>
            <ImgContainer key={index}> 
                <img  alt={item.name} src={process.env.PUBLIC_URL+item.images.thumbnail}/>
                <PhotoName>{item.name}</PhotoName>
                <PhotoAuthor>{item.artist.name}</PhotoAuthor>
            </ImgContainer>
            )}
       </MainContainer>
     );
}
 
export default Gallery;

const ImgContainer = styled.div`
    margin:24px;
    display: flex;
    align-items: center;
    justify-content: center;
    position:relative;
    img{
        /* Width:335px; */
    }
`
const PhotoName = styled.h1`
    position:absolute;
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0px;
    color:#ffffff;
    bottom: 55px;
    left: 32px;
    width: 226px;
`
const PhotoAuthor = styled.span`
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0px;
    color:#ffffff;
    position:absolute;
    bottom: 30px;
    left: 32px;
    opacity:75.28%;
    width: 246px;
`
const MainContainer = styled.div`
@media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    max-height: 3002px;
    flex-wrap: wrap;
}
@media (min-width: 1440px) {
    max-height: 1700px;
}
    
`