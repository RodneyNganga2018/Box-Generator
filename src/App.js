import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Block from './components/Block';

function App() {
  const [colors, setColors] = useState([]);

  const handleColor = (color) => {
    setColors(colors.concat(color));
  }

  return (
    <div>
      <Form newColor = {handleColor}/>
      <div className='blocks'>
        {
          colors.map( (item,i) =>
            <Block key={i} color={item} />
          )
        }
      </div>
    </div>
  );
}

export default App;
