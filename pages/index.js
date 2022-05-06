import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import CategoryList from "../components/CategoryList";
import commerce from "../lib/commerce";
import ProductList from "../components/ProductList";

export async function getStaticProps() {
  const merchant = await commerce.merchants.about();
  const { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list();

  return {
    props: {
      merchant,
      categories,
      products,
    },
  };
}

export default function IndexPage({ merchant, categories, products }) {
  return (
    <React.Fragment>
      <h1>{merchant.business_name}</h1>

      <h3>
        <Link href="/categories">
          <a>Categories</a>
        </Link>
      </h3>

      <CategoryList categories={categories} />

      <h3>
        <Link href="/products">
          <a>Products</a>
        </Link>
      </h3>

      <ProductList products={products} />
    </React.Fragment>
  );
}
