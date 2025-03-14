"use client";
import ProductList from "./_components/ProductList";
import Slider from "./_components/Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <ProductList />
      </div>
    </>
  );
}
