import React, {useState, useEffect} from 'react';

const Input = () => {
  
  const [ name, setName ] = useState('');
  const [ technology, setTechnology ] = useState('');
  const [ description, setDescription ] = useState('');

  const technologyTypes = [
    'react',
    'redux',
    'node',
    'express',
    'SQL',
    'mongo',
    'webpack'
  ]

  const [checkedState, setCheckedState] = useState(
    new Array(technologyTypes.length).fill(false)
  );

  const techCheckboxes = [];

  const handleChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
    index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  for (let i = 0; i < technologyTypes.length; i++) {
    const tech = technologyTypes[i];
    techCheckboxes.push(
      <div>
        <input type='checkbox' name={tech} index={i} value={tech} onChange={() => handleChange(i)}/>
        <label for={tech}>{

          tech
        }</label>
      </div>
    )
  }
  
  const sendCard = () => {
    // push the checkbox values to array for technology
    const arrayToSend = [];
    for (let i = 0; i < technologyTypes.length; i++) {
      if (checkedState[i]) {
        arrayToSend.push(technologyTypes[i]);
      }
    }
    
    console.log('name:', name);
    console.log('technology:', arrayToSend);
    console.log('description:', description);

    fetch('http://localhost:5001/projects', { //change after meetup
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        'projectname': name,
        'technology': arrayToSend,
        'description': description
      })
    })
      .then(() => {
        setName('');
        setDescription('');
      })
        
  }
  
  return (
    <div id='input'>
      <div id='left'>
        <div><b>Project name:</b></div>
        <input value={name} onChange={e => setName(e.target.value)} placeholder='Name'></input> <br/><br/>
        {/* <input value={technology} placeholder='Technology'></input> */}
        <div><b>Technologies used:</b></div>
        <div id='checkboxes'>
          {techCheckboxes}
        </div> <br/>
      </div>
      
      <div id='right'>
        <div><b>Description:</b></div>
        <textarea rows='4' cols='60' value={description} onChange={e => setDescription(e.target.value)} placeholder='Write your description here:'></textarea>
        <button id='savebutton' onClick={sendCard}>Save</button>
      </div>

    </div>
    

  )

}

export default Input;


//function myFunction(value) {
//   var checkBox = document.getElementById(value);
//   var text = document.getElementById("text");
//   if (checkBox.checked == true){
//     text.style.display = "block";
    
//   } else {
//      text.style.display = "none";
//   }
// }

// const [ front, setFront ] = useState('');

{/* <div className='two'>
<h2>Add Words/Terms</h2>

<input placeholder='Enter your Word/Term here...' value={front} onChange={e => setFront(e.target.value)}></input>
<input placeholder='Translation' value={definition} onChange={e => setDefinition(e.target.value)}></input>
<button onClick={saveCard}>Create</button>

</div> */}

//EXAMPLE

// import { useState } from "react";
// import { toppings } from "./utils/toppings";
// import "./styles.css";

// const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

// export default function App() {
//   const [checkedState, setCheckedState] = useState(
//     new Array(toppings.length).fill(false)
//   );

//   const [total, setTotal] = useState(0);

//   const handleOnChange = (position) => {
//     const updatedCheckedState = checkedState.map((item, index) =>
//       index === position ? !item : item
//     );

//     setCheckedState(updatedCheckedState);

//     const totalPrice = updatedCheckedState.reduce(
//       (sum, currentState, index) => {
//         if (currentState === true) {
//           return sum + toppings[index].price;
//         }
//         return sum;
//       },
//       0
//     );

//     setTotal(totalPrice);
//   };

//   return (
//     <div className="App">
//       <h3>Select Toppings</h3>
//       <ul className="toppings-list">
//         {toppings.map(({ name, price }, index) => {
//           return (
//             <li key={index}>
//               <div className="toppings-list-item">
//                 <div className="left-section">
//                   <input
//                     type="checkbox"
//                     id={`custom-checkbox-${index}`}
//                     name={name}
//                     value={name}
//                     checked={checkedState[index]}
//                     onChange={() => handleOnChange(index)}
//                   />
//                   <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
//                 </div>
//                 <div className="right-section">{getFormattedPrice(price)}</div>
//               </div>
//             </li>
//           );
//         })}
//         <li>
//           <div className="toppings-list-item">
//             <div className="left-section">Total:</div>
//             <div className="right-section">{getFormattedPrice(total)}</div>
//           </div>
//         </li>
//       </ul>
//     </div>
//   );
// }
