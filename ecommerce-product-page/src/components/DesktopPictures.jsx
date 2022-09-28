import { FirstPicture, SecondPicture,ThirdPicture,FourthPicture } from "assets";
import { useState } from "react";
import DesktopSlider from "./DesktopSlider";

const DesktopPictures = () => {

    const [desktopPicture,setDesktopPicture] = useState(FirstPicture);
    const [openDesktopSlider,setOpenDesktopSlider] = useState(false)
    
    const desktopPictureHandler = (picture) => {
        setDesktopPicture(picture)
    }
    const openDesktopSliderHandler = () => {
        setOpenDesktopSlider(!openDesktopSlider)
    }
    const escape =  (event) => {
        if(event.keyCode === 27) {
            setOpenDesktopSlider(false)   
        }
    }
    return (  
        <div  className="hidden desktop:block desktop:-mt-12">
            <img onClick={openDesktopSliderHandler} className=" h-100 w-100 rounded-2xl cursor-pointer" alt="firstImg" src={desktopPicture}/>
            <div className="flex gap-8 mt-8">
                <img onClick={() => desktopPictureHandler(FirstPicture)} className={`${desktopPicture===FirstPicture ? "opacity-50 border-2 border-orange-500" : ""} h-22 w-22 rounded-xl hover:opacity-70 cursor-pointer`} alt="firstImg" src={FirstPicture}/>
                <img onClick={() => desktopPictureHandler(SecondPicture)} className={`${desktopPicture===SecondPicture ? "opacity-50 border-2 border-orange-500" : ""} h-22 w-22 rounded-xl hover:opacity-70 cursor-pointer`} alt="firstImg" src={SecondPicture}/>
                <img onClick={() => desktopPictureHandler(ThirdPicture)} className={`${desktopPicture===ThirdPicture ? "opacity-50 border-2 border-orange-500" : ""} h-22 w-22 rounded-xl hover:opacity-70 cursor-pointer`} alt="firstImg" src={ThirdPicture}/>
                <img onClick={() => desktopPictureHandler(FourthPicture)} className={`${desktopPicture===FourthPicture ? "opacity-50 border-2 border-orange-500" : ""} h-22 w-22 rounded-xl hover:opacity-70 cursor-pointer`} alt="firstImg" src={FourthPicture}/>
            </div>
            {openDesktopSlider && <DesktopSlider setOpenDesktopSlider={setOpenDesktopSlider} escape={escape} openDesktopSliderHandler={openDesktopSliderHandler}/>}
        </div>
    );
}
 
export default DesktopPictures;