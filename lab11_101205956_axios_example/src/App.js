import './App.css';
import axios from 'axios';

function App() {
  const person = () => {
    axios.get('https://randomuser.me/api/?results=10')
      .then(res => {
        console.log(res.data.results)
      }).catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <button onClick={person}>person</button>
    </>
  );
}

export default App;
