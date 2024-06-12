import Image from "next/image";
import { X } from "phosphor-react";
import {
  BagContainer,
  CloseContainer,
  ItemInfo,
  ItemName,
  ItemPrice,
  OrderContainer,
  OrderFooter,
  OrderItems,
  OrderQuantity,
  OrderResume,
  OrderResumeItemContainer,
  OrderTitle,
  OrderTotal,
  OrderTotalTitle,
  RemoveLink,
} from "./styles";

import camiseta from "../../assets/camiseta.png";

export default function Order() {
  return (
    <OrderContainer>
      <BagContainer>
        <CloseContainer>
          <div />
          <X size={24} />
        </CloseContainer>
        <OrderTitle>Sacola de compras</OrderTitle>
        <OrderItems>
          <Image src={camiseta} alt="" />
          <ItemInfo>
            <ItemName>Camiseta Beyond the Limits</ItemName>
            <ItemPrice>R$ 79,90</ItemPrice>
            <RemoveLink href={"/"}>Remover</RemoveLink>
          </ItemInfo>
        </OrderItems>
      </BagContainer>
      <OrderFooter>
        <OrderResume>
          <OrderResumeItemContainer>
            <span>Quantidade</span>
            <OrderQuantity>3 itens</OrderQuantity>
          </OrderResumeItemContainer>
          <OrderResumeItemContainer>
            <OrderTotalTitle>Valor Total</OrderTotalTitle>
            <OrderTotal>R$ 270,00</OrderTotal>
          </OrderResumeItemContainer>
        </OrderResume>
        <button>Finalizar compra</button>
      </OrderFooter>
    </OrderContainer>
  );
}
