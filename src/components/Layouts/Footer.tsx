import Image from "next/image";
import Link from "next/link";
import { Icons } from "../Icons/icons";
import MaxWidthWrapper from "./wrapper/MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className="bg-white border-t-2 border-gray-100">
      <MaxWidthWrapper>
        <div className="p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center">
                <Icons.logo width={32} height={32} className="h-12 w-12" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap">
                  BW FOOD INDONESIA
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Follow Us
                </h2>
                <div className="text-gray-500 font-medium flex flex-col gap-4">
                  <div>
                    <Link
                      href="https://flowbite.com/"
                      className="hover:underline"
                    >
                      About Us
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Site Map
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Career
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Follow Us
                </h2>
                <div className="text-gray-500 font-medium flex flex-col gap-4">
                  <div>
                    <Link
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      TikTok
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="https://flowbite.com/"
                      className="hover:underline"
                    >
                      Instagram
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Facebook
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Legal
                </h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center">
              © 2023{" "}
              <Link href="https://flowbite.com/" className="hover:underline">
                BW FOOD INDONESIA
              </Link>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0 gap-6">
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <Icons.Tiktok className="w-4 h-4 hover:fill-gray-900" />
                <span className="sr-only">Tiktok page</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <Icons.Instagram className="w-4 h-4 hover:fill-gray-900" />
                <span className="sr-only">Instagram page</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <Icons.Facebook className="w-4 h-4 hover:fill-gray-900" />
                <span className="sr-only">Facebook page</span>
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
