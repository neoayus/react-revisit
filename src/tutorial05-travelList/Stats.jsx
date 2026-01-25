export default function Stats({ items }) {
  // Conditional Rendering: 
  if (!items.length){
    return (
      <p className="stats"> 
        <em>Start adding things to your list, lessgooo </em>
      </p>
    )
  }
  // derived state
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
     

    <footer className="stats">
      <em>
        {percentage === 100 ? ' You are all ready to go !!' : `You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
        
      </em>
    </footer>
  );
}
