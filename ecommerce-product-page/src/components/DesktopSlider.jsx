import { FirstPicture, SecondPicture,ThirdPicture,FourthPicture } from "assets";
import { useState,useRef} from "react";

const DesktopSlider = (props) => {
    const [desktopPicture,setDesktopPicture] = useState(FirstPicture);
    const [numberOfSneakers,setNumberOfSneakers] = useState(0);
    const clickedPlace = useRef();
    const picturesArray = [FirstPicture, SecondPicture,ThirdPicture,FourthPicture];
    
    const numberOfSneakersHandlerRight = () => {
        setNumberOfSneakers(numberOfSneakers+1)
        setDesktopPicture(picturesArray[numberOfSneakers+1])
        if(picturesArray.length-1 === numberOfSneakers){
            setNumberOfSneakers(0)
            setDesktopPicture(picturesArray[0])
        }
    }
    const numberOfSneakersHandlerLeft = () => {
        setNumberOfSneakers(numberOfSneakers-1);
        setDesktopPicture(picturesArray[numberOfSneakers-1]);
        if(numberOfSneakers === 0){
            setNumberOfSneakers(picturesArray.length-1)
            setDesktopPicture(picturesArray[picturesArray.length-1])
        }
    }
    const desktopPictureHandler = (picture,index) => {
        setDesktopPicture(picture);
        setNumberOfSneakers(index);
    }
    const clickedPlaceHandler = (event) => {
        if(event.target===clickedPlace.current){
            props.setOpenDesktopSlider(false)
        }
    }
    
    return ( 
        <div ref={clickedPlace} onKeyDown={props.escape} onClick={clickedPlaceHandler} className=" bg-0.5 top-0 left-0 fixed flex items-center flex-col justify-center h-screen w-screen">
            <button onClick={numberOfSneakersHandlerLeft} type="button" className="h-10 w-10 bg-white rounded-full flex items-center justify-center" style={{transform:"translate(-220px, 315px)"}}>
                <svg  width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" className="hover:stroke-orange-500" fillRule="evenodd"/>
                </svg>
            </button>
            <button onClick={numberOfSneakersHandlerRight} type="button" className="h-10 w-10 bg-white rounded-full flex items-center justify-center" style={{transform:"translate(218px, 270px)"}}>
                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" className="hover:stroke-orange-500" fillRule="evenodd"/>
                </svg>
            </button>
            <svg onClick={props.openDesktopSliderHandler} className="mb-6 cursor-pointer translate-x-52" width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#ffffff"  className="hover:fill-orange-500" fillRule="evenodd"/>
            </svg>
            <img className=" h-100 w-100 rounded-2xl" alt="firstImg" src={desktopPicture}/>
            <div className="flex gap-8 mt-8">
                <img onClick={() => desktopPictureHandler(FirstPicture,0)} className={`${desktopPicture===FirstPicture ? "opacity-50 border-2 border-orange-500" : ""} h-22 w-22 rounded-xl hover:opacity-70 cursor-pointer`} alt="firstImg" src={FirstPicture}/>
                <img onClick={() => desktopPictureHandler(SecondPicture,1)} className={`${desktopPicture===SecondPicture ? "opacity-50 border-2 border-orange-500" : ""} h-22 w-22 rounded-xl hover:opacity-70 cursor-pointer`} alt="firstImg" src={SecondPicture}/>
                <img onClick={() => desktopPictureHandler(ThirdPicture,2)} className={`${desktopPicture===ThirdPicture ? "opacity-50 border-2 border-orange-500" : ""} h-22 w-22 rounded-xl hover:opacity-70 cursor-pointer`} alt="firstImg" src={ThirdPicture}/>
                <img onClick={() => desktopPictureHandler(FourthPicture,3)} className={`${desktopPicture===FourthPicture ? "opacity-50 border-2 border-orange-500" : ""} h-22 w-22 rounded-xl hover:opacity-70 cursor-pointer`} alt="firstImg" src={FourthPicture}/>
            </div>
        </div>
);
}
 
export default DesktopSlider;