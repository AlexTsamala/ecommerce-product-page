
import AddToCart from "./AddToCart";
import ShoesQuantity from "./ShoesQuantity";

const MiddleText = () => {
    return ( 
        <div className="mx-6 mt-6">
            <div>
                <span className="text-orange-500 text-xs font-bold tracking-widest">SNEAKER COMPANY</span>
                <h2 className="text-3xl font-bold text-neutral-800 mt-5">Fall Limited Edition Sneakers</h2>
                <p className="text-base text-gray-500 mt-4 min-w-21.5">These low-profile sneakers are your perfect casual wear companion. 
                Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            </div>
            <div className="flex justify-between items-center mt-7">
                <div className=" flex text-center items-center  gap-4">
                    <span className="text-3xl text-neutral-800 font-bold">$125.00</span>
                    <span className="h-7 w-14 bg-rose-100 text-orange-500 text-base font-bold rounded-md flex justify-center items-center">50%</span>
                </div>
                <span className="line-through text-neutral-300 text-base font-bold">$250.00</span>
            </div>
            <div className="mt-7">
                <ShoesQuantity/>
                <AddToCart/>
            </div>
        </div>
     );
}
 
export default MiddleText;