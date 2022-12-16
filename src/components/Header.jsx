import { UserImage } from "assets";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import CartContainer from "./CartContainer";

const Header = (props) => {
    const [handleMenu,setHandleMenu] = useState(false)
    const [handleCart,setHandleCart] = useState(false)
    const [menuButton,setMenuButton] = useState("")

    const menuButtonHandler = (event) => {
        setMenuButton(event.target.textContent)
    }

    const controlMenu = () => {
        setHandleMenu(!handleMenu);
        setHandleCart(false);
    }
    const controlCart = () => {
        setHandleCart(!handleCart)
    }
    
    return (
        <div className=" mr-6 ml-6 mt-5 desktop:flex desktop:justify-between desktop:flex-col desktop:gap-12 desktop:mr-40 desktop:ml-40 desktop:mt-7">
            <div className="flex justify-between">
                <div className="flex items-center gap-4 desktop:gap-14">
                        <svg onClick={controlMenu} className="cursor-pointer desktop:hidden" width="16" height="15" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fillRule="evenodd"/>
                        </svg>
                    <h1 className="text-3xl font-semibold mb-1 text-neutral-800">sneakers</h1>
                    <div className="hidden flex-row text-sm text-gray-500 font-normal desktop:flex desktop:h-6 desktop:mt-1">
                        <div className="flex items-center flex-col">
                            <span onClick={menuButtonHandler} className=" cursor-pointer">Collections</span>
                            <hr className={`bg-orange-500 h-1 w-14 translate-y-16 ${menuButton==="Collections" ?"" : "hidden"}`}></hr>
                        </div>
                        <div className="flex items-center flex-col w-16">
                            <span onClick={menuButtonHandler} className=" cursor-pointer">Men</span>
                            <hr className={`bg-orange-500 h-1 w-14 translate-y-16 ${menuButton==="Men" ?"" : "hidden"}`}></hr>
                        </div>
                        <div className="flex items-center flex-col w-16">
                            <span onClick={menuButtonHandler} className=" cursor-pointer">Women</span>
                            <hr className={`bg-orange-500 h-1 w-14 translate-y-16 ${menuButton==="Women" ?"" : "hidden"}`}></hr>
                        </div>
                        <div className="flex items-center flex-col w-16">
                            <span onClick={menuButtonHandler} className=" cursor-pointer">About</span>
                            <hr className={`bg-orange-500 h-1 w-14 translate-y-16 ${menuButton==="About" ?"" : "hidden"}`}></hr>
                        </div>
                        <div className="flex items-center flex-col w-16">
                            <span onClick={menuButtonHandler} className=" cursor-pointer">Contact</span>
                            <hr className={`bg-orange-500 h-1 w-14 translate-y-16 ${menuButton==="Contact" ?"" : "hidden"}`}></hr>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-5.5 ">
                    {props.addToCart > 0 ? <div className="flex justify-center items-center text-white  bg-orange-500 rounded-full z-10" style={{transform:"translate(50px, -10px)", height:"13px", width:"19px",fontSize:"10px"}}>{props.addToCart}</div> : ""}
                    <div className="desktop:relative">
                        { handleCart && <CartContainer setAddToCart={props.setAddToCart} sum={props.sum} addToCart={props.addToCart}/>}
                        <svg onClick={controlCart} className="cursor-pointer" width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fillRule="nonzero"/>
                        </svg>
                    </div>
                    <div className="rounded-full flex justify-center items-center w-7 h-7 hover:bg-orange-500 desktop:h-14 desktop:w-14">
                        <img className="h-6 w-6 cursor-pointer desktop:h-12 desktop:w-12 desktop:max-w-none" alt="user-img" src={UserImage}/>
                    </div>
                </div>
            </div>
            <hr className="hidden desktop:w-full desktop:block"></hr>
            { handleMenu && <MobileMenu controlMenu={controlMenu}/>}
        </div>
      );
}
 
export default Header;