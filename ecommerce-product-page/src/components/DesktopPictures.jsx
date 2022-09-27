import { FirstPicture, SecondPicture,ThirdPicture,FourthPicture } from "assets";

const DesktopPictures = () => {
    return (  
        <div className="hidden desktop:block">
            <img className=" h-100 w-100" alt="firstImg" src={FirstPicture}/>
        </div>
    );
}
 
export default DesktopPictures;