import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Navbar from "../navbar/Navbar.jsx";
import Footer from "../footer/Footer.jsx";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const apiKey = import.meta.env.VITE_PUBLIC_ACCESS_KEY;
const MySwal = withReactContent(Swal);

const Support = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "AirReservar",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
      MySwal.fire({
        title: <p>Success!</p>,
        text: "Your message has been sent.",
        icon: "success",
      }).then(() => {
        return MySwal.fire(<p>Thank you for contacting us!</p>);
      });
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
      MySwal.fire({
        title: <p>Error!</p>,
        text: "Something went wrong. Please try again.",
        icon: "error",
      }).then(() => {
        return MySwal.fire(<p>We're sorry for the inconvenience.</p>);
      });
    },
  });
  const position = [51.505, -0.09]; // Example coordinates (latitude, longitude)
  return (
    <>
      <Navbar />
      <section className="px-8 py-8 lg:py-16 ">
        <div className="container mx-auto text-center">
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-4 !text-base lg:!text-2xl"
          >
            Customer Care
          </Typography>
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 !text-3xl lg:!text-5xl"
          >
            We&apos;re Here to Help
          </Typography>
          <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
            Whether it&apos;s a question about our services, a request for
            technical assistance, or suggestions for improvement, our team is
            eager to hear from you.
          </Typography>
          <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-center">
            <MapContainer
              center={position}
              zoom={13}
              style={{ height: "500px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>
                  It's a <br /> Dummy Map.
                </Popup>
              </Marker>
            </MapContainer>
            <form onSubmit={handleSubmit(onSubmit)} className="my-10">
              <input
                type="checkbox"
                id=""
                className="hidden"
                style={{ display: "none" }}
                {...register("botcheck")}
              ></input>

              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  autoComplete="false"
                  className={`w-full px-4 py-3 border-1 rounded-md outline-none focus:ring-4  ${
                    errors.name
                      ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                      : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                  }`}
                  {...register("name", {
                    required: "Full name is required",
                    maxLength: 80,
                  })}
                />
                {errors.name && (
                  <div className="mt-1 text-red-600">
                    <small>{errors.name.message}</small>
                  </div>
                )}
              </div>

              <div className="mb-5">
                <label htmlFor="email_address" className="sr-only">
                  Email Address
                </label>
                <input
                  id="email_address"
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  autoComplete="false"
                  className={`w-full px-4 py-3 border-1 focus:ring-4  ${
                    errors.email
                      ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                      : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                  }`}
                  {...register("email", {
                    required: "Enter your email",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter a valid email",
                    },
                  })}
                />
                {errors.email && (
                  <div className="mt-1 text-red-600">
                    <small>{errors.email.message}</small>
                  </div>
                )}
              </div>
              <div className="mb-5">
                <label htmlFor="phone" className="sr-only">
                  Phone No.
                </label>
                <input
                  id="phone"
                  type="number"
                  placeholder="6935214789"
                  name="phone"
                  autoComplete="false"
                  className={`w-full px-4 py-3 border-1 focus:ring-4  ${
                    errors.phone
                      ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                      : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                  }`}
                  {...register("phone", {
                    required: "Enter your phone",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Please enter a valid 10-digit phone number",
                    },
                  })}
                />
                {errors.phone && (
                  <div className="mt-1 text-red-600">
                    <small>{errors.phone.message}</small>
                  </div>
                )}
              </div>

              <div className="mb-3">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className={`w-full px-4 py-3 border-2 rounded-md outline-none  h-36 focus:ring-4  ${
                    errors.message
                      ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                      : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                  }`}
                  {...register("message", {
                    required: "Enter your Message",
                  })}
                />
                {errors.message && (
                  <div className="mt-1 text-red-600">
                    <small>{errors.message.message}</small>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md"
              >
                {isSubmitting ? (
                  <svg
                    className="w-5 h-5 mx-auto text-white dark:text-black animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
            
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Support;
