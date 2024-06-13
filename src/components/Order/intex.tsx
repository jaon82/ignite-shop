import Image from "next/image";
import { X } from "phosphor-react";
import {
  BagContainer,
  CloseContainer,
  ImageContainer,
  ItemInfo,
  ItemName,
  ItemPrice,
  OrderContainer,
  OrderFooter,
  OrderItem,
  OrderQuantity,
  OrderResume,
  OrderResumeItemContainer,
  OrderTitle,
  OrderTotal,
  OrderTotalTitle,
  RemoveLink,
} from "./styles";

import axios from "axios";
import { useMemo, useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

interface OrderProps {
  show: boolean;
  toggleShowOrder: () => void;
}
export default function Order({ show, toggleShowOrder }: OrderProps) {
  const { cartDetails, cartCount, formattedTotalPrice, removeItem } =
    useShoppingCart();
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  const cartProducts = useMemo(() => {
    const products = [];
    for (const cartDetail in cartDetails) {
      products.push(cartDetails[cartDetail]);
    }
    return products;
  }, [cartDetails]);

  const handleRemoveItem = (productId: string) => {
    removeItem(productId);
  };

  async function handleBuyButton() {
    try {
      setIsCreatingCheckoutSession(true);
      const lineItems = cartProducts.map((cartProduct) => ({
        price: cartProduct.defaultPriceId,
        quantity: 1,
      }));
      const response = await axios.post("/api/checkout", {
        lineItems,
      });
      const { checkoutUrl } = response.data;
      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);
      alert("Falha ao redirecionar ao checkout!");
    }
  }

  return (
    <>
      {!!cartCount && (
        <OrderContainer show={show}>
          <BagContainer>
            <CloseContainer>
              <div />
              <X size={24} onClick={toggleShowOrder} />
            </CloseContainer>
            <OrderTitle>Sacola de compras</OrderTitle>
            {cartProducts.map((cartProduct) => (
              <OrderItem key={cartProduct.id}>
                <ImageContainer>
                  <Image
                    src={cartProduct.imageUrl!}
                    alt=""
                    width={95}
                    height={95}
                  />
                </ImageContainer>
                <ItemInfo>
                  <ItemName>{cartProduct.name}</ItemName>
                  <ItemPrice>{cartProduct.formattedValue}</ItemPrice>
                  <RemoveLink onClick={() => handleRemoveItem(cartProduct.id)}>
                    Remover
                  </RemoveLink>
                </ItemInfo>
              </OrderItem>
            ))}
          </BagContainer>
          <OrderFooter>
            <OrderResume>
              <OrderResumeItemContainer>
                <span>Quantidade</span>
                <OrderQuantity>{cartCount} itens</OrderQuantity>
              </OrderResumeItemContainer>
              <OrderResumeItemContainer>
                <OrderTotalTitle>Valor Total</OrderTotalTitle>
                <OrderTotal>{formattedTotalPrice}</OrderTotal>
              </OrderResumeItemContainer>
            </OrderResume>
            <button
              disabled={isCreatingCheckoutSession}
              onClick={handleBuyButton}
            >
              Finalizar compra
            </button>
          </OrderFooter>
        </OrderContainer>
      )}
    </>
  );
}
