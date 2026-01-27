import { useState } from "react";
import "./Index.css";

// list of friends
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function Split() {
  const [showAddFriend, setShowFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  // const [friends, setFriends] = useState([]);

  function handleAddFriend(friend){
    setFriends((friends) => [...friends, friend]); 
  } 

  function handleHideAddFriend(){
    setShowFriend(false) ;  
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} onHideAddFriend={handleHideAddFriend}/>}
        <Button
          onClick={() => {
            setShowFriend((show) => !show);
          }}
        >
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

// SPLIT
function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

// SPLIT
export function Button({ onClick, children }) {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
}

// SPLIT
function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          {" "}
          You Owe {friend.name} {friend.balance} $.{" "}
        </p>
      )}
      {friend.balance == 0 && <p> You and {friend.name} are even. </p>}
      {friend.balance > 0 && (
        <p className="green">
          {" "}
          {friend.name} Owe You {friend.balance} $.{" "}
        </p>
      )}

      <Button> Select </Button>
    </li>
  );
}

// SPLIT
function FormAddFriend({onAddFriend, onHideAddFriend}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    // data is initial friend list
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    var newFriend = {
      id: id,
      name: name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    // console.log(newFriend);
    onAddFriend(newFriend) ; 
    onHideAddFriend() ;

  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label> Friend Name </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label> Image URL </label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button> Add </Button>
    </form>
  );
}

// SPLIT
function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a Bill with X </h2>

      <label> Bill Value </label>
      <input type="number" />

      <label> Your Expanses </label>
      <input type="number" />

      <label> X's Expanses </label>
      <input type="number" disabled />

      <label>Who is paying the bill? </label>
      <select name="" id="">
        <option value="you"> You </option>
        <option value="friend"> X </option>
      </select>

      <Button> Split Bill </Button>
    </form>
  );
}
