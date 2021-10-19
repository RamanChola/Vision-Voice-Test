import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../css/aural_test.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useHistory } from "react-router";
import { useGlobalContext } from "../../reducer/context";

const AuralTest = (props) => {
    const history = useHistory();
    const { email } = useGlobalContext();

    const handleStartTest = (e) => {
        e.preventDefault();
        if (!email) {
        history.push("/loginreq");
        return;
        }
        history.push("/auraltest/aural-survey");
    }
    useEffect(() => {
        document.title = "Aural Test ";
    });
    
    return (
        <div className='instt-cont'>
            <div className="carus2">
            <Carousel showArrows={false}infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={2000}>
          
                <div className="carus">
                    <img src="https://images.unsplash.com/photo-1514885073919-368d69513883?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"  />
                   
                </div>
                <div className="carus">
                    <img src="https://images.unsplash.com/photo-1596088728260-08a654466a00?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"  />
                   
                </div>
                <div className="carus">
                    <img src="https://images.unsplash.com/photo-1626208763281-e03339e47442?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=858&q=80" />
                    
                </div>
                <div className="carus">
                    <img src="https://images.unsplash.com/photo-1519583916722-289d542b19a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" />
                    
                </div>
              
            </Carousel>
        </div>



            <h2 style={{ textAlign: "center" }}> Instructions</h2>
            <h4 style={{ textAlign: "center" }}>
                We will be taking the test in 3 parts:
            </h4>
            <p>
                {" "}
                <li>
                    In the first part of the test, we will ask you a number of
                    questions about your ability to hear in challenging
                    listening situations
                </li>
                <li>
                    {" "}
                    The second part of the test determines how well you can hear
                    at different frequency levels.
                </li>
                <li>
                    {" "}
                    You will hear a number of tones at different pitches and are
                    asked to adjust the volume until you can hear the sound
                    After that, you will be presented with your hearing test
                    result .
                </li>
            </p>
            <h4 style={{ textAlign: "center" }}>
                Some guidelines for the test:
            </h4>
            <p>
                <li>
                    Make sure you are in a quiet area before you start the
                    hearing test
                </li>
                <li>
                    {" "}
                    Use Headphones instead of built-in speakers(to ensure better
                    results) and set your device volume to 50%.
                </li>
            </p>
            <br />
            <h4 style={{ textAlign: "center" }}>
                {" "}
                Please select the type of audio output you are using
            </h4>
            <div className='row'>
                <div className='redirect-btn btn-btn'>
                    {" "}
                    <div onClick={handleStartTest} className='red-link'>
                        I AM USING HEADPHONES
                    </div>
                </div>
                <div className='redirect-btn btn-btn'>
                    <div onClick={handleStartTest} className='red-link'>
                        I AM USING SPEAKERS
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuralTest;
