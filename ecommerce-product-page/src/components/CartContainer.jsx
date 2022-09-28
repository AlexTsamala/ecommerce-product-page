import SneakersInCart from "./SneakersInCart";

const CartContainer = (props) => {
    return ( 
        <div className=" bg-white left-3.5 absolute w-cartWidth h-64 desktop:w-84 desktop:-translate-x-1/2 desktop:-translate-y-9 " style={{borderRadius:"10px",boxShadow:"0px 20px 50px -20px rgb(29 32 38 / 50%)",top:"100px"}}>
            <h3 className="text-neutral-800 font-semibold text-base mt-6 ml-6">Cart</h3>
            <hr className="bg-slate-200 w-full h-0.25 mt-7"></hr>
            {props.addToCart ===0 ?
            <span className="text-gray-500 font-semibold text-base text-center mt-20 mb-20 flex justify-center">Your cart is empty.</span>
            :
             <SneakersInCart setAddToCart={props.setAddToCart} sum={props.sum} addToCart={props.addToCart}/>}
        </div>
     );
}
 
export default CartContainer;