import infoList from './data.json'
import { createGlobalStyle} from 'styled-components';
import {useEffect} from 'react';
import { galleryListActions } from './store';
import { Header,Gallery, SlideShow } from './components';
import { useAppSelector,useAppDispatch } from "./store/redux";

function App() {
  const dispatch = useAppDispatch();
  const status = useAppSelector(state => state.galleriaList.show);
  useEffect(() => {
    dispatch(galleryListActions.fetchGalleriaList(infoList));
},[])
 
  return(
    <>
      <GlobalStyles/>
      <Header></Header>
      {status?<SlideShow/>:<Gallery/>}
    </>
  )
}

const GlobalStyles = createGlobalStyle<{
  color?:string;
}>`
    @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap');
    *{
        box-sizing:border-box;
        margin:0;
        padding:0;
        font-family:'Libre Baskerville', serif;
        background-color:${props => props.color};
      }
    
`

export default App;


