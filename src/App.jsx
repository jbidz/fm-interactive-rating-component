import { useState } from "react";
import Rating from "./components/Rating";
import Thankyou from "./components/Thankyou";
import { motion } from "framer-motion";

function App() {
  const [done, setDone] = useState(false);
  const [rating, setRating] = useState(null);
  const [alert, setAlert] = useState(false);

  function handleNext(rating) {
    if (rating == null) {
      setAlert((prev) => (prev = true));
      setTimeout(() => {
        setAlert((prev) => (prev = false));
      }, 3000);
      return;
    }
    setDone((prev) => (prev = true));
    setRating((prev) => (prev = rating));
  }

  function showAlert() {
    return (
      <div className="alert-wrapper">
        <motion.div
          className="alert"
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Please choose rating
        </motion.div>
      </div>
    );
  }

  function switchUI() {
    return done ? (
      <Thankyou rating={rating} />
    ) : (
      <Rating onclick={handleNext} />
    );
  }

  return (
    <>
      {alert ? showAlert() : ""}
      {switchUI()}
    </>
  );
}

export default App;
