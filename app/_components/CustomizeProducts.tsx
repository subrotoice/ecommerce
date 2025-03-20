"use client";

import { products } from "@wix/stores";
import { useEffect, useState } from "react";
import Add from "./Add";

interface SelectedOption {
  [key: string]: string;
}

const CustomizeProducts = ({
  productId,
  variants,
  productoptions,
}: {
  productId: string;
  variants: products.Variant[];
  productoptions: products.ProductOption[];
}) => {
  const [selectedItem, setSelectedItem] = useState<SelectedOption>({});

  const [selectedVariant, setSelectedVariant] = useState<products.Variant>();

  useEffect(() => {
    const variant = variants.find((v) => {
      const variantChoices = v.choices;
      if (!variantChoices) return false;

      return Object.entries(selectedItem).every(
        ([key, value]) => variantChoices[key] === value
      );
    });

    setSelectedVariant(variant);
  }, [selectedItem, variants]);

  const handelOptionSelect = (optionType: string, value: string) => {
    setSelectedItem((prev) => ({ ...prev, [optionType]: value }));
  };

  // console.log(variants);

  const isVariantInStock = (choices: SelectedOption) => {
    return variants.some((v) => {
      const variantChoices = v.choices;
      if (!variantChoices) return false;

      return (
        Object.entries(choices).every(
          ([key, value]) => variantChoices[key] === value
        ) &&
        v.stock?.inStock &&
        v.stock.quantity &&
        v.stock.quantity > 0
      );
    });
  };

  // console.log(selectedItem);
  // console.log(isVariantInStock(selectedItem));

  return (
    <div className="flex flex-col gap-6">
      {productoptions.map((option) => (
        <div className="" key={option.name}>
          <ul className="flex gap-4">
            {option.choices?.map((choice) => {
              const disabled = !isVariantInStock({
                ...selectedItem,
                [option.name!]: choice.description!,
              });

              const selected =
                selectedItem[option.name!] === choice.description;

              return option.name === "Color" ? (
                <li
                  key={choice.value}
                  onClick={() =>
                    handelOptionSelect(option.name!, choice.description!)
                  }
                  style={{
                    backgroundColor: choice.value,
                    cursor: disabled ? "not-allowed" : "pointer",
                  }}
                  className="w-8 h-8 rounded-full ring-1 ring-gray-300 relative"
                >
                  {selected && (
                    <div className="absolute w-10 h-10 rounded-full ring-2 ring-sky-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " />
                  )}

                  {disabled && (
                    <div className="absolute w-10 h-[2px] top-1/2 left-1/2 bg-red-400 transform -translate-x-1/2 -translate-y-1/2 rotate-45" />
                  )}
                </li>
              ) : (
                <li
                  key={choice.value}
                  onClick={() =>
                    handelOptionSelect(option.name!, choice.description!)
                  }
                  style={{
                    cursor: disabled ? "not-allowed" : "pointer",
                    backgroundColor: selected
                      ? "#f35c7a"
                      : disabled
                      ? "#FBCFE8"
                      : "white",
                    color: selected || disabled ? "white" : "#f35c7a",
                    boxShadow: disabled ? "none" : "",
                  }}
                  className="ring-1 ring-redLight text-white rounded-md py-1 px-4 text-sm"
                >
                  {choice.description}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <Add
        productId={productId}
        variantId={
          selectedVariant?._id || "00000000-0000-0000-0000-000000000000"
        }
        stockNumber={selectedVariant?.stock?.quantity || 0}
      />
    </div>
  );
};

export default CustomizeProducts;
