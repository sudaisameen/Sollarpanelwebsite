import styles from "./Features.module.css";
import F1 from "../assets/F1.png";
import F2 from "../assets/F2.png";
import F3 from "../assets/F3.png";
import F4 from "../assets/F4.png";
import F5 from "../assets/F5.png";
import F6 from "../assets/F6.png";
import F1img from "../assets/F1img.jpg";
import F2img from "../assets/F2img.jpg";
import F3img from "../assets/F3img.jpg";
import F4img from "../assets/F4img.jpg";
import F5img from "../assets/F5img.jpg";
import F6img from "../assets/F6img.jpg";
import icon7 from "../assets/icon7.png";
import icon8 from "../assets/icon8.png";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger, useGSAP);

const Features = () => {

    const container = useRef(null);


    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 65%",
                end: "bottom 94%",
                scrub: 2,

            }
        });

        tl.fromTo(
            `.${styles.contentpart1} h5, .${styles.contentpart1} h2, .${styles.contentpart1} p`,
            {
                y: 30,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
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
        tl.fromTo(
            ` .${styles.content1} h1, .${styles.content1} h3, .${styles.para} p `,
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

        tl.fromTo(
            ` .${styles.feature}`,
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
                <div className={styles.contentpart1}>
                    <div>
                        <h5>OUR SOLAR SOLUTIONS</h5>
                    </div>
                    <div>
                        <h2>Everything You Need for a Cleaner, Brighter Tomorrow.</h2>
                    </div>
                    <div>
                        <p>From high-quality panels to long-term support, Solvex offers complete solar solutions for a more efficient and sustainable future </p>
                    </div>
                </div>

                <div className={styles.container}>
                    <div className={styles.box}>
                        <div className={styles.left}>
                            <img src={F1img} alt="sollar" />
                        </div>
                        <div className={styles.right}>
                            <div>
                                <img src={F1} alt="F1" />
                            </div>
                            <div>
                                <h3>High-Efficiency Panels</h3>
                            </div>
                            <div>
                                <p>Convert more sunlight into usable electricity with advanced solar technology and premium panels.</p>
                            </div>

                        </div>

                    </div>
                    <div className={styles.box}>
                        <div className={styles.left}>
                            <img src={F2img} alt="sollar" />
                        </div>
                        <div className={styles.right}>
                            <div>
                                <img src={F2} alt="F1" />
                            </div>
                            <div>
                                <h3>Custom Energy Solutions</h3>
                            </div>
                            <div>
                                <p>Tailored solar solutions for residential, commercial and industrial energy requirements.</p>
                            </div>

                        </div>

                    </div>
                    <div className={styles.box}>
                        <div className={styles.left}>
                            <img src={F3img} alt="sollar" />
                        </div>
                        <div className={styles.right}>
                            <div>
                                <img src={F3} alt="F1" />
                            </div>
                            <div>
                                <h3>Professional Installation</h3>
                            </div>
                            <div>
                                <p>Expert planning, safe installation and strict adherence to industry standards.</p>
                            </div>

                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.left}>
                            <img src={F4img} alt="sollar" />
                        </div>
                        <div className={styles.right}>
                            <div>
                                <img src={F4} alt="F1" />
                            </div>
                            <div>
                                <h3>Smart Energy Monitoring</h3>
                            </div>
                            <div>
                                <p>Track your energy production and system performance in real time.</p>
                            </div>

                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.left}>
                            <img src={F5img} alt="sollar" />
                        </div>
                        <div className={styles.right}>
                            <div>
                                <img src={F5} alt="F1" />
                            </div>
                            <div>
                                <h3>Sustainable Power</h3>
                            </div>
                            <div>
                                <p>Reduce your carbon footprint and support a cleaner, greener planet.</p>
                            </div>

                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.left}>
                            <img src={F6img} alt="sollar" />
                        </div>
                        <div className={styles.right}>
                            <div>
                                <img src={F6} alt="F1" />
                            </div>
                            <div>
                                <h3>Reliable Support</h3>
                            </div>
                            <div>
                                <p>Ongoing guidance and maintenance to keep your system running at its best.</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className={styles.parentheading}>
                    <div className={styles.content1}>
                        <h1>Focus on quality,<span>we</span></h1>
                        <h3>maintain customer trust</h3>
                    </div>
                    <div className={styles.para}>
                        <p>We ensure that every installation we build has strict quality</p>
                        <p>checks. Sustainable solutions for an environmentally friendly and</p>
                        <p>renewable future.</p>
                    </div>
                </div>

                <div className={styles.featuresGrid}>
                    <div className={styles.feature}>
                        <div className={styles.circle}>
                            <img src={icon7} alt="antiirus" />
                        </div>
                        <h3>Quality Assurance</h3>
                        <p>High-quality solar panels for reliable performance.</p>
                    </div>

                    <div className={styles.feature}>
                        <div className={styles.circle}>
                            <img src={F1} alt="sunsolar" />
                        </div>
                        <h3>Solar Technology</h3>
                        <p>Advanced technology for better energy efficiency.</p>
                    </div>

                    <div className={styles.feature}>
                        <div className={styles.circle}>
                            <img src={icon8} alt="energy" />
                        </div>
                        <h3>Energy Monitoring</h3>
                        <p>Track energy production in real time.</p>
                    </div>

                    <div className={styles.feature}>
                        <div className={styles.circle}>
                            <img src={F6} alt="support" />
                        </div>
                        <h3>Customer Support</h3>
                        <p>Technical guidance and maintenance support.</p>
                    </div>
                </div>



            </div>



        </>
    )


}

export default Features