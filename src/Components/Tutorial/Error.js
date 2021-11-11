import React from 'react';
import classes from './Error.module.css';
import Card from './UI/Card';





const Error = (props) => {
    
  return (
  <div>
      <div className={classes.backdrop} onClick={props.onConfirm}>

      </div>
      <Card className={classes.modal}>
          <header className={classes.header} >
              <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
              <p>{props.message}</p>
          </div>

          <footer className={classes.actions} >
           <button onClick={props.onConfirm}>Okay</button>
          </footer>
      </Card>
      </div>
  )

};

export default Error