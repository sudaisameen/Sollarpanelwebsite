import styles from "./Services.module.css";
import solarinstallation from "../assets/solarInstallation.mp4";
import arrow from "../assets/arrow.png";
import serviceprovider from "../assets/serviceprovider.mp4";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger, useGSAP);


const Services = () => {

    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 65%",
                end: "bottom 110%",
                scrub: 2,

            }
        });

        tl.fromTo(
            `.${styles.content1} h1, .${styles.content1} h3, .${styles.button1}, .${styles.contentparent} h5`,
            {
                y: 30,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.2,
            }, "anime");
        tl.fromTo(
            `.${styles.solarinstall}`,
            {
                x: 30,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.5,
            }, "anime");

        tl.fromTo(
            ` .${styles.box}`,
            {
                y: 40,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
            });

        tl.fromTo(
            `.${styles.ServiceContent} h1, .${styles.ServiceContent} h3`,
            {
                y: 30,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.4,
                stagger: 0.2,
            });


        tl.fromTo(
            `.${styles.serviceproof}`,
            {
                y: 40,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.2,
            });


    }, {
        scope: container
    });



    return (
        <>
            <div ref={container} className={styles.parentmain}>

                <div className={styles.contentparent}>

                    <div>
                        <h5>OUR SERVICES</h5>
                    </div>

                    <div className={styles.content1}>
                        <h1>Trust service,<span>for your</span></h1>
                        <h3>various needs</h3>

                    </div>

                    <div className={styles.button1}>
                        <a href="https://wa.me/923296970207?text=Hi%2C%20I%20am%20interested%20in%20your%20solar%20solutions."
                            target="_blank"
                            rel="noopener noreferrer"
                        ><button>Get in touch<img src={arrow} alt="arrow" /></button></a>
                    </div>

                    <div className={styles.container}>
                        <div className={styles.box}>
                            <div>
                                <h2>01</h2>
                            </div>
                            <div>
                                <h3>Solar panel for the home?</h3>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div>
                                <h2>02</h2>
                            </div>
                            <div>
                                <h3>Solar panel for industry?</h3>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div>
                                <h2>03</h2>
                            </div>
                            <div>
                                <h3>Solar panel for chargers?</h3>
                            </div>
                        </div>

                    </div>

                    <div className={styles.solarinstall}>
                        <video class={styles.rounded} src={solarinstallation} playsInline autoPlay loop muted preload="auto"  >

                        </video>
                    </div>

                    <div className={styles.ServiceContent}>
                        <div>
                            <h1>See how we solve</h1>
                            <h3><span>problems,</span>right on target</h3>

                        </div>
                        <div className={styles.serviceproof}>
                            <div className={styles.left}>

                                <div><h1>Solvex</h1> </div>
                                <div> <p>“At Solvex, we are committed to powering a brighter future through innovative solar energy solutions. Our high-quality solar panels help homes and businesses reduce energy costs, improve efficiency, and embrace a cleaner, more sustainable world.”</p>  </div>
                                <div className={styles.button2}> <a href="#Features"><button>Explore our solutions <img src={arrow} alt="arrow" /></button> </a> </div>
                                <div> <h5>Solvex — <span>Powering a Sustainable Future</span></h5> </div>
                            </div>
                            <div className={styles.right}>

                                <video className={styles.videoedit} src={serviceprovider} playsInline autoPlay loop muted preload="auto">

                                </video>

                            </div>

                        </div>
                    </div>



                </div>









            </div>




        </>
    )


}

export default Services