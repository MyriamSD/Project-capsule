import './Home.css'
import React from "react";
// import Header from "./Header";
// import CountUp from "./CountUp";
import Navbar from "./Navbar";
import ContactForm from "./ContactForm";
import Carousel from "./Carousel"
import {CarouselData} from "./CarouselData";
import { FaWindowRestore } from 'react-icons/fa';



function Home() {
  const handlequizclick = () => {
    window.open("https://www.joyofclothes.com/style-quiz")
  }

  const handlecardclick = () => {
    window.open("http://localhost:3000/StyleCard")
  }

  const handletipclick = () => {
    window.open("http://localhost:3000/Tips")
  }

  const handlegiveclick = () => {
    window.open("http://localhost:3000/GiveBack")
  }
  

  
  return (
    <div>
      
    
        <Navbar/>
        <img src={require('../Images/ProjectCapsule.jpg').default} className='project-capsule-logo'/>
        <Carousel slides={CarouselData}/>

        <section className="what-is">
          <h2 className='Second-question'>What is Capsule Wardrobing?</h2>

            <p className='second-dialogue'>
            A Sustainable 
            <br/>Cost efficient
            <br/>And practical way to express your style
            </p>

            <p className='third-dialogue'>
            Achieved through cultivating a smaller, 
            <br/>but thoughtfully designed wardrobe 
            <br/>full of pieces you can easily mix and match
            </p>

            <div className='section-decor'>
            <img src={require('../Images/sectiondecor1.jpg').default} className='decor1'/>
            <img src={require('../Images/sectiondecor2.jpg').default} className='decor2'/>

            </div>

            <p className='fourth-dialogue'>
            A happier earth.
            <br/> A happier you. 
            <br/>And no compromise on dressing the way that defines your individuality!
            </p>

        </section>


        <div className='content'>
          <h2 className='Opening-question'>Feeling Stressed when getting dressed?</h2>

            <p className='first-dialogue'>Every morning turns into a battle royale of tearing through a cluttered closet. 
            <br/> You sift through dress, after blazer, after skirt and shirt, and still nothing to wear!
            <br/> Have you lost count of not only the cost of your threads, but also the cost of time lost to this tiresome routine? 
            </p>
              <h3 className='first-dialogue-ending'>Perhaps it's time for a change</h3>
        
        
                <div className="grouped-icons">
                <img src={require('../Images/Sustainability.jpeg').default} className='sustainability'/>
                <img src={require('../Images/Affordability.jpeg').default} className='affordability'/>
                <img src={require('../Images/Freedom.jpeg').default} className='freedom'/>
                </div>

        </div>

        <div className='closure'>
          <h2 className='closure-question'>How Do We Help</h2>
          <h4 className='under-closure-question'>A simple but comprehensive tool to get you started on your very own capsule wardobe</h4>
          <h4 className='introduce-steps'>4 simple steps:</h4>
        
        <div className='list'>


        
          <section><img src={require('../Images/1.JPEG').default} className='step1' id='number'/> <p className='stepone'>Not sure about your style? 
          <br/>Take this fun style quiz to gain sme insight </p>
          <button onClick={handlequizclick}>Lets Go!</button>
          </section>
       
          
          <section><img src={require('../Images/2.JPEG').default} className='step2' id='number'/> <p className='steptwo'>Fill out our short form to recieve you very own custom stylecard</p> 
          <button onClick={handlecardclick}>Lets Go!</button>
          </section>

          <section><img src={require('../Images/3.JPEG').default} className='step3' id='number'/> <p className='stepthree'>Read through our tips & tricks.
          <br/> They'll help you navigate your style card & fast track your path to a fabulous capsule wardobe</p> 
          <button onClick={handletipclick}>Lets Go!</button>
          </section>

          <section><img src={require('../Images/4.JPEG').default} className='step4' id='number'/> <p className='stepfour'> Once the clutter is gone, you my find youself with plenty of clothes, you no longer need. 
          <br/>Use our  quick application to locate thrift stores near you.
          <br/> giving back to your community is the final step.</p> 
          <button onClick={handlegiveclick}>Lets Go!</button>
          </section>
        </div>

        {/* <div className='list-items'>
          <h1>Not sure about your style? Take this fun style quiz to gain sme insight</h1>
          <h1>Fill out our short form to recieve you very own custom stylecard</h1>
          <h1>Read through our tips & tricks to help you navigate your style card and fast track you way to a fabulous capsule wardobe</h1>
          <h1>Once the clutter is gone, you my find youself with plenty of clothes, you no longer need. Use our  quick application to locate thrift stores near you, and give back to your community.</h1>
          
        </div> */}
        </div>
        
        {/* <ContactForm></ContactForm> */}
        
      
    </div>
  );
}

export default Home;

// function Home() {
//   return (
//     <div>
//     <video className="vid" autoPlay loop muted
//     style={{
//           display: 'flex',
//           objectFit: 'fill',
//           position: "fixed",
//           width: "100%",
//           height: '100%',
//           zIndex: '-1',
//           left: 0,
//           top: 0
          
//     }}      
//     >
//         <source src={Catwalk} type="video/mp4" />
//       </video>
    
//         <Navbar/>
//         <Header/>
//         <CountUp/>
//         <ContactForm></ContactForm>
        
      
//     </div>
//   );
// }

// export default Home;
