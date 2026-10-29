import styles from "./Home.module.css";
import solarPanel from "../assets/solarPanel.mp4";
import arrow from "../assets/arrow.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useRef } from "react";



const Home = () => {

    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            `p, .${styles.h1ss} h1, .${styles.h4ss} h4, .${styles.sectionContent2}  `,
            {
                y: -30,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                delay:1.1,
                stagger: 0.2,
            });


    }, {
        scope: container
    })


    return (
        <>

            <div ref={container} className={styles.main}>


                <video src={solarPanel} playsInline autoPlay loop muted preload="auto" />

                <div className={styles.sectionContent}>
                    <div className={styles.para}>
                        <p>#1 Energy provider in the world</p>

                    </div>
                    <div className={styles.h1ss}>
                        <h1>New Energy</h1>
                        <h1>for the future</h1>

                    </div>
                    <div className={styles.h4ss}>
                        <h4>Get in touch <img src={arrow} alt="arrow" /> </h4>
                        <h4>Our Services <img src={arrow} alt="arrow" /> </h4>

                    </div>
                </div>

                <div className={styles.sectionContent2}>
                    <div>
                        <h1>6 mil</h1>
                        <p>The company's</p>
                        <p>annual net income</p>

                    </div>
                    <div>
                        <h1>315</h1>
                        <p>Project completed</p>
                        <p>worldwide</p>

                    </div>
                    <div>
                        <h1>120K</h1>
                        <p>Employees work in all</p>
                        <p>parts of the world</p>

                    </div>
                </div>


            </div>




        </>
    )

}


export default Home