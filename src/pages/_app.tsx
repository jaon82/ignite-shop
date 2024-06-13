import { globalStyles } from "@/styles/global";
import { Container, Header } from "@/styles/pages/app";
import type { AppProps } from "next/app";
import Image from "next/image";

import Cart from "@/components/Cart";
import Link from "next/link";
import { useRouter } from "next/router";
import { CartProvider } from "use-shopping-cart";
import logoImg from "../assets/logo.svg";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const {
    query: { session_id: sessionId },
  } = useRouter();

  return (
    <CartProvider
      cartMode="checkout-session"
      stripe={process.env.STRIPE_PUBLIC_KEY!}
      currency="BRL"
      shouldPersist={true}
    >
      <Container>
        <Header successPage={!!sessionId}>
          <Link href="/">
            <Image src={logoImg} alt="" />
          </Link>
          {!sessionId && <Cart />}
        </Header>
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  );
}
