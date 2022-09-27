import { FirstPicture, SecondPicture,ThirdPicture,FourthPicture } from "assets";
import { useState } from "react";

const Slider = () => {
    const arrayOfSneakers = [FirstPicture,SecondPicture,ThirdPicture,FourthPicture];
    const [numberOfSneakers,setNumberOfSneakers] = useState(0);

    const numberOfSneakersHandlerRight = () => {
        setNumberOfSneakers(numberOfSneakers+1)
        if(arrayOfSneakers.length-1 === numberOfSneakers){
            setNumberOfSneakers(0)
        }
    }
    const numberOfSneakersHandlerLeft = () => {
        setNumberOfSneakers(numberOfSneakers-1)
        if(numberOfSneakers === 0){
            setNumberOfSneakers(arrayOfSneakers.length-1)
        }
    }

    return ( 
        <div className="h-75 bg-no-repeat bg-100% mt-7 flex items-center justify-between desktop:hidden" style={{backgroundImage: `url(${arrayOfSneakers[numberOfSneakers]})`}}>
            <button type="button" className="h-10 w-10 bg-white rounded-full flex items-center justify-center ml-4 pr-1">
                <svg onClick={numberOfSneakersHandlerLeft} width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/>
                </svg>
            </button>
            <button type="button" className="h-10 w-10 bg-white rounded-full flex items-center justify-center mr-4 pl-1">
                <svg onClick={numberOfSneakersHandlerRight} width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/>
                </svg>
            </button>
        </div>
     );
}
 
export default Slider;