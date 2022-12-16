
import AddToCartButton from "./AddToCartButton";
import DesktopPictures from "./DesktopPictures";
import ShoesQuantity from "./ShoesQuantity";

const MiddleText = (props) => {
    return ( 
        <div className="desktop:flex desktop:mt-24 desktop:justify-center desktop:gap-32">
            <DesktopPictures/>
            <div className="mx-6 mt-6 desktop:m-0">
                <div>
                    <span className="text-orange-500 text-xs font-bold tracking-widest">SNEAKER COMPANY</span>
                    <h2 className="text-3xl font-bold text-neutral-800 mt-5 desktop:text-5xl desktop:w-100 desktop:mt-7">Fall Limited Edition Sneakers</h2>
                    <p className="text-base text-gray-500 mt-4 min-w-21.5 desktop:w-100 desktop:mt-8">These low-profile sneakers are your perfect casual wear companion. 
                    Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                </div>
                <div className="flex justify-between items-center mt-7 desktop:flex-col desktop:items-start">
                    <div className=" flex text-center items-center gap-4 desktop:flex-row">
                        <span className="text-3xl text-neutral-800 font-bold">$125.00</span>
                        <span className="h-7 w-14 bg-rose-100 text-orange-500 text-base font-bold rounded-md flex justify-center items-center">50%</span>
                    </div>
                    <span className="line-through text-neutral-300 text-base font-bold">$250.00</span>
                </div>
                <div className="mt-7 desktop:flex desktop:gap-4">
                    <ShoesQuantity shoesQuantityHandlerMinus={props.shoesQuantityHandlerMinus} shoesQuantityHandler={props.shoesQuantityHandler} shoesQuantity={props.shoesQuantity}/>
                    <AddToCartButton  addToCartHandler={props.addToCartHandler}/>
                </div>
            </div>
        </div>
     );
}
 
export default MiddleText;