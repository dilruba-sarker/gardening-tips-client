import React from "react";
import img from "../../assets/Spring.png";
import { motion } from "motion/react"
import { Link } from "react-router";
const Newsletter = () => {
  return (
    <div
      className="flex justify-center "
      style={{
        backgroundImage: `
              radial-gradient(circle, rgba(255, 200, 250, 0.0) 0%, rgba(300, 187, 233, 0.6) 100%),
                    url(${img})
                `,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "510px",
      }}
    >
      <div className="flex items-center">
        <div className="">
          <h1 className="text-4xl font-bold text-black">
            Subscribe to Our Newsletter
          </h1>
          <h1 className="text-xl font-bold text-black">
            Subscribe to get update, offers notification and information.
          </h1>
          <form>
            <h6 className="text-xl font-bold text-black">Newsletter</h6>
            <fieldset className="w-80 text-black">
              <label>Enter your email address</label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item"
                />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
<Link to="/browswtips">
          <motion.button className="text-white mt-6 ml-8 font-bold bg-amber-400 px-2 rounded-2xl"
  initial={{ opacity: 1 }}
animate={{
    scale: 2,
    transition: { duration: 6 }
  }}


> Click Me </motion.button></Link>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
