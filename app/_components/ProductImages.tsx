"use client";
import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/18166547/pexels-photo-18166547/free-photo-of-back-view-of-woman-in-black-dress-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/4968386/pexels-photo-4968386.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/5241037/pexels-photo-5241037.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex gap-4 mt-8">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="w-1/4 h-32 relative"
            onClick={() => setIndex(index)}
          >
            <Image
              src={image.url}
              alt=""
              fill
              sizes="20vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
