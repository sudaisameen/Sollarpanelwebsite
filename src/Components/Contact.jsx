import styles from "./Contact.module.css";
import arrowblack from "../assets/arrowblack.png";
import greentick from "../assets/Greentick.png";
import linkedin from "../assets/linkedin.png";
import upwork from "../assets/upwork.png";
import whatsapp from "../assets/whatsapp.png";
import githubfill from "../assets/githubfill.png";
import copyright from "../assets/copyright.png";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger, useGSAP);

const Contact = () => {

    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });

        tl.fromTo(
            `.${styles.left} h1, .${styles.left} h2, .${styles.right} p`,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power2.out" }
        )

            .fromTo(
                `.${styles.h5align}, .${styles.right} button`,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, stagger: 0.2, ease: "power2.out" },
                "-=0.4"
            )

            .fromTo(
                `.${styles.footerparent} h3 ,ul li, .${styles.footercopyright} h4, hr , .${styles.imgssfooter} img`,
                { y: -20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7, stagger: 0.2, ease: "power2.out" },
                "-=0.3"
            );


    }, {
        scope: container
    });




    return (
        <>
            <div ref={container} className={styles.parentdiv}>

                <div className={styles.contentparent}>
                    <div className={styles.left}>
                        <div>
                            <h1>It's time to support zero pollution,</h1>
                            <h2>with renewable resources</h2>
                        </div>
                        <div className={styles.h5align}>
                            <img src={greentick} alt="greentick" /><h5>Experienced for more than 10 years</h5>
                            <img src={greentick} alt="greentick" /><h5>Support for the latest technology</h5>
                        </div>

                    </div>
                    <div className={styles.right}>
                        <div>
                            <p>By increasing the effectiveness and efficiency of electricity</p>
                            <p>use, the use of renewable resources is very profitable for all</p>
                            <p>industrial services.</p>
                        </div>
                        <div>
                            <a href="https://wa.me/923296970207?text=Hi%2C%20I%20am%20interested%20in%20your%20solar%20solutions."
                                target="_blank"
                                rel="noopener noreferrer"
                            ><button>Get in touch<img src={arrowblack} alt="arrow" /></button></a>
                        </div>

                    </div>
                </div>

                <div className={styles.footermain}>
                    <div className={styles.footerparent}>
                        <div>
                            <h3>Solvex</h3>
                        </div>
                        <div>
                            <ul>
                                <li className={styles.navItem}>
                                    <a href="#Home">Home</a>
                                </li>
                                <li className={styles.navItem}>
                                    <a href="#About">About Us</a>
                                </li>
                                <li className={styles.navItem}>
                                    <a href="#Services">Services</a>
                                </li>
                                <li className={styles.navItem}>
                                    <a href="#Features">Features</a>
                                </li>
                                <li className={styles.navItem}>
                                    <a href="#Contact">Contact</a>
                                </li>

                            </ul>
                        </div>

                        <div className={styles.imgssfooter}>
                            <div>
                                <a href="https://www.linkedin.com/in/sudais-ameen-283249337?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                ><img src={linkedin} alt="linkedin" /></a>
                            </div>
                            <div>
                                <a href="https://www.upwork.com/freelancers/~010cc35ade3e5532bc?mp_source=share"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                ><img src={upwork} alt="upwork" /></a>
                            </div>
                            <div>
                                <a href="https://github.com/sudaisameen"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                ><img src={githubfill} alt="Github" /></a>
                            </div>
                            <div>
                                <a href="https://wa.me/923296970207?text=Hi%2C%20I%20would%20like%20to%20collaborate%20with%20you."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                ><img src={whatsapp} alt="Whatsapp" /></a>
                            </div>

                        </div>

                    </div>

                    <div>
                        <hr />
                    </div>


                    <div className={styles.footercopyright}>
                        <h4> <img src={copyright} alt="copyright" />2026 Solvex Inc. All rights reserved</h4>
                        <h4>Terms of Service <span className={styles.spaa}>Privacy Policy</span></h4>

                    </div>
                </div>


            </div>




        </>
    )


}

export default Contact