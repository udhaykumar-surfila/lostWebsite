import React from "react";
import beachImage from "../../img/yoga.webp";
import yoga1 from "../../img/yoga1.svg";
import yoga2 from "../../img/yoga2.svg";
import yoga3 from "../../img/yoga3.svg";
import yoga4 from "../../img/yoga4.svg";
import yoga5 from "../../img/yoga5.svg";
import yoga6 from "../../img/yoga6.svg";
import success from "../../img/success.png";
import scribble from "../../img/scribble.png";


import img1 from "../../img/yogaimg1.JPG";
import img2 from "../../img/yogaimg2.JPG";
import img3 from "../../img/yogaimg3.JPG";
import img4 from "../../img/yogaimg4.JPG";

import vertical1 from "../../img/launchpad-vertical-1.jpeg"
import vertical2 from "../../img/launchpad-vertical-2.jpeg"
import vertical3 from "../../img/launchpad-vertical-3.jpeg"

import investment from "../../img/Investment.svg";
import networking from "../../img/networking.svg";
import experiential from "../../img/experience.svg";
import logo from "../../img/logo.png";

import arrow from "../../img/left arrow.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";

const LaunchPad = () => {
    return (
        <div className="m-0 p-0">
            <div className="launchPadHero w-[95vw] h-[80vh] mt-[14vh] mx-auto relative rounded-md text-center">
                <img src={scribble} className="w-1/3" alt="background"></img>
                <div className="absolute top-32 sm:top-[100px] sm:left-44 ">
                    <h1 className="text-3xl sm:text-5xl font-playfair font-semibold py-4 text-[#116b89]">
                        Lost LaunchPad 2.0
                    </h1>

                    <p className="text-xl font-medium text-[#ffffff]">
                        Travel | Wellness | Adventure
                    </p>
                </div>
                <p className="text-2xl absolute sm:right-10 sm:top-10 font-playfair text-[#ffffff]">
                    "Igniting Entrepreneurial Dreams"
                </p>
            </div>
            <div
                className="w-[100vw] flex flex-col sm:flex-row sm:-mt-20"
                id="our-story"
            >
                <div className=" w-[100vw] sm:w-[50vw] md:min-h-[100vh] flex justify-center items-center">
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper w-1/2 h-60 sm:h-2/3 mt-10 relative"
                    >
                        <SwiperSlide className="w-full h-full shadow-none">
                            <img
                                src={vertical1}
                                alt="about"
                                className="w-full h-full shadow-none rounded-lg"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src={vertical2}
                                alt="about"
                                className="w-full h-full shadow-none rounded-lg"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src={vertical3}
                                alt="about"
                                className="w-full h-full shadow-none rounded-lg"
                            />
                        </SwiperSlide>
                        {/* <SwiperSlide>
                            <img
                                src={img4}
                                alt="about"
                                className="w-full h-full shadow-none"
                            />
                        </SwiperSlide> */}
                        <img src={arrow} alt="arrow" className="absolute top-40 sm:top-96 -left-10 z-[99] h-28 w-28" />
                    </Swiper>
                </div>
                <div className=" w-[100vw] sm:w-[50vw] md:min-h-screen flex flex-col justify-center items-start mx-auto sm:pr-32 px-10">
                    <h1 className="text-3xl font-playfair font-semibold py-4 text-[#116b89]">
                        Welcome to Launchpad 2.0
                    </h1>
                    <p className="text-[#4c4e4e]">
                        Join us from <b>May 1st to May 7th, 2024</b>, for an unparalleled opportunity to bring your entrepreneurial dreams to life. Lost Launchpad is back, bigger and better, inviting ambitious minds to dive into the realms of travel, wellness, and adventure.
                    </p>
                </div>
            </div>
            <section className="flex flex-wrap justify-center items-center pb-8 space-y-6 lg:space-x-12">
                <div className="w-full sm:w-1/2 lg:w-1/4 text-center">
                    <img
                        src={experiential}
                        alt="Experiential Learning"
                        className="rounded-full w-40 h-40 mx-auto hover:opacity-80 transition-opacity duration-300 ease-in-out"
                    />
                    <p className="mt-2 font-medium ">Experiential Learning</p>
                    <p className="text-gray-500">Participate in workshops and sessions designed to refine your business acumen.</p>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 text-center">
                    <img
                        src={networking}
                        alt="Networking Opportunities"
                        className="rounded-full w-40 h-40 object-cover mx-auto hover:opacity-80 transition-opacity duration-300 ease-in-out"
                    />
                    <p className="mt-2 font-medium">Networking Opportunities</p>
                    <p className="text-gray-500">
                        Connect with like-minded individuals and industry leaders.
                    </p>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 text-center">
                    <img
                        src={investment}
                        alt="Investment Potential"
                        className="rounded-full w-40 h-40 object-cover mx-auto hover:opacity-80 transition-opacity duration-300 ease-in-out"
                    />
                    <p className="mt-2 font-medium">Investment Potential</p>
                    <p className="text-gray-500">Pitch your ideas for a chance to secure investment from us.</p>
                </div>

            </section>
            <section className="flex flex-wrap justify-center items-center pt-8 space-y-4 lg:space-y-0 px-5 sm:px-28">
                <h2 className="text-3xl font-playfair font-semibold py-4 text-[#116b89]">Success Stories</h2>
                <br />
                <p className="text-[#4c4e4e]">Learn from those who've transformed ideas into successful ventures, including our very own success story of opening three backpacker hostels in Sri Lanka within six months.</p>
            </section>
            <section className="flex flex-wrap justify-center items-center lg:space-y-0 px-5 pb-8 sm:px-28">
                {/* coursel of success stories with rounded border image and text below image */}
                <section className="flex flex-wrap justify-center items-center p-8 space-y-4 lg:space-y-0">
                    <div className="w-full sm:w-1/2 lg:w-1/3 justify-center">
                        <div className=" mx-auto flex flex-col">
                            <img src={success} alt="yoga1" className="rounded-full h-2/3 w-2/3 mx-auto" />
                            <p className="text-[#116b89] text-center p-2">Lost Hostels 1 Lost Hostels 1 Lost Hostels 1 Lost Hostels 1Lost Hostels 1 Lost Hostels 1 Lost Hostels 1 Lost Lost Hostels 1 Lost Hostels 1 Lost Hostels 1</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 justify-center">
                        <div className=" mx-auto flex flex-col">
                            <img src={success} alt="yoga1" className="rounded-full h-2/3 w-2/3 mx-auto" />
                            <p className="text-[#116b89] text-center p-2">Lost Hostels 2 Lost Hostels 2 Lost Hostels 2 Lost Hostels 2 Lost Hostels 2 Lost Hostels 2 Lost Hostels 2 Lost Hostels 2 Lost Hostels 2 Lost Hostels 2</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 justify-center">
                        <div className=" mx-auto flex flex-col">
                            <img src={success} alt="yoga1" className="rounded-full h-2/3 w-2/3 mx-auto" />
                            <p className="text-[#116b89] text-center p-2">Lost Hostels 3 Lost Hostels 3 Lost Hostels 3 Lost Hostels 3 Lost Hostels 3 Lost Hostels 3 Lost Hostels 3 Lost Hostels 3 Lost Hostels 3 Lost Hostels 3</p>
                        </div>
                    </div>
                </section>
            </section>
            <section className="flex flex-wrap justify-center items-center p-8 space-y-4 lg:space-y-0 px-5 sm:px-28 bg-[#116b89]">
                <p className="text-[#ffffff] text-center">We're looking for 20 passionate individuals ready to embark on this journey. If you have an innovative idea in travel, wellness, or adventure, we want to hear from you. Apply through the link in our bio and let's make dreams a reality together.
                </p>
                <br /><br /><br />
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScG0FtpY-7kKgGCGVyoVtEjc-QFwQ4kFucEU3AZkF-2KFavLw/viewform
 "className="hover:bg-[#00ADA0] hover:text-[#C7F8FF] px-4 py-2 rounded-lg bg-[#ffffff] ">Apply Now</a>
            </section>
            <section className="flex flex-wrap justify-center items-center pt-8 space-y-4 lg:space-y-0 px-5 sm:px-28">
                <h2 className="text-3xl font-playfair font-semibold  text-[#116b89]">Sponsors</h2>
                <br />
            </section>
            <section className="flex flex-wrap justify-center items-center lg:space-y-0 px-5 pb-8 sm:px-28">
                {/* coursel of success stories with rounded border image and text below image */}
                <section className="flex flex-wrap justify-center items-center p-8 space-y-4 lg:space-y-0">
                    <div className="w-full sm:w-1/2 lg:w-1/3 justify-center">
                        <div className=" mx-auto flex flex-col">
                            <img src={logo} alt="yoga1" className="rounded-full h-2/3 w-2/3 mx-auto" />
                            <p className="text-[#116b89] text-center p-2">Lost Traverse</p>
                        </div>
                    </div>
                    {/* <div className="w-full sm:w-1/2 lg:w-1/3 justify-center">
                        <div className=" mx-auto flex flex-col">
                            <img src={success} alt="yoga1" className="rounded-full h-2/3 w-2/3 mx-auto" />
                            <p className="text-[#116b89] text-center p-2">Lost Hostels 2 Lost Hostels 2 Lost Hostels 2 Lost Hostels 2 Lost Hostels 2 Lost Hostels 2 Lost Hostels 2 Lost Hostels 2 Lost Hostels 2 Lost Hostels 2</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 justify-center">
                        <div className=" mx-auto flex flex-col">
                            <img src={success} alt="yoga1" className="rounded-full h-2/3 w-2/3 mx-auto" />
                            <p className="text-[#116b89] text-center p-2">Lost Hostels 3 Lost Hostels 3 Lost Hostels 3 Lost Hostels 3 Lost Hostels 3 Lost Hostels 3 Lost Hostels 3 Lost Hostels 3 Lost Hostels 3 Lost Hostels 3</p>
                        </div>
                    </div> */}
                </section>
            </section>
            <section className="flex flex-wrap justify-center items-center p-8 space-y-4 lg:space-y-0 px-5 sm:px-28">
                <div className="w-full lg:w-1/2 mx-auto">
                    <div className="bg-gray-300 rounded-lg overflow-hidden hover:shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15774.113160275709!2d76.7036409!3d8.7362608!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05ef1ea530b0cf%3A0xf14152a688dabb88!2sThe%20Lost%20Hostels%2C%20Varkala%20-%20Helipad!5e0!3m2!1sen!2sin!4v1712403783331!5m2!1sen!2sin"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            title="maps"
                            className="w-full h-[50vh]"
                        ></iframe>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 text-left flex flex-col justify-center items-start pl-10">
                    <p className="text-2xl font-playfair font-semibold text-[#116b89]">
                        Location:
                    </p>
                    <p>Lost Hostel Roof Top, Helipad Cliff, Varkala Beach, Kerala.</p>
                    <p className="text-2xl font-playfair font-semibold text-[#116b89] mt-5">
                        Contact Details:
                    </p>
                    <p>+91 7012416343</p>
                    <p>contact@losttraverse.com</p>
                </div>
            </section>
        </div>
    );
};

export default LaunchPad;
