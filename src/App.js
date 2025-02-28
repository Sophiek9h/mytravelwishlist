import './App.css';
import Nav from './components/nav';
import Card from './components/card';
import data from './components/data';

function App() {
  const card = data.map(item =>{
    return(
      <Card 
        key = {item.id}
        item = {item}
      />
    )
  })

  return (
    <div className="App">
      <Nav/>
      {card}
    </div>
  );
}

export default App;
