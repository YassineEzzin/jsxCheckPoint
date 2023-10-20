import React from 'react';
import Name from './component/Name';
import Image from './component/Image';
import Description from './component/Description';
import "./App.css"
import Card from 'react-bootstrap/Card';
import Price from './component/Price'
function App (){

return(
    <div className='App'>
      <Card className='cards' style={{ width: '50em',backgroundColor:'#FFFFCC'} }>
    
        
        <Card.Title  style={{color:'red'}}>҉z҉҉e҉҉d҉ ҉c҉҉a҉҉r҉҉d҉</Card.Title>
        <Name/>
        <Image/>
        <Description/>
          <Price/>
      
   
  </Card>

    </div>
)



}
export default App


