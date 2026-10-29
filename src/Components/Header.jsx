import React, { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";
import arrow from "../assets/arrow.png";
import menublack from "../assets/menublack.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);

    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            `.${styles.navbar} h3, .${styles.lists} .${styles.navItem},  .${styles.navbar} button,  .${styles.menu} img`,
            {
                y: -30,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                delay:0.2,
                stagger: 0.2,
            });




    }, {
        scope: container
    })


    // Close sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                // Check if click was not on the menu button itself to prevent immediate re-toggle
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    // Prevent background scrolling when sidebar is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    return (
        <>
            <div ref={container} className={styles.parentdiv}>
                <div className={styles.navbar}>
                    <div>
                        <h3>
                            Solve<span>x</span>
                        </h3>
                    </div>

                    <div className={styles.lists}>
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

                    <div>
                        <a
                            href="https://wa.me/923296970207?text=Hi%2C%20I%20am%20interested%20in%20your%20solar%20solutions."
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button>
                                Get in touch <img src={arrow} alt="arrow" />
                            </button>
                        </a>
                    </div>

                    {/* Hamburger Menu Button */}
                    <div
                        className={styles.menu}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        <img src={menublack} alt="menu" />
                    </div>
                </div>
            </div>

            {/* Backdrop Overlay (Click outside to close) */}
            <div
                className={`${styles.overlay} ${isOpen ? styles.overlayActive : ""}`}
                onClick={() => setIsOpen(false)}
            />

            {/* 60% Width Mobile Sidebar Drawer */}
            <div
                ref={sidebarRef}
                className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ""}`}
            >
                <div className={styles.sidebarHeader}>
                    <h3>
                        Solve<span>x</span>
                    </h3>
                    {/* Close Button Inside Sidebar */}
                    <button
                        className={styles.closeBtn}
                        onClick={() => setIsOpen(false)}
                    >
                        &times;
                    </button>
                </div>

                <ul className={styles.sidebarLinks} onClick={() => setIsOpen(false)}>
                    <li>
                        <a href="#Home">Home</a>
                    </li>
                    <li>
                        <a href="#About">About Us</a>
                    </li>
                    <li>
                        <a href="#Services">Services</a>
                    </li>
                    <li>
                        <a href="#Features">Features</a>
                    </li>
                    <li>
                        <a href="#Contact">Contact</a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Header;