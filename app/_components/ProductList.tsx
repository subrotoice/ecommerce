import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/28125586/pexels-photo-28125586/free-photo-of-a-camera-on-a-wooden-table-with-a-strap.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/27240876/pexels-photo-27240876/free-photo-of-a-street-light-on-the-side-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <div className="font-semibold">$49</div>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-redLight px-4 py-2 hover:bg-redLight hover:text-white w-max cursor-pointer">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/"
        className="w-full flex flex-col gap-4  sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/28125586/pexels-photo-28125586/free-photo-of-a-camera-on-a-wooden-table-with-a-strap.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/27240876/pexels-photo-27240876/free-photo-of-a-street-light-on-the-side-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <div className="font-semibold">$49</div>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-redLight px-4 py-2 hover:bg-redLight hover:text-white w-max cursor-pointer">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/"
        className="w-full flex flex-col gap-4  sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/28125586/pexels-photo-28125586/free-photo-of-a-camera-on-a-wooden-table-with-a-strap.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/27240876/pexels-photo-27240876/free-photo-of-a-street-light-on-the-side-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <div className="font-semibold">$49</div>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-redLight px-4 py-2 hover:bg-redLight hover:text-white w-max cursor-pointer">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/"
        className="w-full flex flex-col gap-4  sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/28125586/pexels-photo-28125586/free-photo-of-a-camera-on-a-wooden-table-with-a-strap.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/27240876/pexels-photo-27240876/free-photo-of-a-street-light-on-the-side-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <div className="font-semibold">$49</div>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-redLight px-4 py-2 hover:bg-redLight hover:text-white w-max cursor-pointer">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
