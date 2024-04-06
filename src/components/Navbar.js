import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../img/logo.png";
import Marquee from "react-fast-marquee";
import Sparkle from "react-sparkle";

const Navbar = () => {
  const [isPhoneNavOpen, setIsPhoneNavOpen] = useState(false);
  const navItems = [
    {
      title: "Launchpad",
      link: "/launchpad",
    },

    /*  {
       title: "Events",
       link: "/#events",
     }, */

    {
      title: "Hostels",
      link: "/#locations",
    },
    /* {
      title: "Social",
      link: "/#gallery",
    }, */
    {
      title: "Our Story",
      link: "/ourstory",
    },
    {
      title: "Work with Us",
      link: "/workwithus",
    },
    {
      title: "Blog",
      link: "/blog",
    },
    {
      title: "Merch",
      link: "/merch",
    },
    {
      title: "Yoga school",
      link: "/yoga",
    }
  ];

  return (
    <>
      <Marquee className="fixed marquee">📢 Exciting News!, The Lost Hostels is now&nbsp;<span className="shimmer">Lost Traverse</span>. Same spirit, new horizon. Welcome to the journey! 🎉</Marquee >

      {isPhoneNavOpen && (
        <div class="block md:flex md:items-center md:justify-between w-full flex-1 bg-none fixed top-16 z-[99] bg-[#116b89]">
          <div class="flex md:hidden bg-transparent flex-col md:flex-row md:items-center mx-5">
            {navItems.map(({ title, link }) => {
              return (
                <HashLink
                  to={link}
                  key={title}
                  onClick={() => {
                    setIsPhoneNavOpen(false);
                  }}
                >
                  <p class="text-white md:my-2 mx-2 my-2 px-2 py-1 transition duration-ƒ0 ease-in-out hover:border-orange300 cursor-pointer border-b-2 border-transparent underline">
                    {title}
                  </p>
                </HashLink>
              );
            })}
          </div>
        </div>
      )
      }

      <div className="fixed top-8 left-0 w-[100vw] bg-transparent h-[10vh] flex justify-between items-center sm:px-28 px-5 font-medium navbar z-[99] text-white">
        <HashLink to="/#home">
          <p className="text-xl font-playfair relative flex items-center">
            <img src={logo} className="mr-2 w-16" alt="lost traverse logo"></img>
            Lost Traverse
          </p>
        </HashLink>
        <div
          className="z-10 block md:hidden"
          onClick={() => {
            setIsPhoneNavOpen(!isPhoneNavOpen);
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 z-10"
          >
            <g clip-path="url(#clip0_429_11066)">
              <path
                d="M3 6.00092H21M3 12.0009H21M3 18.0009H21"
                stroke="#fff"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_429_11066">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0 0.000915527)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <ul className="md:flex w-[60VW] justify-between text-sm hidden font-dmsans relative mt-3">
          {navItems.map((navItem, index) => (
            <HashLink to={navItem.link} key={navItem.link}>
              <li className="uppercase tracking-wider cursor-pointer">
                <p className="border-b-[3px] border-transparent hover:border-white duration-200 ease-in">
                  {navItem?.title}
                </p>
              </li>
            </HashLink>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
