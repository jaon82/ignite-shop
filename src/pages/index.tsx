import { stripe } from "@/lib/stripe";
import { HomeContainer, Product, ProductInfo } from "@/styles/pages/home";
import { useKeenSlider } from "keen-slider/react";
import { GetStaticProps } from "next";
import Image from "next/image";
import Stripe from "stripe";

import "keen-slider/keen-slider.min.css";
import Head from "next/head";

import { useRouter } from "next/navigation";
import { Handbag } from "phosphor-react";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[];
}
export default function Home({ products }: HomeProps) {
  const router = useRouter();
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  const handleShowProduct = (productId: string) => {
    router.push(`product/${productId}`);
  };

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <Product className="keen-slider__slide" key={product.id}>
            <Image src={product.imageUrl} width={520} height={480} alt="" />

            <footer>
              <ProductInfo>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </ProductInfo>
              <div>
                <button onClick={() => handleShowProduct(product.id)}>
                  <Handbag size={32} />
                </button>
              </div>
            </footer>
          </Product>
        ))}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount! / 100),
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  };
};
