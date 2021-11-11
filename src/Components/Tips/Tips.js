import React from "react";
import Navbar from "../Home/Navbar";
import {SliderData} from "./SliderData";
import Slider from "./Slider";
import { ContactUs } from "./Contact";
import './Tips.css'





function Tips() {
  return (
    <div className='tips'>
      <Navbar />
      <Slider slider={SliderData}/>


      <div className='TipsOpen'>
        <h2 >Got your Style Card?</h2>
      </div>

      <div className='TipsNext'>
        <p>Use these tips and tricks as a guide while soring, shopping, and creating your new wardrobe. </p>
      </div>

      
     <div className='TipsOpens2'>
        <h2>Shop your closet first</h2>
        <ul>
          <li>Who doesnt love an out with the old, in with the new moment? 
        But throughout this journey it's important to remember that less is more. So dont hesitate to shop your closet for items that you still love before heading off to the malls or outlets.</li>
        </ul>
      </div>

      <div className='TipsOpen3'>
        <h2>Make sure you're Matching</h2>
        <ul>
          <li>As you're cleaning and shopping, make sure that each item you buy matches with AT LEAST 3 other items in your wardrobe.</li>
        </ul>
      </div>

<h2 className="theend">Anymore questions? Send us a message</h2>
<ContactUs/>

    </div>
  );
}

export default Tips;
