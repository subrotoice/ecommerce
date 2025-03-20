import Image from "next/image";
import Link from "next/link";
import { wixClientServer } from "../_lib/wixClientServer";
import Pagination from "./Pagination";

const PRODUCT_PER_PAGE = 8;

const ProductList = async ({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}) => {
  const wixClient = await wixClientServer();
  const { name, type, min, max, page, sort } = (await searchParams) || {};

  let productQuery = wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .startsWith("name", name || "")
    .hasSome("productType", [type || "physical", "digital"])
    .gt("priceData.price", min || 0)
    .lt("priceData.price", max || 999999)
    .limit(limit || PRODUCT_PER_PAGE)
    .skip(page ? parseInt(page) * (limit || PRODUCT_PER_PAGE) : 0);
  // .find();

  if (sort) {
    const [sortType, sortBy] = sort.split(" ");

    productQuery =
      sortType === "asc"
        ? productQuery.ascending(sortBy)
        : productQuery.descending(sortBy);
  }

  const res = await productQuery.find();
  // console.log(res?.totalCount);
  // console.log(limit || PRODUCT_PER_PAGE);

  return (
    <div className="flex flex-col">
      <div className="mt-12 flex gap-x-8 gap-y-16 flex-wrap">
        {res.items.map((product) => (
          <Link
            href={"/" + product.slug}
            className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
            key={product._id}
          >
            <div className="relative w-full h-80">
              <Image
                src={product.media?.mainMedia?.image?.url || "/product.png"}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
              />
              {product.media?.items && (
                <Image
                  src={product.media?.items[1]?.image?.url || "/product.png"}
                  alt=""
                  fill
                  sizes="25vw"
                  className="absolute object-cover rounded-md"
                />
              )}
            </div>
            <div className="flex justify-between">
              <span className="font-medium">{product.name}</span>
              <div className="font-semibold">${product.priceData?.price}</div>
            </div>
            <div
              className="text-sm text-gray-500"
              dangerouslySetInnerHTML={{
                __html:
                  product.additionalInfoSections?.find(
                    (section: any) => section.title === "sortDesc"
                  )?.description || "",
              }}
            ></div>
            <button className="rounded-2xl ring-1 ring-redLight px-4 py-2 hover:bg-redLight hover:text-white w-max cursor-pointer">
              Add to Cart
            </button>
          </Link>
        ))}
      </div>
      {res.totalCount && res?.totalCount > (limit || PRODUCT_PER_PAGE) && (
        <Pagination
          currentPage={res.currentPage || 0}
          hasPrev={res.hasPrev()}
          hasNext={res.hasNext()}
        />
      )}
    </div>
  );
};

export default ProductList;
