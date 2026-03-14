
import React, { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [megaMenu, setMegaMenu] = useState(false);
  const [mobileCategories, setMobileCategories] = useState(false);

  let timeout;

  const handleEnter = () => {
    clearTimeout(timeout);
    setMegaMenu(true);
  };

  const handleLeave = () => {
    timeout = setTimeout(() => setMegaMenu(false), 200);
  };

  return (
    <nav className="w-full bg-red shadow-md fixed top-0 z-50">

      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <h1 className="text-2xl font-bold text-orange-500">
            AffiMart
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">

            {/* Categories */}
            <div
              className="relative"
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              <button className="flex items-center gap-1 font-medium text-[#fff] hover:text-orange-500">
                Categories <ChevronDown size={16} />
              </button>

              {megaMenu && (
                <div className="absolute left-0 mt-3 w-[850px]  shadow-2xl rounded-xl p-8 grid grid-cols-5 gap-6">

                  <div>
                    <h3 className="font-semibold mb-3">Electronics</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="hover:text-orange-500">Laptops</li>
                      <li className="hover:text-orange-500">Phones</li>
                      <li className="hover:text-orange-500">Headphones</li>
                      <li className="hover:text-orange-500">Gaming</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Fashion</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="hover:text-orange-500">Men Clothing</li>
                      <li className="hover:text-orange-500">Women Clothing</li>
                      <li className="hover:text-orange-500">Shoes</li>
                      <li className="hover:text-orange-500">Bags</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Home</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="hover:text-orange-500">Furniture</li>
                      <li className="hover:text-orange-500">Cookware</li>
                      <li className="hover:text-orange-500">Decor</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Beauty</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="hover:text-orange-500">Makeup</li>
                      <li className="hover:text-orange-500">Skincare</li>
                      <li className="hover:text-orange-500">Hair Care</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold mb-3">Hot Deals</h3>
                    <ul className="space-y-2 text-orange-500 font-medium">
                      <li>🔥 Top Deals</li>
                      <li>📈 Trending Products</li>
                      <li>⭐ Best Sellers</li>
                      <li>🎟 Coupons</li>
                    </ul>
                  </div>

                </div>
              )}
            </div>

            <a className="hover:text-orange-500">Top Deals</a>
            <a className="hover:text-orange-500">Trending</a>
            <a className="hover:text-orange-500">Best Sellers</a>
            <a className="hover:text-orange-500">Coupons</a>

          </div>

          {/* Search */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-80">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none px-2 w-full"
            />
          </div>

          {/* Login Register */}
          <div className="hidden md:flex space-x-3">
            <button className="px-4 py-2 hover:text-orange-500">
              Login
            </button>

            <button className="px-5 py-2 bg-orange-500 text-white rounded-xl">
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setMobileMenu(true)}>
              <Menu size={28} />
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE FULL SCREEN MENU */}
      {mobileMenu && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">

          {/* Header */}
          <div className="flex justify-between items-center p-5 border-b">
            <h2 className="text-xl font-bold text-orange-500">
              Menu
            </h2>

            <button onClick={() => setMobileMenu(false)}>
              <X size={28} />
            </button>
          </div>

          <div className="p-6 space-y-6">

            {/* Search */}
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Search size={18} />
              <input
                type="text"
                placeholder="Search products..."
                className="outline-none px-2 w-full"
              />
            </div>

            {/* Categories Accordion */}
            <div>
              <button
                onClick={() => setMobileCategories(!mobileCategories)}
                className="flex justify-between w-full font-semibold text-lg"
              >
                Categories
                <ChevronDown />
              </button>

              {mobileCategories && (
                <ul className="mt-3 space-y-2 text-gray-600">
                  <li>Electronics</li>
                  <li>Fashion</li>
                  <li>Home & Kitchen</li>
                  <li>Beauty</li>
                </ul>
              )}
            </div>

            {/* Explore */}
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Explore</h3>

              <ul className="space-y-2 text-gray-700">
                <li>🔥 Top Deals</li>
                <li>📈 Trending Products</li>
                <li>⭐ Best Sellers</li>
                <li>🎟 Coupons</li>
              </ul>
            </div>

            {/* Auth Buttons */}
            <div className="pt-4 space-y-3">
              <button className="w-full border py-3 rounded-lg">
                Login
              </button>

              <button className="w-full bg-orange-500 text-white py-3 rounded-lg">
                Register
              </button>
            </div>

          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;