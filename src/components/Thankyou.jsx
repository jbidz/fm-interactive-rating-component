import React from "react";
import Illustration from "../assets/images/illustration-thank-you.svg";
import { motion } from "framer-motion";

function Thankyou({ rating }) {
  return (
    <motion.div
      className="card aling-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, type: "spring", bounce: 0.5 }}
    >
      <img className="card__image" src={Illustration} alt="" />
      <div className="result">You selected {rating} out of 5</div>
      <motion.h3
        className="card__title"
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{ delay: 0.5 }}
      >
        Thankyou!
      </motion.h3>
      <p className="card__description">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </motion.div>
  );
}

export default Thankyou;
