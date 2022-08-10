import logo from './logo.svg';
import './App.css';
import Main from './components/Main'
import React,{useState} from 'react'
function App() {
  return (

    <div className="App">

        <Main />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export function App1({mot,cle}){
  return(<nav>
  <ul>
  {mot && <li>Mot:mot</li>}
  <li style={{display:cle?"block":"none"}}>{cle}</li>
<li>Bonjour</li>
<li>Bonsoir</li>
<input/>
</ul>
<div className="test">test
</div></nav>

)
}
export function App2(props1){
  console.log(props1)

const data= props1.props1.map((props)=>{

      return (<App1 mot={props.mot} cle={props.cle} key={props.key}/>)

  })
  return (<div>{data}</div>)
}
export function App3(props){


  console.log(props)
  return (<App1 mot={props.mot} cle={props.cle} key={props.key}/>)
}

export function App4(){
  const [contact,setContact]=useState({
    firstName:"Hamed",
    lastName:"Belkhiria",
    Country:"Tunisia",
    liked:false
  })
  function toggleFavorite(){

    setContact(prevContact=>({
      ...prevContact,
      liked:!prevContact.liked
    }))

  }
let liked1=contact.liked?"th.jpg":"th (1).jpg"
console.log(liked1)
return (<main>
<article>
<img src={`/assets/images/${liked1}`} onClick={toggleFavorite}/>
</article>
</main>
)
}

export default App4;
