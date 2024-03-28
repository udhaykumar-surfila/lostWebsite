import React from "react";

const Terms = () => {
  return (
    <div className="w-[100vw] min-h-screen flex flex-col justify-center items-center my-16">
      <h2 className="text-xl font-playfair font-semibold py-4 text-[#116b89]">
        Terms and Conditions
      </h2>
      <p className="w-2/3 text-[#4c4e4e]">
        <span className="font-semibold">
          Welcome to The Lost Traverse! By using our website and booking our
          services, you agree to comply with the following terms and conditions:
        </span>
        <br></br>
        <br></br>
        <span className="font-semibold">Reservations:</span> All bookings are
        subject to availability and acceptance by The Lost Traverse. We reserve
        the right to decline or cancel bookings at our discretion. <br></br>
        <br></br>
        <span className="font-semibold">Payment:</span> Payment must be made in
        full at the time of booking. We accept various payment methods. Any
        additional charges incurred during your stay must be settled before
        check-out.<br></br>
        <br></br>
        <span className="font-semibold">Cancellation:</span> Bookings made are non refundable.
        No-shows will be charged the full amount.<br></br>
        <br></br>
        <span className="font-semibold">Guest Responsibility:</span> Guests are
        responsible for their behavior and any damage caused to the property.
        Any damage will be charged to the guest's account. <br></br>
        <br></br>
        <span className="font-semibold">Check-in/Check-out:</span> Check-in time
        is 2 PM and check-out time is 10:30 AM. Early check-in and late check-out may
        be available upon request and are subject to availability.<br></br>
        <br></br> <span className="font-semibold">Liability:</span> The Lost
        Hostel is not liable for any loss, theft, or damage to guests'
        belongings. Guests are advised to secure their valuables. <br></br>
        <br></br>
        <span className="font-semibold">Age Restrictions:</span> Guests under
        the age of 18 are not allowed at the property. <br></br>
        <br></br>
        <span className="font-semibold">Changes to Terms:</span> The Lost Traverse
        reserves the right to modify these terms and conditions at any time.
        Changes will be effective upon posting on our website.
      </p>
    </div>
  );
};

export default Terms;
