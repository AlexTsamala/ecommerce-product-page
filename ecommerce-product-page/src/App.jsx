import {Header,MiddleText,Slider} from "components"
import { useState } from "react";
function App() {

  const [shoesQuantity,setShoesQuantity] = useState(0);
  const [addToCart,setAddToCart] = useState(0);
  const [sum ,setSum] = useState(1)
  
  const priceOfShoes = 125;
  const shoesQuantityHandler = () => {
    setShoesQuantity(shoesQuantity+1)
  }
  const addToCartHandler = () => {
    setAddToCart(addToCart+shoesQuantity);
    setSum(priceOfShoes * (addToCart+shoesQuantity));
    setShoesQuantity(0);
  }
  const shoesQuantityHandlerMinus = () => {
    if(shoesQuantity===0){
      setShoesQuantity(0)
    }else{
      setShoesQuantity(shoesQuantity-1)
    }
  }

  return (
    <div className=" font-KumbhSans">
      <Header setAddToCart={setAddToCart} sum={sum} addToCart={addToCart}/>
      <Slider/>
      <MiddleText addToCartHandler={addToCartHandler} shoesQuantityHandlerMinus={shoesQuantityHandlerMinus} shoesQuantityHandler={shoesQuantityHandler} shoesQuantity={shoesQuantity}/>
    </div>
  );
}

export default App;
