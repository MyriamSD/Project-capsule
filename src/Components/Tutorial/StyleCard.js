import React from 'react';
import classes from './StyleCard.module.css';
import Card from './UI/Card';
// import Button from '../UI/Button';



const StyleCard = (props) => {
    
    return (
    <div className={classes.backdrop} onClick={props.onConfirm}>
        
        <Card className={classes.modal}>
        {/* <img src={require('../Images/Blush.jpg').default} className={classes.cardback} /> */}

                    <div className={classes.styles}>
                    {/* <img src={require('../Images/Blush.jpg').default} className={classes.cardback} /> */}
                    <div>
                        {props.styles.map((style) => (
                        <div>
            
                            <div className={classes.one}>
                            <h2> {style.sName}'s custom style card </h2>
                            <h3> Bottoms: </h3>
                            <p> 
                            3 {style.sBase} bottoms, 
                            2 {style.sNeutral} bottoms.
                            </p>
                            </div>


                            <div>
                            <h3>Tops:</h3>
                            <p> 
                                3 {style.sBase} tops,
                                3 {style.sNeutral} tops,
                                1 {style.sAccent} top,
                                1 {style.s2Accent} top,
                                1 {style.s3Accent} top,
                                2 {style.sPrint} print tops.
                            </p>
                            </div>


                            <div>
                            <h3>Dresses:</h3>
                            <p> 
                                1 {style.sBase} dress,
                                1 {style.sNeutral} dress,
                                1 {style.sAccent}, {style.s2Accent}, or {style.s3Accent} dress.
                            </p>
                            </div>

                            <div>
                            <h3> Layering pieces: </h3>
                            <p> 
                                Your chosen colors and print are {style.sBase}, {style.sNeutral}, {style.sAccent}, {style.s2Accent}, {style.s3Accent} & {style.sPrint} print.
                                <br/>   
                                <br/>From these colors choose 3 layering pieces, including:
                                <br/> Jean or Leather Jackets, Winter Coats, Blazers, Trench Coats
                            </p>
                            </div>

                        </div>
                        ))}
                    </div>
                </div>
            

            <footer className={classes.actions} >
             
             <button onClick={props.onClick}>Done</button>
            </footer>
        </Card>
        </div>
    )

};

export default StyleCard;