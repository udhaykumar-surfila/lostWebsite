import { useEffect, useState } from "react";
import DateInput from "./Date";
import poster from "../img/videocover.webp";

const Hero = () => {
  const [formData, setFormData] = useState({
    checkOutDate: new Date(+new Date() + 96400000 * 1)
      .toISOString()
      .split("T")[0],
    checkInDate: new Date().toISOString().split("T")[0],
    hostel: "thelosthostelsgoapalolembeach",
    adult: 1,
    room: 1,
  });
  const [errors, setErrors] = useState({
    checkOutDate: null,
    checkInDate: null,
    hostel: false,
  });

  function formatDate(input) {
    var datePart = input.match(/\d+/g),
      year = datePart[0], // get only two digits
      month = datePart[1],
      day = datePart[2];

    return day + "-" + month + "-" + year;
  }

  // TOOD:
  /*
  1. Default value
  2. Validation
  3. Nights bug

  */
  const forwardUser = () => {
    console.log(formData);
    if (!formData.checkInDate) {
      setErrors({ ...errors, checkInDate: true });
      return;
    }
    if (!formData.checkOutDate) {
      setErrors({ ...errors, checkOutDate: true });
      return;
    }
    if (!formData.hostel) {
      setErrors({ hostel: true });
      return;
    }
    const checkInDate = new Date(formData.checkInDate);
    const checkoutDate = new Date(formData.checkOutDate);
    const daysDifference = Math.round(
      (checkoutDate - checkInDate) / (24 * 60 * 60 * 1000)
    );

    console.log(daysDifference);
    if (daysDifference <= 0) {
      setErrors({ ...errors, checkOutDate: true });
      return;
    }

    setErrors({
      hostel: false,
      checkInDate: false,
      checkoutDate: false,
    });

    if (formData.hostel === "thelosthostelsgoapalolembeach") {
      window.open(
        `https://bookingengine.stayflexi.com/?hotel_id=27992`,
        "_blank"
      );
    }

    window.open(
      `https://live.ipms247.com/booking/mroominfo.php?HotelId=${formData.hostel
      }&eZ_chkout=${formatDate(formData.checkOutDate)}&eZ_chkin=${formatDate(
        formData.checkInDate
      )}&eZ_Nights=${daysDifference}&eZ_adult=${formData.adult}&eZ_room=${formData.room
      }&executepage=mroominfo`,
      "_blank"
    );
  };

  const onChangeChekout = (value) => {
    setFormData({ ...formData, checkOutDate: value });
  };
  const onChangeCheckin = (value) => {
    console.log("setting checkin date", value);

    setFormData({ ...formData, checkInDate: value });
  };

  useEffect(() => {
    const checkInDate = new Date(formData.checkInDate);
    const checkoutDate = new Date(formData.checkOutDate);
    const daysDifference = Math.round(
      (checkoutDate - checkInDate) / (24 * 60 * 60 * 1000)
    );

    if (daysDifference < 0) {
      setFormData({
        ...formData,
        checkOutDate: new Date(+new Date(formData.checkInDate) + 96400000 * 1)
          .toISOString()
          .split("T")[0],
      });
    }
  }, [formData.checkInDate]);
  return (
    <section
      className="hero relative min-h-screen w-[100vw] flex flex-col justify-center items-start text-white"
      id="home"
    >
      <video
        playsInline
        autoPlay
        muted
        loop
        type="video/mp4"
        src="/lostvideo.mp4"
        className="absolute top-0 right-0 left-0 w-full h-full object-cover hidden md:block"
        poster={poster}
      >
        Your browser does not support the video tag.
      </video>

      {/*     
      <img
        src={poster}
        alt="Cover"
        className="w-full h-full object-cover md:hidden"
      /> */}

      <div className="hero-content relative mx-auto text-left md:w-7/12">
        {/* <h1 className=" text-3xl sm:text-5xl font-playfair text-center px-10 md:ml-0 mt-20 sm:mt-28 leading-snug">
          S
          <span className="lowercase">
            ome BEAUTIFUL PATHS CAN ONLY BE DISCOVERED WHEN YOU ARE LOST...
          </span>
        </h1> */}

        <div className="booking flex flex-col sm:flex-row rounded-lg px-5 gap-0 sm:gap-5 lg:gap-10 py-2 my-16 mt-32 sm:mt-96  justify-around items-center mx-auto">
          <div className="flex flex-col w-full sm:w-fit cursor-pointer">
            <label for="locations" className="text-base uppercase font-medium">
              Location:
            </label>
            <select
              name="locations"
              className="bg-transparent  border-b-2 border-white py-2 hover:outline-none text-xl"
              onChange={(e) =>
                setFormData({ ...formData, hostel: e.target.value })
              }
              value={formData.hostel}
              defaultValue="thelosthostelsgoapalolembeach"
            >
              <option
                value="thelosthostelsgoapalolembeach"
                className="text-black"
              >
                Palolem, South Goa
              </option>
              <option
                value="thelosthostelvarkalahelipad"
                className="text-black"
              >
                Varkala, Kerela
              </option>
              {/* <option
                value="thelosthostelsbirbillinglandingsite"
                className="text-black"
              >
                Arugam bay, Sri lanka
              </option> */}
              <option value="185812" className="text-black">
                Weligama, Sri Lanka
              </option>
              <option
                value="thelosthostelshiriketiyabeachsrilanka"
                className="text-black"
              >
                Hiriketiya, Sri Lanka
              </option>
              <option
                value="tlhmanali"
                className="text-black"
              >
                Manali, Himachal Pradesh
              </option>
            </select>
            {errors.hostel && (
              <p className="text-xs pt-1 text-red-600">
                Please select a location
              </p>
            )}
            {!errors.hostel && <p className="mb-8"></p>}
          </div>
          <div className="flex flex-col hover:outline-none items-start cursor-pointer relative w-full">
            <label
              for="Checkin"
              className="flex items-center text-base uppercase font-medium"
            >
              Checkin date:
              {/* <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[38px] left-28"
              >
                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z"></path>
                <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z"></path>
              </svg> */}
            </label>

            <DateInput
              onChange={onChangeCheckin}
              min={new Date().toISOString().split("T")[0]}
              defaultValue={new Date().toISOString().split("T")[0]}
              value={formData.checkInDate}
            />
            {errors.checkInDate && (
              <p className="text pt-1 text-red-600">Please select a date</p>
            )}
            {!errors.checkInDate && <p className="mb-8"></p>}
          </div>
          <div className="flex flex-col items-start cursor-pointer relative w-full">
            <label
              for="Checkout"
              className="flex items-center text-base uppercase"
            >
              Checkout date:
              {/* <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[38px] left-28"
              >
                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z"></path>
                <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z"></path>
              </svg> */}
            </label>
            <DateInput
              onChange={onChangeChekout}
              min={
                new Date(+new Date(formData.checkInDate) + 96400000 * 1)
                  .toISOString()
                  .split("T")[0]
              }
              defaultValue={
                new Date(+new Date(formData.checkInDate) + 96400000 * 1)
                  .toISOString()
                  .split("T")[0]
              }
              value={formData.checkOutDate}
            />
            {errors.checkOutDate && (
              <p className="text pt-1 text-red-600">Invalid Date</p>
            )}
            {/* {+new Date(formData.checkInDate) >
              +new Date(formData.checkOutDate) && (
              <p className="text pt-1 text-red-600">Invalid Date</p>
            )} */}
            {!errors.checkOutDate && <p className="mb-8"></p>}
          </div>
          <button
            className="border-2 border-white p-2 px-5 min-w-max rounded-md font-medium font-dmsans text-lg w-full mt-5 sm:-mt-5 hover:bg-black hover:bg-opacity-40 duration-200 ease-in"
            onClick={forwardUser}
          >
            Book Now
          </button>
        </div>
        <div>
          <ul className="flex flex-col sm:flex-row  justify-center items-start sm:items-center gap-5 text-lg uppercase mt-10 px-5 pb-5 sm:px-0 sm:pb-0">
            <li className="flex justify-center gap-2 items-center">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                <path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25"></path>
                <path d="M12.5 15.5l2 2"></path>
                <path d="M15 13l2 2"></path>
              </svg>
              Community and Culture
            </li>
            <li className="flex justify-center gap-2 items-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M384 112V84.4c0-29-24.5-52.4-54.8-52.4H182.9C152.5 32 128 55.4 128 84.4V112h152v37H128v43h152v37H128v43h152v37H128v41.8c0 29 24.5 52.2 54.9 52.2H213v77h86v-77h30.2c30.3 0 54.8-23.2 54.8-52.2V309h-56v-37h56v-43h-56v-37h56v-43h-56v-37h56z"></path>
              </svg>
              Unforgettable Events
            </li>
            <li className="flex justify-center gap-2 items-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 20.0001C20 20.5524 19.5523 21.0001 19 21.0001H5C4.44772 21.0001 4 20.5524 4 20.0001V11.0001H1L11.3273 1.61162C11.7087 1.26488 12.2913 1.26488 12.6727 1.61162L23 11.0001H20V20.0001ZM18 19.0001V9.15757L12 3.70302L6 9.15757V19.0001H18ZM12 17.0001L8.64124 13.6413C7.76256 12.7627 7.76256 11.338 8.64124 10.4594C9.51992 9.58068 10.9445 9.58068 11.8232 10.4594L12 10.6361L12.1768 10.4594C13.0555 9.58068 14.4801 9.58068 15.3588 10.4594C16.2374 11.338 16.2374 12.7627 15.3588 13.6413L12 17.0001Z"></path>
              </svg>
              Comfort and Quality
            </li>
            <li className="flex justify-center gap-2 items-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path>
              </svg>
              Local Expertise
            </li>
          </ul>
        </div>
      </div>

      {/* <div class="down-arrow"></div> */}
    </section>
  );
};

export default Hero;
