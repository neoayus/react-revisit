import { useState } from "react";

export default function Form({ onAddItems }) {
  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    // create new Items on the basis of form value
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now,
    };

    // handleAddItems(newItem) ; this piece is updated to.. after lifting up state
    onAddItems(newItem);

    // send the form to it's initial state:
    setDescription("");
    setQuantity(1);
  }

  // STATES : to handle form data:
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        name=""
        id=""
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/* easy way out : make an array containing 1-20*/}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          // console.log(e.target.value) ;
          setDescription(e.target.value);
        }}
      />

      <button> ADD </button>
    </form>
  );
}
