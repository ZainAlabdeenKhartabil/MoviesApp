import { useState } from 'react'
import './App.css'

const Card = ({title}) => {
  const [hasLiked, setHasLiked] = useState(false);

  return(
    <div className='card'>
      <h2>{title}</h2>

      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? '❤️' : '🤍'}
      </button>
    </div>
  );

}

const App = () => {
  return (
    <>
      <Card title="Iron Man"/>
      <Card title="Avatar"/>
    </>
  );
}

export default App
