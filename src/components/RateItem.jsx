import React from "react";
import { motion } from "framer-motion";

function RateItem({ value, onclick }) {
  return (
    <>
      <input type="radio" name="rate" hidden id={`rate-${value}`} />
      <motion.label
        htmlFor={`rate-${value}`}
        onClick={onclick(value)}
        className="ratings-item"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {value}
      </motion.label>
    </>
  );
}

export default RateItem;
