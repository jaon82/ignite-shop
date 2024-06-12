import { globalStyles } from "@/styles/global";
import { Container, Header, ItemsCounter } from "@/styles/pages/app";
import type { AppProps } from "next/app";
import Image from "next/image";

import Order from "@/components/Order/intex";
import Link from "next/link";
import { Handbag } from "phosphor-react";
import logoImg from "../assets/logo.svg";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const handleAddToCart = () => {
    console.log("ADD_TO_CART");
  };

  return (
    <Container>
      <Header>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>
        <button onClick={handleAddToCart}>
          <Handbag size={24} />
          <ItemsCounter>3</ItemsCounter>
        </button>
      </Header>
      <Order />
      <Component {...pageProps} />
    </Container>
  );
}
