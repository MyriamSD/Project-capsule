import React from 'react';
// import classes from './UsersList.module.css';
import Card from './UI/Card';
import classes from './StyleCard.module.css'




const StyleCard = (props) => {
    
    // const saveStyleDataHandler = (theChosenStyleData) => {
    //     const styleData = {
    //       ...theChosenStyleData,
    //       id: Math.random().toString()
    //     };
    //     props.onNewStyleData(styleData);
    // }
    
    return (
        <Card className={classes.styles}>
        <div>
            {props.styles.map((style) => (
            <div>
                <div className={classes.one}>{style.sBase.id} </div>
                <div className={classes.one}>
                <h3> bottoms </h3>
                <p> 
                3 {style.sBase} bottoms 
                2 {style.sNeutral} bottoms
                </p>
                </div>


                <div>
                <h3> 10 tops: </h3>
                <p> 
                    3 {style.sBase} tops/sweaters
                    3 {style.sNeutral} tops/sweaters
                    2 {style.sAccent}
                    2 {style.sPrint}
                </p>
                </div>


                <div>
                <h3>Dresses: 3 </h3>
                <p> 
                    1 {style.sBase} dress
                    1 {style.sNeutral} dress
                    1 {style.sAccent} dress
                </p>
                </div>

                <div>
                <h3> Layering pieces: </h3>
                <p> 
                    Jean jackets, winter coats, blazers, trench coats
                </p>
                </div>

            </div>
            ))}
        </div>
    </Card>
    
    )
};

export default StyleCard;


{/* <div>

<div>
<h3> bottoms </h3>
<p> 
3 {style.base} bottoms 
2 {style.neutral} bottoms
</p>
</div> 


<div>
<h3> 10 tops: </h3>
<p> 
    3 (chosen base) tops/sweaters
    3 (chosen neutral) tops/sweaters
    2 (chosen accent)
    2 (chosen print)
</p>
</div>


<div>
<h3>Dresses: 3 </h3>
<p> 
    1 (chosen neutral) dress
    1 (chosen base) dress
    1 (chosen accent) dress
</p>
</div>


<div>
<h3> Layering pieces: </h3>
<p> 
    Jean jackets, winter coats, blazers, trench coats
</p>
</div>

</div> */}
