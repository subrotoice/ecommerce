import { notFound } from "next/navigation";
import Add from "../_components/Add";
import CustomizeProducts from "../_components/CustomizeProducts";
import ProductImages from "../_components/ProductImages";
import { wixClientServer } from "../_lib/wixClientServer";

const SinglePage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const wixClient = await wixClientServer();
  const products = await wixClient.products
    .queryProducts()
    .eq("slug", slug)
    .find();

  if (!products.items.length) return notFound();

  const product = products.items[0];
  // console.log(product.productOptions);

  return (
    <div className="flex flex-col lg:flex-row gap-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* IMAGE */}
      {/* <pre>{JSON.stringify(product, null, 2)}</pre> */}

      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages items={product.media?.items} />
      </div>
      {/* TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          {product.priceData?.price === product.priceData?.discountedPrice ? (
            <h2 className="font-medium text-2xl">
              ${product.priceData?.price}
            </h2>
          ) : (
            <>
              <h3 className="text-xl text-gray-500 line-through">
                ${product.priceData?.price}
              </h3>
              <h2 className="font-medium text-2xl">
                ${product.priceData?.discountedPrice}
              </h2>
            </>
          )}
        </div>
        <div className="h-[2px] bg-gray-100" />
        {product.variants && product.productOptions ? (
          <CustomizeProducts
            productId={product._id!}
            variants={product.variants}
            productoptions={product.productOptions}
          />
        ) : (
          <Add
            productId={product._id!}
            variantId="00000000-0000-0000-0000-000000000000"
            stockNumber={product.stock?.quantity || 0}
          />
        )}

        <div className="h-[2px] bg-gray-100" />
        {product.additionalInfoSections &&
          product.additionalInfoSections.map((additionalSection, index) => (
            <div className="text-sm" key={index}>
              <h4 className="font-medium mb-4">{additionalSection.title}</h4>
              <p>{additionalSection.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SinglePage;
