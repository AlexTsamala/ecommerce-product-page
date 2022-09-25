import SneakersInCart from "./SneakersInCart";

const CartContainer = () => {
    return ( 
        <div className=" bg-white absolute w-cartWidth left-cartLeft h-64" style={{left:"3%",borderRadius:"10px",boxShadow:"0px 20px 50px -20px rgb(29 32 38 / 50%)",top:"100px"}}>
            <h3 className="text-neutral-800 font-semibold text-base mt-6 ml-6">Cart</h3>
            <hr className="bg-slate-200 w-full h-0.25 mt-7"></hr>
            {/* <span className="text-gray-500 font-semibold text-base text-center mt-20 mb-20 flex justify-center">Your cart is empty.</span> */}
            <SneakersInCart/>
        </div>
     );
}
 
export default CartContainer;