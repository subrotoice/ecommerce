## Getting Started

- Always try to do Mobile design then think about bigger screen
- First fetche all date (page.tsx) then populate that data using component. If and only if there is client interaction make that component as "use client"

```bash
npx create-next-app@latest
```

## Creating pages and layouts

app/layout.tsx (Main Layout)

```jsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eDev E-Commerce Application",
  description: "A complete e-commerce application with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

## Navbar

Navbar.tsx | Tricky one. Height given h-20 parent. Then create two layout for Mobile and Bigger Screens which is different code.
Bigger screen use w-1/3, w-2/3 and w-1/2, w-1/2 <br>
In Small desktop hide menu items. <br>
Most smart menu I seen ever.

```jsx
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* MOBILE  */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">eDEV</div>
        </Link>
        <Menu />
      </div>

      {/* BIGGER SCREENS  */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" height={24} width={24} />
            <div className="text-2xl tracking-wide">eDEV</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/">Homepage</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Deals</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};
```

Menu.tsx

```jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Image
        src="/menu.png"
        alt="Menu"
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link href="/">Homepage</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Logout</Link>
          <Link href="/">Cart(1)</Link>
        </div>
      )}
    </div>
  );
};
```

SearchBar.tsx

```jsx
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const SearchBar = () => {
  const router = useRouter();
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;
    if (search) router.push(`/list?search=${search}`);
  };
  return (
    <form
      className="flex ic justify-between bg-gray-100 p-2 rounded-md flex-1"
      onSubmit={handleSearch}
    >
      <input
        name="search"
        className="outline-none flex-1"
        type="text"
        placeholder="Search"
      />
      <button className="cursor-pointer">
        <Image src="/search.png" width={16} height={16} alt="" />
      </button>
    </form>
  );
};
```

NavIcons.tsx | client becaus it has user interaction

```jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartModal from "./CartModal";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const router = useRouter();
  const isLoggedIn = false;
  const handleProfile = () => {
    if (!isLoggedIn) router.push("/login");

    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div className="relative cursor-pointer">
        <Image
          src="/cart.png"
          alt=""
          width={22}
          height={22}
          className="cursor-pointer"
          onClick={() => setIsCartOpen((pre) => !pre)}
        />
        <div className="absolute -top-4 -right-4 bg-redLight w-6 h-6 flex items-center justify-center rounded-full text-white text-sm">
          2
        </div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
};
```

CartModal.tsx

```jsx
import Image from "next/image";

