import {
  ImageContainer,
  ImagesContainer,
  SuccessContainer,
} from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Stripe from "stripe";
import { useShoppingCart } from "use-shopping-cart";
import { stripe } from "../lib/stripe";

interface Product {
  name: string;
  imageUrl: string;
}

interface SuccessProps {
  costumerName: string;
  products: Product[];
}

export default function Success({ costumerName, products }: SuccessProps) {
  const { clearCart } = useShoppingCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <ImagesContainer>
          {products.map((product) => (
            <ImageContainer key={product.imageUrl}>
              <Image
                src={product.imageUrl}
                width={140}
                height={140}
                alt={product.name}
              />
            </ImageContainer>
          ))}
        </ImagesContainer>

        <h1>Compra efetuada</h1>

        <p>
          Uhuul <strong>{costumerName}</strong>, sua compra de{" "}
          <strong>{products.length}</strong> camisetas já está a caminho da sua
          casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const costumerName = session.customer_details!.name;
  const products = session.line_items?.data.map((item) => {
    const product = item.price!.product as Stripe.Product;
    return {
      name: product.name,
      imageUrl: product.images[0],
    };
  });

  return {
    props: {
      costumerName,
      products,
    },
  };
};
