import React, { useState } from "react";
import IconStar from "../assets/images/icon-star.svg";
import RateItem from "./RateItem";
import { motion } from "framer-motion";

function Rating({ onclick }) {
  const [rate, setRate] = useState(null);

  function handleSubmit() {
    onclick(rate);
  }

  function handleSetRate(value) {
    return function (e) {
      setRate(value);
    };
  }

  return (
    <motion.div
      className="card"
      initial={{ y: "50%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, type: "spring", bounce: 0.5 }}
    >
      <div className="star">
        <img src={IconStar} alt="" />
      </div>
      <h3 className="card__title">How did we do?</h3>
      <p className="card__description">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <ol className="card__ratings">
        <li>
          <RateItem onclick={handleSetRate} value={1} />
        </li>
        <li>
          <RateItem onclick={handleSetRate} value={2} />
        </li>
        <li>
          <RateItem onclick={handleSetRate} value={3} />
        </li>
        <li>
          <RateItem onclick={handleSetRate} value={4} />
        </li>
        <li>
          <RateItem onclick={handleSetRate} value={5} />
        </li>
      </ol>
      <motion.button
        onClick={handleSubmit}
        className="card__button"
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        SUBMIT
      </motion.button>
    </motion.div>
  );
}

export default Rating;
