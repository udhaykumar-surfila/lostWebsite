import GOA_IMG from '../img/goa.webp';
// import BIR from '../img/bir.webp';
import arugambay from '../img/arugambay.webp'
import Varakal from '../img/Varkala-img.webp';
import varkalaimg from '../img/varkala.webp';
import weligamaimg from '../img/weligama.webp';
import hiriketiyaimg from '../img/hiriketiya.webp';
import comingsoonimg from '../img/beach.webp';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import manalihero from '../img/manaliHero.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Locations = () => {
  return (
    <section
      className='h-[150vh] w-[100vw] flex flex-col justify-around items-center pt-14'
      id='locations'
    >
      <h1 className='text-3xl font-playfair font-semibold text-[#116b89] mt-16 sm:my-5 mb-4'>
        Newest Destinations
      </h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Navigation, Autoplay]}
        navigation={true}
        className='mySwiper locationslider'
      >
        <SwiperSlide>
          <Link to='/hostel/arugambay'>
            <div className='overflow-hidden rounded-md w-full h-full'>
              <img
                src={arugambay}
                alt='Arugam Bay'
                className='rounded-md shadow-lg hover:scale-105 overflow-hidden duration-100 ease-in'
              />
            </div>
            <div className='bg-white absolute top-[50%] w-[80%] rounded-md p-5 mx-10 text-left shadow-md'>
              <h3 className=' text-[#116b89] font-playfair font-semibold text-lg mb-1'>
                Arugam Bay, Sri lanka
              </h3>
              <p className='text-sm text-[#4c4e4e]'>
                Near Arugambay's lively surf, the hostel offers a calm escape with a garden, yoga space, indoor activities, and shared dorms.
              </p>
              <button className='font-medium font-playfair text-sm text-[#116b89] hover:border-b-2 border-[#116b89] duration-100 ease-intext-[#116b89]   decoration-[1.5px]'>
                Know More
              </button>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <HashLink to='/hostelnew/manali'>
            <div className='overflow-hidden rounded-md w-full h-full relative ribbon ribbon-top-left'>
              {/* <div className='absolute top-2 rounded left-2 w-12 h-6 bg-white z-10 text-[#116b89] text-xs font-semibold py-1 shadow-lg border border-[#116b89]'>
                NEW!
              </div> */}
              <img
                src={manalihero}
                alt='manali'
                className='rounded-md shadow-lg hover:scale-105 overflow-hidden duration-100 ease-in'
              />
            </div>
            <div className='bg-white absolute top-[50%] w-[80%] rounded-md p-5 mx-10 text-left shadow-md'>
              <h3 className=' text-[#116b89] font-playfair font-semibold text-lg mb-1'>
                Manali, Himachal Pradesh
              </h3>
              <p className='text-sm text-[#4c4e4e]'>
                Lost Hostel Manali: A Himalayan sanctuary, where every
                interaction weaves the extraordinary essence of the mountains
                into your retreat.
              </p>
              <button className='font-medium font-playfair text-sm text-[#116b89] hover:border-b-2 border-[#116b89] duration-100 ease-intext-[#116b89]   decoration-[1.5px]'>
                Know More
              </button>
            </div>
          </HashLink>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/hostel/hiriketiya'>
            <div className='overflow-hidden rounded-md w-full h-full'>
              <img
                src={hiriketiyaimg}
                alt='hiriketiyaimg'
                className='rounded-md shadow-lg hover:scale-105 overflow-hidden duration-100 ease-in'
              />
            </div>
            <div className='bg-white absolute top-[50%] w-[80%] rounded-md p-5 mx-10 text-left shadow-md'>
              <h3 className=' text-[#116b89] font-playfair font-semibold text-lg mb-1'>
                Hiriketiya, Sri Lanka
              </h3>
              <p className='text-sm text-[#4c4e4e]'>
                Located on the famous surfing beach of Sri Lanka, the hostel
                offers a laid-back homely vibe with unique facilities in a
                relaxing and peaceful atmosphere.
              </p>
              <button className='font-medium font-playfair text-sm text-[#116b89] hover:border-b-2 border-[#116b89] duration-100 ease-intext-[#116b89]   decoration-[1.5px]'>
                Know More
              </button>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
      <h1 className='text-3xl font-playfair font-semibold text-[#116b89] my-5 pt-8'>
        Explore more Destinations
      </h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className='mySwiper locationslider'
      >
        <SwiperSlide>
          <Link to='/hostel/goa'>
            <div className='overflow-hidden rounded-md w-full h-full'>
              <img
                src={GOA_IMG}
                alt='goa'
                className='rounded-md shadow-lg hover:scale-105 overflow-hidden duration-100 ease-in'
              />
            </div>
            <div className='bg-white absolute top-[50%] w-[80%] rounded-md p-5 mx-10 text-left shadow-md'>
              <h3 className=' text-[#116b89] font-playfair font-semibold text-lg mb-1'>
                Palolem, South Goa
              </h3>
              <p className='text-sm text-[#4c4e4e]'>
                In the lap of South Goa, The Lost Hostel is a budget-friendly
                accommodation offering a garden, indoor games and shared
                dormitories.
              </p>
              <button className='font-medium font-playfair text-sm text-[#116b89] hover:border-b-2 border-[#116b89] duration-100 ease-intext-[#116b89]   decoration-[1.5px]'>
                Know More
              </button>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/hostel/varkala'>
            <div className='overflow-hidden rounded-md w-full h-full'>
              <img
                src={varkalaimg}
                alt='varkala'
                className='rounded-md shadow-lg hover:scale-105 overflow-hidden duration-100 ease-in'
              />
            </div>
            <div className='bg-white absolute top-[50%] w-[80%] rounded-md p-5 mx-10 text-left shadow-md'>
              <h3 className=' text-[#116b89] font-playfair font-semibold text-lg mb-1'>
                Varkala, Kerala
              </h3>
              <p className='text-sm text-[#4c4e4e]'>
                Located along the famous cliffs and beaches of Varkala, The Lost
                Hostel offers enthralling stays complete with exciting outdoor
                and indoor activities.
              </p>
              <a
                href='https://live.ipms247.com/booking/book-rooms-thelosthostelvarkalahelipad'
                target='_blank'
                rel='noreferrer'
              >
                <button className='font-medium font-playfair text-sm text-[#116b89] hover:border-b-2 border-[#116b89] duration-100 ease-intext-[#116b89]   decoration-[1.5px]'>
                  Know More
                </button>
              </a>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <Link to='/hostel/weligama'>
            <div className='overflow-hidden rounded-md w-full h-full'>
              <img
                src={weligamaimg}
                alt='weligamaimg'
                className='rounded-md shadow-lg hover:scale-105 overflow-hidden duration-100 ease-in'
              />
            </div>
            <div className='bg-white absolute top-[50%] w-[80%] rounded-md p-5 mx-10 text-left shadow-md'>
              <h3 className=' text-[#116b89] font-playfair font-semibold text-lg mb-1'>
                Weligama, Sri Lanka
              </h3>
              <p className='text-sm text-[#4c4e4e]'>
                50m from the bustling surfers paradise of Weligama beach, the
                hostel offers peaceful accommodation with a garden, yoga area,
                indoor games and shared dorms
              </p>
              <button className='font-medium font-playfair text-sm text-[#116b89] hover:border-b-2 border-[#116b89] duration-100 ease-intext-[#116b89] hover:border-b-2 border-[#116b89] duration-100 ease-in'>
                Know More
              </button>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to='/hostelnew/varkala'>
            <div className='overflow-hidden rounded-md w-full h-full'>
              <img
                src={Varakal}
                alt='varkala'
                className='rounded-md shadow-lg hover:scale-105 overflow-hidden duration-100 ease-in'
              />
            </div>
            <div className='bg-white absolute top-[50%] w-[80%] rounded-md p-5 mx-10 text-left shadow-md'>
              <h3 className=' text-[#116b89] font-playfair font-semibold text-lg mb-1'>
                Soul, Varkala
              </h3>
              <p className='text-sm text-[#4c4e4e]'>
                Located on Varkala's Black beach, Soul is an oasis of calm and
                comfort with a wide range of and a breathtaking view of the
                ocean.
              </p>
              <button className='font-medium font-playfair text-sm text-[#116b89] hover:border-b-2 border-[#116b89] duration-100 ease-intext-[#116b89]   decoration-[1.5px]'>
                Know More
              </button>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Locations;
