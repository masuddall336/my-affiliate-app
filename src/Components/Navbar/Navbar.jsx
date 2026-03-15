import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { FaFire } from "react-icons/fa";

const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState(false);
  const [megaMenu, setMegaMenu] = useState(false);

  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [electronicsOpen, setElectronicsOpen] = useState(false);
  const [fashionOpen, setFashionOpen] = useState(false);
  const [homeOpen, setHomeOpen] = useState(false);
  const [beautyOpen, setBeautyOpen] = useState(false);

  let timeout;

  const handleEnter = () => {
    clearTimeout(timeout);
    setMegaMenu(true);
  };

  const handleLeave = () => {
    timeout = setTimeout(() => setMegaMenu(false), 200);
  };

  return (
    <nav className="w-full shadow-md fixed top-0 z-50 bg-[#16af93] text-white">

      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between h-16">

          <NavLink
            to="/"
            className="text-2xl font-bold hover:text-gray-100 transition duration-200"
          >
            AffiMart
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">

            <div
              className="relative"
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >

              <button className="flex items-center gap-1 hover:text-gray-100 transition duration-200">
                Categories <ChevronDown size={16} />
              </button>

              {megaMenu && (
                <div className="absolute left-0 top-full mt-3 w-[850px] bg-[#16af93] shadow-xl rounded-b-2xl p-8 grid grid-cols-5 gap-6">

                  <div>
                    <h3 className="font-semibold mb-3">Electronics</h3>
                    <ul className="space-y-2">
                      <li><NavLink className="hover:underline" to="/electronics/laptops">Laptops</NavLink></li>
                      <li><NavLink className="hover:underline" to="/electronics/phones">Smartphones</NavLink></li>
                      <li><NavLink className="hover:underline" to="/electronics/headphones">Headphones</NavLink></li>
                      <li><NavLink className="hover:underline" to="/electronics/gaming">Gaming</NavLink></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Fashion</h3>
                    <ul className="space-y-2">
                      <li><NavLink className="hover:underline" to="/fashion/men">Men Clothing</NavLink></li>
                      <li><NavLink className="hover:underline" to="/fashion/women">Women Clothing</NavLink></li>
                      <li><NavLink className="hover:underline" to="/fashion/shoes">Shoes</NavLink></li>
                      <li><NavLink className="hover:underline" to="/fashion/bags">Bags</NavLink></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Home</h3>
                    <ul className="space-y-2">
                      <li><NavLink className="hover:underline" to="/home/furniture">Furniture</NavLink></li>
                      <li><NavLink className="hover:underline" to="/home/kitchen">Kitchen</NavLink></li>
                      <li><NavLink className="hover:underline" to="/home/decor">Decor</NavLink></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Beauty</h3>
                    <ul className="space-y-2">
                      <li><NavLink className="hover:underline" to="/beauty/makeup">Makeup</NavLink></li>
                      <li><NavLink className="hover:underline" to="/beauty/skincare">Skincare</NavLink></li>
                      <li><NavLink className="hover:underline" to="/beauty/haircare">Hair Care</NavLink></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Hot Deals</h3>
                    <ul className="space-y-2">
                      <li>
                        <NavLink className="flex items-center gap-1 hover:underline" to="/top-deals">
                          <FaFire className="text-orange-400"/>
                          Top Deals
                        </NavLink>
                      </li>
                      <li><NavLink className="hover:underline" to="/trending">Trending</NavLink></li>
                      <li><NavLink className="hover:underline" to="/best-sellers">Best Sellers</NavLink></li>
                      <li><NavLink className="hover:underline" to="/coupons">Coupons</NavLink></li>
                    </ul>
                  </div>

                </div>
              )}

            </div>

            <NavLink className="flex items-center gap-1 hover:text-gray-100 transition duration-200" to="/top-deals">
              <FaFire className="text-orange-400"/>
              Top Deals
            </NavLink>

            <NavLink className="hover:text-gray-100 transition duration-200" to="/trending">Trending</NavLink>
            <NavLink className="hover:text-gray-100 transition duration-200" to="/best-sellers">Best Sellers</NavLink>
            <NavLink className="hover:text-gray-100 transition duration-200" to="/coupons">Coupons</NavLink>

          </div>

          {/* Search */}
          <div className="hidden md:flex items-center bg-[#0f7462] rounded px-4 py-2 w-72 hover:bg-[#0c5e4f] transition duration-200">
            <Search size={18}/>
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none px-2 w-full text-white placeholder-gray-200"
            />
          </div>

          {/* Login / Signup */}
          <div className="hidden lg:flex items-center space-x-4">

            <NavLink
              to="/login"
              className="px-4 py-2 border rounded-lg hover:bg-white hover:text-[#16af93] transition duration-200"
            >
              Login
            </NavLink>

            <NavLink
              to="/signup"
              className="px-4 py-2 border rounded-lg hover:bg-white hover:text-[#16af93] transition duration-200"
            >
              Sign Up
            </NavLink>

          </div>

          <div className="lg:hidden ">
            <button
              onClick={() => setMobileMenu(true)}
              className="hover:text-gray-200 transition"
            >
              <Menu size={28}/>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="fixed inset-0 bg-[#16af93] z-50 overflow-y-auto">

          <div className="flex justify-between items-center p-5 border-b">
            <h2 className="text-xl font-bold">Menu</h2>
            <button onClick={() => setMobileMenu(false)}>
              <X size={28}/>
            </button>
          </div>

          <div className="p-6 space-y-6">

            <div className="flex items-center border rounded-lg px-3 py-2">
              <Search size={18}/>
              <input
                type="text"
                placeholder="Search products..."
                className="outline-none px-2 w-full"
              />
            </div>

            {/* Categories */}
            <div>

              <button
                onClick={() => setCategoriesOpen(!categoriesOpen)}
                className="flex justify-between w-full font-semibold hover:text-[#16af93]"
              >
                Categories
                <ChevronDown/>
              </button>

              {categoriesOpen && (
                <div className="mt-4 space-y-4">

                  {/* Electronics */}
                  <div>
                    <button
                      onClick={() => setElectronicsOpen(!electronicsOpen)}
                      className="flex justify-between w-full hover:text-[#16af93]"
                    >
                      Electronics
                      <ChevronDown size={18}/>
                    </button>

                    {electronicsOpen && (
                      <ul className="ml-4 mt-2 space-y-2">
                        <li><NavLink className="hover:text-[#16af93]" to="/electronics/laptops">Laptops</NavLink></li>
                        <li><NavLink className="hover:text-[#16af93]" to="/electronics/phones">Smartphones</NavLink></li>
                        <li><NavLink className="hover:text-[#16af93]" to="/electronics/headphones">Headphones</NavLink></li>
                        <li><NavLink className="hover:text-[#16af93]" to="/electronics/gaming">Gaming</NavLink></li>
                      </ul>
                    )}
                  </div>

                  {/* Fashion */}
                  <div>
                    <button
                      onClick={() => setFashionOpen(!fashionOpen)}
                      className="flex justify-between w-full hover:text-[#16af93]"
                    >
                      Fashion
                      <ChevronDown size={18}/>
                    </button>

                    {fashionOpen && (
                      <ul className="ml-4 mt-2 space-y-2">
                        <li><NavLink className="hover:text-[#16af93]" to="/fashion/men">Men Clothing</NavLink></li>
                        <li><NavLink className="hover:text-[#16af93]" to="/fashion/women">Women Clothing</NavLink></li>
                        <li><NavLink className="hover:text-[#16af93]" to="/fashion/shoes">Shoes</NavLink></li>
                        <li><NavLink className="hover:text-[#16af93]" to="/fashion/bags">Bags</NavLink></li>
                      </ul>
                    )}
                  </div>

                  {/* Home */}
                  <div>
                    <button
                      onClick={() => setHomeOpen(!homeOpen)}
                      className="flex justify-between w-full hover:text-[#16af93]"
                    >
                      Home
                      <ChevronDown size={18}/>
                    </button>

                    {homeOpen && (
                      <ul className="ml-4 mt-2 space-y-2">
                        <li><NavLink className="hover:text-[#16af93]" to="/home/furniture">Furniture</NavLink></li>
                        <li><NavLink className="hover:text-[#16af93]" to="/home/kitchen">Kitchen</NavLink></li>
                        <li><NavLink className="hover:text-[#16af93]" to="/home/decor">Decor</NavLink></li>
                      </ul>
                    )}
                  </div>

                  {/* Beauty */}
                  <div>
                    <button
                      onClick={() => setBeautyOpen(!beautyOpen)}
                      className="flex justify-between w-full hover:text-[#16af93]"
                    >
                      Beauty
                      <ChevronDown size={18}/>
                    </button>

                    {beautyOpen && (
                      <ul className="ml-4 mt-2 space-y-2">
                        <li><NavLink className="hover:text-[#16af93]" to="/beauty/makeup">Makeup</NavLink></li>
                        <li><NavLink className="hover:text-[#16af93]" to="/beauty/skincare">Skincare</NavLink></li>
                        <li><NavLink className="hover:text-[#16af93]" to="/beauty/haircare">Hair Care</NavLink></li>
                      </ul>
                    )}
                  </div>

                </div>
              )}

            </div>

            {/* Explore */}
            <div>
              <ul className="space-y-3">
                <li>
                  <NavLink className="flex items-center gap-1 hover:text-[#16af93]" to="/top-deals">
                    <FaFire className="text-orange-500"/>
                    Top Deals
                  </NavLink>
                </li>
                <li><NavLink className="hover:text-[#16af93]" to="/trending">Trending</NavLink></li>
                <li><NavLink className="hover:text-[#16af93]" to="/best-sellers">Best Sellers</NavLink></li>
                <li><NavLink className="hover:text-[#16af93]" to="/coupons">Coupons</NavLink></li>
              </ul>
            </div>

            {/* Mobile Login */}
            <div className="flex gap-4 pt-4 border-t">

              <NavLink
                to="/login"
                className="flex-1 text-center border py-2 rounded-lg hover:bg-[#16af93] hover:text-white transition"
              >
                Login
              </NavLink>

              <NavLink
                to="/signup"
                className="flex-1 text-center border py-2 rounded-lg hover:bg-[#16af93] hover:text-white transition"
              >
                Sign Up
              </NavLink>

            </div>

          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;