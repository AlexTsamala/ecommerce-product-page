import { galleryListActions} from 'store';
import { useAppDispatch,useAppSelector } from 'store/redux';
import styled from 'styled-components';
import logo from '../assets/logo.svg'


const Header = () => {
    const dispatch = useAppDispatch();
    const status = useAppSelector(state => state.galleriaList.show)
    const SlideShowButtonHandler = () => {
        dispatch(galleryListActions.changeSHowStatus())
    }
    return ( 
    <Container>
        <div>
            <Logo alt='picture' src={logo}/>
            <SlideSHowButton type='button' onClick={SlideShowButtonHandler}>{status?'STOP SLIDESHOW':'START SLIDESHOW'}</SlideSHowButton>
        </div>
        <hr></hr>
    </Container>
     );
}
 
export default Header;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin:29px 0;
    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin:0 24px;
        @media (min-width:768px) {
        margin:0px 40px;
    }
    }
    hr{
        color:#E5E5E5;
        width:100%;
        height:1px;
        margin-top: 24px;
    }
`;
const SlideSHowButton = styled.button`
    color:#7D7D7D;
    font-size: 9px;
    font-weight: 700;
    line-height: 11px;
    letter-spacing: 2px;
    background-color: white;
    border: none;
    cursor: pointer;
`;
const Logo = styled.img`
    width:113px;
    height:32px;
`