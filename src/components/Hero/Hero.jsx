import { useState } from "react";
import { motion } from "framer-motion";

// local imports
import heroImage from "../../assets/hero-image.png";
import logo from "../../assets/logo.svg";
import cartIcon from "../../assets/cart-icon.svg";
import searchIcon from "../../assets/search-icon.svg";
import { NavLink } from "../../components";
import { heroTitle, heroSubtitle } from "../../data";

// react icons
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import useIsMedium from "../../hooks/useIsMedium";

const Hero = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const isMobile = useIsMedium();

  return (
    <div
      className="h-screen relative flex flex-col items-center"
      style={{
        background: `url(${heroImage})`,
        backgroundPosition: isMobile ? "left" : "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="relative w-full max-w-[1490px] flex
        items-center justify-between pt-10 mx-auto px-10"
      >
        <div className="flex items-center gap-3">
          <img src={logo} alt="Calmora" />
          <span className="text-white font-bold text-3xl">Calmora</span>
        </div>
        <ul className="hidden md:flex items-center gap-10 lg:gap-[68px]">
          <NavLink to="services">Services</NavLink>
          <NavLink to="products">Shop</NavLink>
          <NavLink to="reference">Reference</NavLink>
          <NavLink to="care">Care</NavLink>
        </ul>

        <img src={cartIcon} className="hidden md:block cursor-pointer" alt="" />
        <HiMenuAlt3
          size={30}
          className="block md:hidden cursor-pointer text-white"
          onClick={() => setShowMobileMenu((prev) => !prev)}
        />

        <div
          className={`block md:hidden w-full fixed ${
            !showMobileMenu ? "-top-[410px]" : "top-0"
          } left-0 bg-[#dde0e5] h-[410px] transition-all duration-[800ms] shadow-xl z-10 py-8 px-12 rounded-b-xl`}
        >
          <AiOutlineClose
            size={25}
            className="absolute top-5 right-5 cursor-pointer"
            onClick={() => setShowMobileMenu(false)}
          />

          <ul className="pt-[60px] items-center flex flex-col gap-8 max-w-[200px] mx-auto backdrop-blur-2xl">
            <NavLink to="services" mobileMenu>
              Services
            </NavLink>
            <NavLink to="products" mobileMenu>
              Shop
            </NavLink>
            <NavLink to="reference" mobileMenu>
              Reference
            </NavLink>
            <NavLink to="care" mobileMenu>
              Care
            </NavLink>
          </ul>

          <img src={cartIcon} className="mt-8 mx-auto cursor-pointer" alt="cart" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center px-10">
        <motion.h1
          initial={{
            opacity: 0,
            y: "-100%",
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 1.4 }}
          className="mt-[90px] text-center text-4xl md:text-6xl xl:text-7xl leading-tight xs:text-[64px] text-white max-w-[1050px]"
        >
          {heroTitle}
        </motion.h1>
        <motion.h5
          initial={{
            opacity: 0,
            y: "-150%",
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 1.6, delay: 0.3 }}
          className="mt-8 text-center text-xl xs:text-xl text-white max-w-[500px]"
        >
          {heroSubtitle}
        </motion.h5>
        <motion.div
          initial={{
            opacity: 0,
            y: "200%",
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 1.4 }}
          className="relative w-full xs:w-[460px] mt-11"
        >
          <div className="relative w-full xs:w-[460px] mt-3 max-w-[460px] mx-auto">
            <input
              type="text"
              placeholder="Search"
              className="rounded-full w-full pl-6 pr-[68px] py-4 bg-primary outline-none text-white
              text-base xs:text-lg placeholder-white bg-slate-500"
            />
            <img
              src={searchIcon}
              alt=""
              className="absolute top-2/4 -translate-y-2/4 right-3 h-11 w-11 cursor-pointer"
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute h-[50px] xs:h-[150px] bottom-0 w-full bg-[linear-gradient(180deg,_#ffffff00_0%,_#FFF_100%)]" />
    </div>
  );
};

export default Hero;
