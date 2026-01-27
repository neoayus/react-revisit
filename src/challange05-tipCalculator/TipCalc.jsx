import { useState } from "react";
import "./Style.css";

export default function TipCalc() {
  // state lifting
  const [bill, setBill] = useState(" ");
  const [rating, setRating] = useState(0);

  let tip = (rating / 100) * bill;

  return (
    <form style={{ fontSize: "25px" }}>
      <Bill bill={bill} setBill={setBill} />
      <RateService rating={rating} setRating={setRating}>
        {" "}
        How did you like the Service ?{" "}
      </RateService>
      {/* <RateService>How did your Friend like the Service ?  </RateService> */}
      <Total bill={bill} rating={rating} tip={tip} />
      <Reset setBill={setBill} setRating={setRating} />
    </form>
  );
}

function Bill({ bill, setBill }) {
  return (
    <div>
      <p> How much was the bill? : </p>
      <input
        type="number"
        value={bill}
        onChange={(event) => setBill(Number(event.target.value))}
      />
    </div>
  );
}

function RateService({ rating, setRating, children }) {
  return (
    <div className="ratingInput">
      {children}
      <select
        name="rating"
        value={rating}
        onChange={(event) => setRating(Number(event.target.value))}
      >
        <option value={0}> Dissatisfied (0%) </option>
        <option value={5}> it was okay (5%) </option>
        <option value={10}> it was good (10%) </option>
        <option value={20}> Absolutely amazing (20%) </option>
      </select>
    </div>
  );
}

function Total({ bill, tip }) {
  return (
    <h2>
      You pay {bill + tip} (${bill} Bill + ${tip} Tip){" "}
    </h2>
  );
}

function Reset({ setBill, setRating }) {
  function handleReset() {
    setBill("");
    setRating("dissatisfied");
  }

  return <button onClick={handleReset}> Reset </button>;
}
