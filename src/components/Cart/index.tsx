import { Handbag } from "phosphor-react";
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import Order from "../Order/intex";
import { CartButton, ItemsCounter } from "./styles";

export default function Cart() {
  const { cartCount } = useShoppingCart();
  const [showOrder, setShowOrder] = useState(false);

  const handleShowOrder = () => {
    setShowOrder((state) => !state);
  };

  return (
    <>
      <CartButton onClick={handleShowOrder} active={!!cartCount}>
        <Handbag size={24} />
        {!!cartCount && <ItemsCounter>{cartCount}</ItemsCounter>}
      </CartButton>
      <Order show={showOrder} toggleShowOrder={handleShowOrder} />
    </>
  );
}
