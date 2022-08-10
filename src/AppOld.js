import logo from './logo.svg';
import './App.css';
import Main from './components/Main'
import tableau from './tableau'
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
  function toggleFavorite(value,value1){
    console.log(value,value1)
if(value1==="th (1).jpg"){
  console.log('yes')
}
    setContact(prevContact=>({
      ...prevContact,
      liked:!prevContact.liked
    }))

  }
let liked1=contact.liked?"th.jpg":"th (1).jpg"
console.log(liked1)
return (<main>
<article>
<img src={`/assets/images/${liked1}`} onClick={()=>toggleFavorite(`${liked1}` )}/>
</article>
</main>
)
}
var tabX=tableau
export function App5(){
  var i=0;

const [tab1,changeColor]=React.useState(tabX);
function changeColor1(i){



    changeColor(prevAtt=>{
      prevAtt[i].color=!prevAtt[i].color;
    return(prevAtt);
  })


  console.log(tab1[i])

}


var tableau1=tab1.map((element)=>{
var styles={backgroundColor:element.color?"red":"blue"}

return  (<button style={styles} onClick={()=>changeColor1(element.key)} key={element.key}>{element.value}</button>)
})
return(<div>{tableau1}</div>)
}

export default App5;
