import React, {useState} from 'react';
import Navbar from "../Home/Navbar";
import TutForm from "./TutForm"
// import StyleCard from './StyleCard';
import StyleCard from "./StyleCard";



// const style = [
//     {
//       Base: 'black',
//       Neutral: 'beige',
//       Accent: 'Coral',
//       Print: 'Floral',
//     },
// ]

function TheStyleCard() {
const [styleCard, setStyleCard] = useState([]);
const [isEditing, setIsEditing] = useState(false);

const addStyleHandler = (base, neutral, accent, accent2, accent3, print, name) => {
    setStyleCard(
        [{sBase: base, sNeutral: neutral, sAccent: accent, s2Accent: accent2, s3Accent: accent3, sPrint: print, sName: name,}]
    )
    setIsEditing(true)
};

// const startEditingHandler = () => {
//     setIsEditing(true)
//   };

const stopEditingHandler  = () => {
    setIsEditing(false)
  };



    return (
        <div>
         <Navbar/>
         
            <h2>Tutorial</h2>
            <TutForm onSaveStyleData={addStyleHandler}/>
            {isEditing && <StyleCard styles={styleCard} onClick={stopEditingHandler}/>}
        </div>
    )
}

export default TheStyleCard
