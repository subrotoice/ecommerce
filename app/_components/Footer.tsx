import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-sm">
      {/* TOP  */}
      <div className="flex flex-col md:flex-row gap-12 xl:gap-24 justify-between">
        {/* LEFT  */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8 text-sm">
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
