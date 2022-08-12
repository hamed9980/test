import logo from './logo.svg';
import './App.css';
import Main from './components/Main'
import tableau from './tableau'
import React,{useEffect} from 'react'
import useState from 'react-usestateref'
function AppComponentRenderer({color1,style,value,onClick}){

  return (<button onClick={onClick} style={{color:color1?'gray':'blue'}}


      >{value} {color1?'gray':'blue'}</button>)
}
function App({onClick})  {


  var tableau2=tableau;
  var [tab1,changeColor,ref]=useState(tableau);
useEffect(()=>{
  console.log('Color updated')
},[ref.current])
  function changeColor1(value){
console.log(value)
  changeColor(
    prevAtt=>{
      prevAtt[value].color=!prevAtt[value].color;
console.log(prevAtt[value])
        return prevAtt;

    })

  }
return(<div>Hello
  {ref.current.map((x)=>(
  <AppComponentRenderer onClick={()=>{changeColor1(x.key);onClick();}} key={x.key} key1={x.key} value={x.value}  color1={x.color}/>
  ))}
</div>)
}


function shouldComponentUpdate(nextProps, nextState){
if (this.state.data !== nextState.data){
  this.setState({
    data: nextState.data
  })
  return true
}
return false
}
function App1(){
  const [écrire,setécrire]=useState("")
  function changé(évenement){
    console.log(évenement.target.value)
  }
  return (<div><form>
  <input type="text"
placeholder="écrire"
onChange={changé}
name="ecrire"/>
</form>
</div>
)
}
class App2 extends React.Component{
  render(){
  return (<App onClick={this.force}/>)
}
force=()=>{
  this.forceUpdate()
}
}
export default App2
