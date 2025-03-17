"use client";
import CategoryList from "./_components/CategoryList";
import Footer from "./_components/Footer";
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
      <div className="mt-24">
        <h1 className="text-2xl mb-8 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
          Categories
        </h1>
        <CategoryList />
      </div>
    </>
  );
}