const CartModal = () => {
  const cartItems = true;

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col">
      {!cartItems ? (
        <div className="">Cart is empty</div>
      ) : (
        // LIST
        <>
          <h2 className="text-xl mb-4">Shopping Cart</h2>
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            <div className="flex gap-4">
              <Image
                src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$39</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">avaliable</div>
                </div>
                {/* TITLE */}
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qut. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>

            {/* ITEM  */}
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/30970419/pexels-photo-30970419/free-photo-of-rainy-night-in-tokyo-s-vibrant-alleyway.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$39</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">avaliable</div>
                </div>
                {/* TITLE */}
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qut. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom */}
          <div className="">
            <div className="flex items-center justify-between font-semibold mt-4">
              <span>Subtotal</span>
              <span>$49</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md px-4 py-3 ring-1 ring-gray-300 cursor-pointer">
                Checkout
              </button>
              <button className="rounded-md px-4 py-3 bg-black text-white cursor-pointer">
                View Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
```

next.config.ts for allowing externeal images

```jsx
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2v5dzhdg4zhx3.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
```

# HomePage

1. Slider
2. Product List
3. Categories
4. Footer

## Slider.tsx | Height: h-[calc(100vh-80px)], because navbar height is h-20, 20/4= 5rem is 5x16=80px <br>

fill [nextjs.org/docs/app/api-reference/components/image](https://nextjs.org/docs/app/api-reference/components/image)

fill={true} // {true} | {false}<br>
A boolean that causes the image to fill the parent element, which is useful when the width and height are unknown. <br>
The parent element must assign position: "relative"<br>
By default, the img element will automatically be assigned the position: "absolute" style.<br>

```jsx
"client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/* TEXT CONTAINER  */}
            <div className="h-1/2 xl:h-full xl:w-1/2 flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                {slide.title}
              </h1>
              <Link href="/">
                <button className="rounded-md bg-black text-white px-4 py-3">
                  Shop Now
                </button>
              </Link>
            </div>
            {/* IMAGE CONTAINER  */}
            <div className="h-1/2 xl:h-full xl:w-1/2 relative">
              <Image
                src={slide.img}
                fill
                sizes="100%"
                className="object-cover"
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
      // NAVIGATION BUTTON
      <div className="absolute m-auto left-1/2 bottom-8 gap-4 flex">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex justify-center items-center ${
              current === index && "scale-150"
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
```

## Product List | flex -> w-full sm: w-[45%] lg: w-[22%]

```jsx
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link // 4 items
        href="/"
        className="w-full sm:w-[45%] lg:w-[22%] flex flex-col gap-4"
      >
```

```jsx
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
```

## Categories

```jsx
import Image from "next/image";
import Link from "next/link";

const CategoryList = () => {
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        <Link // many links will come from backend
          href="/list?cat?test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/28125586/pexels-photo-28125586/free-photo-of-a-camera-on-a-wooden-table-with-a-strap.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">
            Category Name
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
```

global.css

```css
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  scrollbar-width: none;
}
```

## Footer

- First divide into TOP(LEFT, MIDDLE, RIGHT), BOTTOM
- LEFT: w-1/2, MIDDLE: w-2/4, RIGHT: w-1/4

Flex model to divide into columns, But you can do it by grid efficiently

```jsx
  <div className="flex flex-col md:flex-row">
        {/* LEFT  */}
        <div className="w-full md:w-1/2 lg:w-1/4">
        {/* CENTER */}
        <div className="w-full lg:w-2/4 hidden lg:flex">
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4">
```

```jsx
import Image from "next/image";

const Footer = () => {
  return (
    <div className="text-sm">
      {/* TOP  */}
      <div className="flex flex-col md:flex-row gap-24 justify-between">
        {/* LEFT  */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8 text-sm pr-4">
          <h1 className="uppercase text-xl">eDev</h1>
          <p>Uttor Shampur 7021, Khoksha, Kushtia, Bangladesh</p>
          <p>subroto.iu@gmail.com</p>
          <p>+01722272790</p>
          <div className="flex gap-4 items-center">
            <Link href="/">
              <Image src="/facebook.png" alt="" width={16} height={16} />
            </Link>
            <Link href="/">
              <Image src="/instagram.png" alt="" width={16} height={16} />
            </Link>
            <Link href="/">
              <Image src="/youtube.png" alt="" width={16} height={16} />
            </Link>
            <Link href="/">
              <Image src="/pinterest.png" alt="" width={16} height={16} />
            </Link>
            <Link href="/">
              <Image src="/x.png" alt="" width={16} height={16} />
            </Link>
          </div>
        </div>
        {/* CENTER */}
        <div className="w-full lg:w-2/4 hidden lg:flex">
          <div className="w-full">
            <h1 className="uppercase mb-16 font-medium text-lg">Company</h1>
            <ul className="flex flex-col gap-6">
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/">Careers</Link>
              </li>
              <li>
                <Link href="/">Affilliates</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h1 className="uppercase mb-16 font-medium text-lg">Shop</h1>
            <ul className="flex flex-col gap-6">
              <li>
                <Link href="/">New Arrivals</Link>
              </li>
              <li>
                <Link href="/">Accessories</Link>
              </li>
              <li>
                <Link href="/">Men</Link>
              </li>
              <li>
                <Link href="/">Women</Link>
              </li>
              <li>
                <Link href="/">All Products</Link>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h1 className="uppercase mb-16 font-medium text-lg">HELP</h1>
            <ul className="flex flex-col gap-6">
              <li>
                <Link href="/">Customer Service</Link>
              </li>
              <li>
                <Link href="/">My Account</Link>
              </li>
              <li>
                <Link href="/">Find a Store</Link>
              </li>
              <li>
                <Link href="/">Legal & Privacy</Link>
              </li>
              <li>
                <Link href="/">Gift Card</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="uppercase font-medium text-lg">Subscribe</h1>
          <p>
            Be the first to get the latest nes about trends, peomotions and much
            more!
          </p>
          <div className="flex">
            <input
              className="outline-0 bg-white py-4 pl-2 w-3/4"
              placeholder="Email address"
              type="text"
            />
            <button className="uppercase w-1/4 bg-redLight text-white p-2">
              Join
            </button>
          </div>
          <p>Secure Payments</p>
          <div className="flex gap-4">
            <Image src="/discover.png" width={40} height={20} alt="" />
            <Image src="/skrill.png" width={40} height={20} alt="" />
            <Image src="/paypal.png" width={40} height={20} alt="" />
            <Image src="/mastercard.png" width={40} height={20} alt="" />
            <Image src="/visa.png" width={40} height={20} alt="" />
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col lg:flex-row text-center justify-between mt-12">
        <p>&copy; 2025 Subroto Biswas</p>
        <div className="flex justify-center gap-8">
          <div className="flex gap-4">
            <span className="text-gray-700">Language</span>
            <span className="font-semibold">United States | English</span>
          </div>
          <div className="flex gap-4">
            <span className="text-gray-700">Currency</span>
            <span className="font-semibold">$ USD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
```

# List Page

- To prevend overflow we can use flex wrap
- Title of select is first element with no value

```jsx
<select>
  <option>Sort By</option> // Title of the select
  <option value="">Newest</option>
  <option value="">Oldest</option>
</select>
```

## List Page

list/page.tsx

```jsx
import Image from "next/image";

const ListPage = () => {
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
          <Image src="/woman.png" alt="" fill className="object-contain" />
        </div>
      </div>

      {/* FILTER */}
      <Filter />

      {/* PRODUCTS */}
      <h1 className="">Shoes For You!</h1>
      <ProductList />
    </div>
  );
};

export default ListPage;
```

## Filter

```jsx
const Filter = () => {
  return (
    <div className="flex justify-between my-8">
      {/* LEFT */}
      <div className="flex flex-wrap gap-6">
        <select
          name="type"
          id=""
          className="bg-[#EBEDED] text-sm font-medium py-2 pl-2 rounded-full w-25"
        >
          <option value="">Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          className="ring-1 ring-gray-400 outline-gray-500 pl-2 rounded-full w-24"
          placeholder="min price"
        />
        <input
          type="text"
          name="max"
          className="border border-gray-300 outline-gray-400 pl-2 rounded-full w-24"
          placeholder="max price"
        />
        <select name="" id="" className="bg-gray-100 p-2 rounded-full w-20">
          <option value="">Color</option>
          <option value="">1</option>
          <option value="">2</option>
        </select>
        <select name="" id="" className="bg-gray-100 p-2 rounded-full w-28">
          <option value="">Category</option>
          <option value="">1</option>
          <option value="">2</option>
        </select>
        <select name="" id="" className="bg-gray-100 p-2 rounded-full w-28">
          <option value="">All Filters</option>
          <option value="">1</option>
          <option value="">2</option>
        </select>
      </div>
      {/* RIGHT */}
      <div className="">
        <select
          name=""
          id=""
          className="outline-gray-300 border border-gray-200 p-2 rounded-full w-35"
        >
          <option>Sort By</option>
          <option value="">Price (low to high)</option>
          <option value="">Price (high to low)</option>
          <option value="">Newest</option>
          <option value="">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
```

# Single Page Design

ProductImages.tsx | Product main images

- Idea is when click on image show that image useState(index)
- First fetche all date (page.tsx) then populate that data using component. If and only if there is client interaction make that component as "use client"

```jsx
"use client";
import Image from "next/image";

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
```

## Add Item

- Add to cart, increase and decreae quantity, Select color, size

  Add.tsx

```jsx
"use client";
import { useState } from "react";

// TEMPORARY
const stock = 4;

const Add = () => {
  const [quantity, setQuantity] = useState(1);

  const handelQuantity = (action: "dec" | "inc") => {
    if (action === "dec" && quantity > 1)
      setQuantity(quantity <= 1 ? 1 : quantity - 1);
    if (action === "inc" && quantity < stock) setQuantity(quantity + 1);
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
            Only <span className="text-orange-500">4 items</span> left! <br />
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
```

# Backend Wix | Don't worry about database, Authentication, Server Security

- [wix.com/studio/developers/headless](https://www.wix.com/studio/developers/headless)
- [Wix Doc](https://dev.wix.com/docs/go-headless)

```jsx

```
