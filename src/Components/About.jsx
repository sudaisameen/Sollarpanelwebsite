import styles from "./About.module.css";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import Solvex from "../assets/Solvex.jpg";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger, useGSAP);

const About = () => {

    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 55%",
                end: "bottom 99%",
                scrub: 2,

            }
        });

        tl.fromTo(
            `.${styles.left} h5,.${styles.left} h2,.${styles.left} h1,.${styles.left} p`,
            {
                x: -30,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.2,
            }, "anime");

        tl.fromTo(
            `.${styles.right} img`,
            {
                x: 50,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.2,
            }, "anime");

        tl.fromTo(
            `.${styles.contentmain} h1, .${styles.contentmain} h3`,
            {
                x: -30,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.2,
            });
        tl.fromTo(
            ` .${styles.box}`,
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
            });






    }, {
        scope: container
    });

    return (
        <>
            <div ref={container} className={styles.parentdiv}>

                <div>

                    <div className={styles.content1}>
                        <div className={styles.left}>
                            <div>
                                <h5>ABOUT US</h5>
                            </div>
                            <div>
                                <h1>Powering a</h1>
                                <h2>Cleaner, Brighter</h2>
                                <h1>Tomorrow</h1>
                            </div>
                            <div>
                                <p>At Solvex, we are more than just a solar panel company —</p>
                                <p><span>we are a team of innovators, engineers and sustainability</span></p>
                                <p>advocates, working together to bring clean, renewable</p>
                                <p>energy to homes, businesses and communities.</p>

                            </div>

                        </div>
                        <div className={styles.right}>
                            <img src={Solvex} alt="solvex" />

                        </div>

                    </div>


                    <div className={styles.contentmain}>
                        <div>
                            <h1>We offer quality,<span>with the</span></h1>
                            <h3>best materials and services</h3>
                        </div>

                    </div>

                    <div className={styles.container}>
                        <div className={styles.box}>
                            <div>
                                <img src={icon1} alt="layerd tech" />
                            </div>
                            <div>
                                <h2>Layered Security</h2>
                            </div>
                            <div>
                                <p>With layerd Security, we ensure the safety of every unit we provide.</p>
                            </div>

                        </div>
                        <div className={styles.box}>

                            <div>
                                <img src={icon2} alt="layerd tech" />
                            </div>
                            <div>
                                <h2>Quality control of each part</h2>
                            </div>
                            <div>
                                <p>Each unit you send is checked carefully for every detail.</p>
                            </div>


                        </div>
                        <div className={styles.box}>

                            <div>
                                <img src={icon3} alt="layerd tech" />
                            </div>
                            <div>
                                <h2>Reliable customer service</h2>
                            </div>
                            <div>
                                <p>Our customer service is available 24 hours a week, with qualified people.</p>
                            </div>

                        </div>
                        <div className={styles.box}>

                            <div>
                                <img src={icon4} alt="layerd tech" />
                            </div>
                            <div>
                                <h2>Maintenance manual book</h2>
                            </div>
                            <div>
                                <p>We provide a guidebook that can be used to ensure maximum care.</p>
                            </div>

                        </div>
                        <div className={styles.box}>

                            <div>
                                <img src={icon5} alt="layerd tech" />
                            </div>
                            <div>
                                <h2>Delivered safety</h2>
                            </div>
                            <div>
                                <p>Every unit we send arrives safely and quickly, without any obstacles or drama.</p>
                            </div>

                        </div>
                        <div className={styles.box}>

                            <div>
                                <img src={icon6} alt="layerd tech" />
                            </div>
                            <div>
                                <h2>Based on artificial intelligence</h2>
                            </div>
                            <div>
                                <p>You can control and view each unit from your phone, it's very easy to use.</p>
                            </div>

                        </div>
                    </div>


                </div>

            </div>



        </>
    )


}

export default About