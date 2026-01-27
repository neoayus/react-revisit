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
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  function handleHideAddFriend() {
    setShowFriend(false);
  }
  
  function handleSelection(friend){
    if(selectedFriend != friend){
      setSelectedFriend(friend)     
    }else{
      setSelectedFriend(null);
    }
    
    setShowFriend(false); 
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} selectedFriend={selectedFriend} onSelection={handleSelection}/>
        {showAddFriend && (
          <FormAddFriend
            onAddFriend={handleAddFriend}
            onHideAddFriend={handleHideAddFriend}
          />
        )}
        <Button
          onClick={() => {
            setShowFriend((show) => !show);
          }}
        >
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {/* conditional renderin of form split bill  */}
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
    </div>
  );
}

// SPLIT
function FriendList({friends, selectedFriend, onSelection}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} selectedFriend={selectedFriend} onSelection={onSelection}/>
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
function Friend({friend, onSelection, selectedFriend}) {
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

      <Button onClick={()=> onSelection(friend)}> {selectedFriend === friend ? "Close" : "Select"} </Button>
    </li>

  );
}

// SPLIT
function FormAddFriend({ onAddFriend, onHideAddFriend }) {
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
    onAddFriend(newFriend);
    onHideAddFriend();
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

function FormSplitBill({selectedFriend}) {
  
  const [bill, setBill] = useState("") ;
  const[yourHalf, setYourHalf] = useState("");

  const otherHalf = bill-yourHalf ;
  
  const [whoIsPaying, setWhoIsPaying] = useState("user"); 
  
  function handleSplit(e){
    e.preventDefault() ;
  }
  

  return (
    <form className="form-split-bill" onSubmit={handleSplit}>
      <h2>Split a Bill with {selectedFriend.name} </h2>

      <label> Bill Value </label>
      <input type="number" value={bill} onChange={(e)=> setBill(Number(e.target.value))}/>

      <label> Your Expanses </label>
      <input type="number" value={yourHalf} onChange={(e)=> setYourHalf(Number(e.target.value) > bill ? yourHalf : Number(e.target.value) )}/>

      <label> X's Expanses </label>
      <input type="number" value={otherHalf} disabled />

      <label>Who is paying the bill? </label>
      <select name="" id="">
        <option value="you"> You </option>
        <option value="friend"> {selectedFriend.name} </option>
      </select>

      <Button> Split Bill </Button>
    </form>
  );
}
