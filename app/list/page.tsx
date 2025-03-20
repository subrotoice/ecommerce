import Image from "next/image";
import Filter from "../_components/Filter";
import ProductList from "../_components/ProductList";
import { wixClientServer } from "../_lib/wixClientServer";
import { Suspense } from "react";

const ListPage = async ({
  searchParams,
}: {
  searchParams: { cat: string };
}) => {
  const wixClient = await wixClientServer();
  const res = await wixClient.collections.getCollectionBySlug(
    searchParams.cat || "all-products"
  );

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
      {/* CAMPAING */}
      <div className="hidden md:flex justify-between bg-pink-50 px-4 h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% of on
            <br />
            Selected Products
          </h1>
          <button className="rounded-3xl bg-redLight text-white w-max py-3 px-5 text-sm">
            Buy Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image
            src="/woman.png"
            alt=""
            sizes="30vw"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* FILTER */}
      <Filter />

      {/* PRODUCTS */}
      <h1 className="">Shoes For You!</h1>
      <Suspense fallback="Loading...">
        <ProductList
          categoryId={
            res.collection?._id || "00000000-000000-000000-000000000001"
          }
          searchParams={searchParams}
        />
      </Suspense>
    </div>
  );
};

export default ListPage;
