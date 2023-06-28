// import './App.css'
import Header from './components/header'

function App() {
  const data ='Yatheesh'
    return (
      <div>
        <Header data={data}/>
      <p> this is sample {data}</p>
      </div>
    );  
}

export default App;
