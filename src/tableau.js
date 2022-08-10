var tableau=[

]
var tableau=[]
var i=0;
while(i<62){
  if(i<10){
  tableau.push({
    key:i,
    value:i.toString(),
    color:true,
  })
}
  else if(i<36){
  tableau.push({
    key:i,
    value:String.fromCharCode(i+97-10),
    color:true
  })
}
else{
  tableau.push({
    key:i,
    value:String.fromCharCode(i+65-36),
    color:true
  })
}
i+=1
}

export default tableau
