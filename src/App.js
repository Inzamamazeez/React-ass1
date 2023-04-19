import logo from './logo.svg';
import './App.css';

function Reactlogo() {
  return (
    <>
   <img src={logo} className="App-logo" alt="logo" />
   </>
  )
}
function Reactbenifits(){
  return(
    <>
    <h1>Benifits of using React...</h1>
    <ol>
      <l1>Component-based architecture</l1>
      <l2>Virtual DOM for efficient updates</l2>
      <l3>Rich ecosystem and community</l3>
      <l4>Cross platform development</l4>
      <l5>Strong community support:</l5>
    </ol>
    </>
  )
}
  function Button(){
    return(
      <Button>Get started...</Button>
    )
  }
  function App(){
    return(
      <div className="App">
      <Reactlogo/>
      <Reactbenifits/>
      <Button/>
      </div>
    )
  }
export default App;
