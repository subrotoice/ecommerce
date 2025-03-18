"use client";
import { useEffect } from "react";
import CategoryList from "./_components/CategoryList";
import ProductList from "./_components/ProductList";
import Slider from "./_components/Slider";
import { useWixClient } from "./_hooks/useWixClient";

export default function Home() {
  const wixClient = useWixClient();

  useEffect(() => {
    const getProducts = async () => {
      const res = await wixClient.products.queryProducts().find();
      console.log(res);
    };
    getProducts();
  }, [wixClient]);

  return (
    <>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <ProductList />
      </div>
      <div className="mt-24">
        <h1 className="text-2xl mb-8 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
          Categories
        </h1>
        <CategoryList />
      </div>
    </>
  );
}
