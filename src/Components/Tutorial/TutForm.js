import React, { useState } from "react";
import Error from "./Error";
import './TutForm.css'



const TutForm = (props) => {


    const [chosenBase, setChosenBase] = useState('');
    const [chosenNeutral, setChosenNeutral] = useState('');
    const [chosenAccent, setChosenAccent] = useState('');
    const [chosenAccent2, setChosenAccent2] = useState('');
    const [chosenAccent3, setChosenAccent3] = useState('');
    const [chosenPrint, setChosenPrint] = useState('');
    const [enteredName, setEnteredName] = useState('');
    const [error, setError] = useState();


    const errorHandler = () => {
        setError(null);
    }


    const baseChangeHandler = (event) => {
        setChosenBase(event.target.value);  
      };


    const neutralChangeHandler = (event) => {
        setChosenNeutral(event.target.value);  
      };

    const accentChangeHandler = (event) => {
        setChosenAccent(event.target.value);
      };

    const accentChangeHandler2 = (event) => {
        setChosenAccent2(event.target.value);
      };
    
    const accentChangeHandler3 = (event) => {
        setChosenAccent3(event.target.value);
      };

    const printChangeHandler = (event) => {
        setChosenPrint(event.target.value);  
      };
    
    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);  
      };
    



        const submitHandler = (event) => {
        event.preventDefault();

        if (chosenBase.toString().length === 0 || chosenNeutral.toString().length === 0 || chosenAccent.toString().length === 0 || chosenAccent2.toString().length === 0 || chosenAccent3.toString().length === 0 || chosenPrint.toString().length === 0 || enteredName.toString().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Did you miss a field? Please choose one option for each questionnaire step.',

            });
            return;
        }
        if (chosenAccent.toString() === chosenAccent2.toString()) {
            setError({
                title: 'Invalid input',
                message: 'Oops! Accent 1 & 2 are the same. Please make sure you choose different colors for each accent option.',

            });
            return;
        }
        if (chosenAccent.toString() === chosenAccent3.toString()) {
            setError({
                title: 'Invalid input',
                message: 'Oops! Accent 1 & 3 are the same. Please make sure you choose different colors for each accent option.',

            });
            return;
        }
        if (chosenAccent2.toString() === chosenAccent3.toString()) {
            setError({
                title: 'Invalid input',
                message: 'Oops! Accent 2 & 3 are the same. Please make sure you choose different colors for each accent option.',
            });
            return;
        }
        // if (+enteredAge < 1) {
        //     setError({
        //         title: 'Invalid age',
        //         message: 'Please enter a valid age (> 0).',

        //     });
        //     return;
        // }

    
        props.onSaveStyleData(chosenBase, chosenNeutral, chosenAccent, chosenAccent2, chosenAccent3, chosenPrint, enteredName);
        setChosenBase('');
        setChosenNeutral('');
        setChosenAccent('');
        setChosenAccent2('');
        setChosenAccent3('');
        setChosenPrint('');
        setEnteredName('');
      };

    //   <img src={require('../Images/Black.jpg').default} className='bubble-color'/>
{/* <img src={require('../Images/Navy.jpg').default} className='bubble-color'/> */}

    return (
        
    <div className='background'>
    {error && <Error title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <form onSubmit={submitHandler}>
        
          <div className='choose_styles'>

          <div className="name">
          <label>First Name: </label>
                <label>
                <input
                    type="text"
                    name='name'
                    value={enteredName}
                    id='name'
                
                    // checked=''
                    onChange={nameChangeHandler}
                />
                </label>
        </div>



            <div className='Base-colors'>
              <label>Pick a base color</label>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='base'
                    value='Black'
                    id='radio'
                
                    // checked=''
                    onChange={baseChangeHandler}
                />
                <h4>Black</h4> <img src={require('../Images/Black.jpg').default} className='bubble-color2'/> 
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='base'
                    value="Navy"
                    id='radio'
                    // checked=''
                    onChange={baseChangeHandler}
                />
                <h4>Navy</h4> <img src={require('../Images/Navy.jpg').default} className='bubble-color'/>  
                </label>
                </div>
            </div>


                
               




            <div className='neutrals'>
              <label>Choose Your First Neutral</label>

              <div className="radio">
                <label>
                <input
                    type="radio"
                    name='neutral'
                    value="Black"
                    id='radio'
                    // checked=''
                    onChange={neutralChangeHandler}
                />
                <h4>Black</h4> <img src={require('../Images/Black.jpg').default} className='bubble-color2'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='neutral'
                    value="White"
                    id='radio'
                    // checked=''
                    onChange={neutralChangeHandler}
                />
                <h4>white</h4> <img src={require('../Images/White.png').default} className='bubble-color2'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='neutral'
                    value="Grey"
                    id='radio'
                    // checked=''
                    onChange={neutralChangeHandler}
                />
                <h4>Grey</h4> <img src={require('../Images/Grey.jpg').default} className='bubble-color'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='neutral'
                    value="beige"
                    id='radio'
                    // checked=''
                    onChange={neutralChangeHandler}
                />
                <h4>beige</h4> <img src={require('../Images/Beige.png').default} className='bubble-color'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='neutral'
                    value="blue"
                    id='radio'
                    // checked=''
                    onChange={neutralChangeHandler}
                />
                <h4>blue</h4> <img src={require('../Images/Sblue.png').default} className='bubble-color'/>
                </label>
                </div>

            </div>





            <div className='Accents'>
            
              <div className="Accent1">
              <label>Accent Color 1:</label>
              <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent'
                    value="Canary"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler}
                />
                {/*<h4>Canary</h4>*/} <img src={require('../Images/Canary.png').default} className='checkbox-color'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent'
                    value="Amber"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler}
                />
                {/*<h4>Amber</h4>*/} <img src={require('../Images/Amber.png').default} className='checkbox-color'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent'
                    value="Apricot"
                    id='radio'
                   // checked=''
                   onChange={accentChangeHandler}
                />
                {/*<h4>Apricot</h4>*/} <img src={require('../Images/Apricot.png').default} className='checkbox-color'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent'
                    value="Coral"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler}
                />
                {/*<h4>Coral</h4>*/} <img src={require('../Images/Coral.png').default} className='checkbox-color'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent'
                    value="Blush"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler}
                />
                {/*<h4>blush</h4>*/} <img src={require('../Images/Blush.jpg').default} className='checkbox-color'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent'
                    value="Rose"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler}
                />
                {/*<h4>Rose</h4>*/} <img src={require('../Images/Rose.png').default} className='checkbox-color'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent'
                    value="Pink"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler}
                />
                    {/*<h4>Pink</h4>*/} <img src={require('../Images/pink.png').default} className='checkbox-color'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent'
                    value="Red"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler}
                />
                {/*<h4>Red</h4>*/} <img src={require('../Images/Red.png').default} className='checkbox-color'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent'
                    value="Burgundy"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler}
                />
                {/*<h4>Burgundy</h4>*/} <img src={require('../Images/Burgandy.png').default} className='checkbox-color'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent'
                    value="Lilac"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler}
                />
                {/*<h4>Lilac</h4>*/} <img src={require('../Images/Lilac.png').default} className='checkbox-color'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent'
                    value="Purple"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler}
                />
                {/*<h4>Purple</h4>*/} <img src={require('../Images/Purple.png').default} className='checkbox-color'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent'
                    value="Plum"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler}
                />
                {/*<h4>Plum</h4>*/} <img src={require('../Images/Plum.jpg').default} className='checkbox-color'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent'
                    value="Cerulean"
                    id='radio'
                    //checked=''
                    onChange={accentChangeHandler}
                />
                {/*<h4>Cerulean</h4>*/} <img src={require('../Images/Cerulean.png').default} className='checkbox-color'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent'
                    value="skyBlue"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler}
                />
                {/*<h4>Sky Blue</h4>*/} <img src={require('../Images/SkyBlue.jpg').default} className='checkbox-color'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent'
                    value="Turqoise"
                    // checked=''
                    id='radio'
                    onChange={accentChangeHandler}
                />
                {/*<h4>Turqoise</h4>*/} <img src={require('../Images/Turqoise.png').default} className='checkbox-color'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent'
                    id='radio'
                    value="Seaglass"
                    // checked=''
                    onChange={accentChangeHandler}
                />
                {/*<h4>Seaglass</h4>*/} <img src={require('../Images/Seaglass.jpg').default} className='checkbox-color'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent'
                    value="Teal"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler}
                />
                {/*<h4>Teal</h4>*/} <img src={require('../Images/Teal.png').default} className='checkbox-color'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent'
                    value="Mint"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler}
                />
                {/*<h4>Mint</h4>*/} <img src={require('../Images/Mint.jpg').default} className='checkbox-color'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent'
                    value="Green"
                   // checked=''
                   id='radio'
                   onChange={accentChangeHandler}
                />
                {/*<h4>Green</h4>*/} <img src={require('../Images/Green.png').default} className='checkbox-color'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent'
                    id='radio'
                    value="Olive"
                    // checked=''
                    onChange={accentChangeHandler}
                />
                {/*<h4>Olive</h4>*/} <img src={require('../Images/olive.png').default} className='checkbox-color'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent'
                    id='radio'
                    value="Lime"
                    // checked=''
                    onChange={accentChangeHandler}
                />
                {/*<h4>Lime</h4>*/} <img src={require('../Images/Lime.jpg').default} className='checkbox-color'/>
                </label>
                </div>
            </div>





        <div className='Accent2'>
            <label>Accent Color 2:</label>
              <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent2'
                    value="Canary"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler2}
                />
                {/* <h4>Canary</h4>*/} <img src={require('../Images/Canary.png').default} className='checkbox-color2'/> 
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent2'
                    value="Amber"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler2}
                />
                {/* <h4>Amber</h4>*/} <img src={require('../Images/Amber.png').default} className='checkbox-color2'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent2'
                    value="Apricot"
                    id='radio'
                   // checked=''
                   onChange={accentChangeHandler2}
                />
                {/*<h4>Apricot</h4>*/} <img src={require('../Images/Apricot.png').default} className='checkbox-color2'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent2'
                    value="Coral"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler2}
                />
                {/*<h4>Coral</h4>*/} <img src={require('../Images/Coral.png').default} className='checkbox-color2'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent2'
                    value="Blush"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler2}
                />
                {/*<h4>blush</h4>*/} <img src={require('../Images/Blush.jpg').default} className='checkbox-color2'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent2'
                    value="Rose"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler2}
                />
                {/*<h4>Rose</h4>*/} <img src={require('../Images/Rose.png').default} className='checkbox-color2'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent2'
                    value="Pink"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler2}
                />
                {/*<h4>Pink</h4>*/} <img src={require('../Images/pink.png').default} className='checkbox-color2'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent2'
                    value="Red"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler2}
                />
                {/*<h4>Red</h4>*/} <img src={require('../Images/Red.png').default} className='checkbox-color2'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent2'
                    value="Burgundy"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler2}
                />
                {/*<h4>Burgundy</h4>*/} <img src={require('../Images/Burgandy.png').default} className='checkbox-color2'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent2'
                    value="Lilac"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler2}
                />
                {/*<h4>Lilac</h4>*/} <img src={require('../Images/Lilac.png').default} className='checkbox-color2'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent2'
                    value="Purple"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler2}
                />
                {/*<h4>Purple</h4>*/} <img src={require('../Images/Purple.png').default} className='checkbox-color2'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent2'
                    value="Plum"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler2}
                />
                {/*<h4>Plum</h4>*/} <img src={require('../Images/Plum.jpg').default} className='checkbox-color2'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent2'
                    value="Cerulean"
                    id='radio'
                    //checked=''
                    onChange={accentChangeHandler2}
                />
                {/*<h4>Cerulean</h4>*/} <img src={require('../Images/Cerulean.png').default} className='checkbox-color2'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent2'
                    value="SkyBlue"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler2}
                />
                {/*<h4>Sky Blue</h4>*/} <img src={require('../Images/SkyBlue.jpg').default} className='checkbox-color2'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent2'
                    value="Turqoise"
                    // checked=''
                    id='radio'
                    onChange={accentChangeHandler2}
                />
                {/*<h4>Turqoise</h4>*/} <img src={require('../Images/Turqoise.png').default} className='checkbox-color2'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent2'
                    id='radio'
                    value="Seaglass"
                    // checked=''
                    onChange={accentChangeHandler2}
                />
                {/*<h4>Seaglass</h4>*/} <img src={require('../Images/Seaglass.jpg').default} className='checkbox-color2'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent2'
                    value="Teal"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler2}
                />
                {/*<h4>Teal</h4>*/} <img src={require('../Images/Teal.png').default} className='checkbox-color2'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent2'
                    value="Mint"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler2}
                />
                {/*<h4>Mint</h4>*/} <img src={require('../Images/Mint.jpg').default} className='checkbox-color2'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent2'
                    value="Green"
                   // checked=''
                   id='radio'
                   onChange={accentChangeHandler2}
                />
                {/*<h4>Green</h4>*/} <img src={require('../Images/Green.png').default} className='checkbox-color2'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent2'
                    id='radio'
                    value="Olive"
                    // checked=''
                    onChange={accentChangeHandler2}
                />
                {/*<h4>Olive</h4>*/} <img src={require('../Images/olive.png').default} className='checkbox-color2'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent2'
                    id='radio'
                    value="Lime"
                    // checked=''
                    onChange={accentChangeHandler2}
                />
                {/*<h4>Lime</h4>*/} <img src={require('../Images/Lime.jpg').default} className='checkbox-color2'/>
                </label>
                </div>
            </div>




            <div className="Accent3">
              <label>Accent Color 3:</label>
              <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent3'
                    value="Canary"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler3}
                />
                <h4>Canary</h4> <img src={require('../Images/Canary.png').default} className='checkbox-color3'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent3'
                    value="Amber"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler3}
                />
                <h4>Amber</h4> <img src={require('../Images/Amber.png').default} className='checkbox-color3'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent3'
                    value="Apricot"
                    id='radio'
                   // checked=''
                   onChange={accentChangeHandler3}
                />
                <h4>Apricot</h4> <img src={require('../Images/Apricot.png').default} className='checkbox-color3'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent3'
                    value="Coral"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler3}
                />
                <h4>Coral</h4> <img src={require('../Images/Coral.png').default} className='checkbox-color3'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent3'
                    value="Blush"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler3}
                />
                <h4>blush</h4> <img src={require('../Images/Blush.jpg').default} className='checkbox-color3'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent3'
                    value="Rose"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler3}
                />
                <h4>Rose</h4> <img src={require('../Images/Rose.png').default} className='checkbox-color3'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent3'
                    value="Pink"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler3}
                />
                    <h4>Pink</h4> <img src={require('../Images/pink.png').default} className='checkbox-color3'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent3'
                    value="Red"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler3}
                />
                <h4>Red</h4> <img src={require('../Images/Red.png').default} className='checkbox-color3'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent3'
                    value="Burgundy"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler3}
                />
                <h4>Burgundy</h4> <img src={require('../Images/Burgandy.png').default} className='checkbox-color3'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent3'
                    value="Lilac"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler3}
                />
                <h4>Lilac</h4> <img src={require('../Images/Lilac.png').default} className='checkbox-color3'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent3'
                    value="Purple"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler3}
                />
                <h4>Purple</h4> <img src={require('../Images/Purple.png').default} className='checkbox-color3'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent3'
                    value="Plum"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler3}
                />
                <h4>Plum</h4> <img src={require('../Images/Plum.jpg').default} className='checkbox-color3'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent3'
                    value="Cerulean"
                    id='radio'
                    //checked=''
                    onChange={accentChangeHandler3}
                />
                <h4>Cerulean</h4> <img src={require('../Images/Cerulean.png').default} className='checkbox-color3'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent3'
                    value="SkyBlue"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler3}
                />
                <h4>Sky Blue</h4> <img src={require('../Images/SkyBlue.jpg').default} className='checkbox-color3'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent3'
                    value="Turqoise"
                    // checked=''
                    id='radio'
                    onChange={accentChangeHandler3}
                />
                <h4>Turqoise</h4> <img src={require('../Images/Turqoise.png').default} className='checkbox-color3'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent3'
                    id='radio'
                    value="Seaglass"
                    // checked=''
                    onChange={accentChangeHandler3}
                />
                <h4>Seaglass</h4> <img src={require('../Images/Seaglass.jpg').default} className='checkbox-color3'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent3'
                    value="Teal"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler3}
                />
                <h4>Teal</h4> <img src={require('../Images/Teal.png').default} className='checkbox-color3'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent3'
                    value="Mint"
                    id='radio'
                    // checked=''
                    onChange={accentChangeHandler3}
                />
                <h4>Mint</h4> <img src={require('../Images/Mint.jpg').default} className='checkbox-color3'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent3'
                    value="Green"
                   // checked=''
                   id='radio'
                   onChange={accentChangeHandler3}
                />
                <h4>Green</h4> <img src={require('../Images/Green.png').default} className='checkbox-color3'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent3'
                    id='radio'
                    value="Olive"
                    // checked=''
                    onChange={accentChangeHandler3}
                />
                <h4>Olive</h4> <img src={require('../Images/olive.png').default} className='checkbox-color3'/>
                </label>
                </div>

                <div className="radio">
                <label>
                <input
                    type="radio"
                    name='Accent3'
                    id='radio'
                    value="L VVime"
                    // checked=''
                    onChange={accentChangeHandler3}
                />
                <h4>Lime</h4> <img src={require('../Images/Lime.jpg').default} className='checkbox-color3'/>
                </label>
                </div>
            </div>





            </div>



            <div className='Prints'>
              <label>Choose Your prints and patterns</label>

                    <div className="rec">
                    <label>
                    <input
                        type="radio"
                        name='print'
                        value="Sparkle"
                        // checked=''
                        onChange={printChangeHandler}
                 />
                    <h3>Sparkles & Sequins</h3> <img src={require('../Images/sparkle2.JPEG').default} className='pill-color'/>
                    </label>
                    </div>

                    <div className="rec">
                    <label>
                    <input
                        type="radio"
                        name='print'
                        value="Animal"
                        // checked=''
                        onChange={printChangeHandler}
                 />
                    <h3>Animal Prints</h3> <img src={require('../Images/animal3.JPEG').default} className='pill-color'/>
                    </label>
                    </div>

                    <div className="rec">
                    <label>
                    <input
                        type="radio"
                        name='print'
                        value="Geometric"
                        // checked=''
                        onChange={printChangeHandler}
                 />
                    <h3>Geometric (Stripes, plaid & Polka dots)</h3> <img src={require('../Images/geo1.JPEG').default} className='pill-color'/>
                    </label>
                    </div>

                    <div className="recf">
                    <label>
                    <input
                        type="radio"
                        name='print'
                        value="Floral"
                        // checked=''
                        onChange={printChangeHandler}
                 />
                    <h3>Floral Prints</h3> <img src={require('../Images/floral1.JPEG').default} className='pill-color'/>
                    </label>
                    </div>

                </div>


        <div className='buttons'>
                <button type='submit' className='button'>Create your style card</button>
        </div>
          </div>




          
        </form>
    </div>
      );
    
    

}

export default TutForm;