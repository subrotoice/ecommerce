"use client";
import { useState } from "react";

const Add = ({
  productId,
  variantId,
  stockNumber,
}: {
  productId: string;
  variantId: string;
  stockNumber: number;
}) => {
  const [quantity, setQuantity] = useState(1);

  const handelQuantity = (action: "dec" | "inc") => {
    if (action === "dec" && quantity > 1)
      setQuantity(quantity <= 1 ? 1 : quantity - 1);
    if (action === "inc" && quantity < stockNumber) setQuantity(quantity + 1);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-medium">Choose a Quantity</h1>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 rounded-3xl flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-xl px-4 py-2"
              onClick={() => handelQuantity("dec")}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl px-4 py-2"
              onClick={() => handelQuantity("inc")}
            >
              +
            </button>
          </div>
          <div className="">
            Only <span className="text-orange-500">{stockNumber} items </span>
            left! <br />
            Don't miss it
          </div>
        </div>
        <button className="w-36 text-sm rounded-3xl ring-1 ring-redLight text-redLight py-2 px-4 hover:bg-redLight cursor-pointer hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-0">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Add;
