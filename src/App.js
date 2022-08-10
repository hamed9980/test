import logo from './logo.svg';
import './App.css';
import Main from './components/Main'
import tableau from './tableau'
import React,{useState,useEffect} from 'react'
function App() {
  var tableau1=tableau;
  const [tab1,changeColor]=useState(tableau1);
  function changeColor1(value){


  changeColor(
    prevAtt=>{
      prevAtt[value].color=!prevAtt[value].color;
      console.log(tableau1[value],tab1[value])
        return prevAtt;
    })

  }
  useEffect(()=>{
    console.log('effect')

  },[tab1])
return(<div>Hello
  {tab1.map((x)=>(
    <button style={{color:x.color?'gray':'blue'}}

     key={x.key}
      onClick={()=>changeColor1(x.key)}>{x.value} {x.color?'gray':'blue'}</button>
  ))}
</div>)
}
export default App
