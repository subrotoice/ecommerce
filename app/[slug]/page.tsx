import Add from "../_components/Add";
import CustomizeProducts from "../_components/CustomizeProducts";
import ProductImages from "../_components/ProductImages";

const SinglePage = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* IMAGE */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          suscipit quas ex voluptatem vel atque, tenetur aliquid ea iure. Nihil?
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h2 className="font-medium text-2xl">$59</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            dolorem, nisi itaque corporis laborum non facilis ipsum quod
            blanditiis esse ad voluptatem consequuntur nulla excepturi neque
            est. Ratione, enim soluta.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            dolorem, nisi itaque corporis laborum non facilis ipsum quod
            blanditiis esse ad voluptatem consequuntur nulla excepturi neque
            est. Ratione, enim soluta.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            dolorem, nisi itaque corporis laborum non facilis ipsum quod
            blanditiis esse ad voluptatem consequuntur nulla excepturi neque
            est. Ratione, enim soluta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
