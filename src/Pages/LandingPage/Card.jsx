import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { motion, useInView } from "framer-motion";







const Card = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {
        once: false,  // Allow re-triggering when scrolling
        amount: 0.1   // Trigger when 10% of the section is visible
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const cardData = [
        {
            image: "/image/card1.svg",
            title: "Sustainability",
            description: "Committed to eco-friendly practices, <br/> ensuring a greener future <br/>with every product."
        },
        {
            image: "/image/card2.svg",
            title: "Laboratory Tests",
            description: "Each batch undergoes rigorous testing by <br/> accredited labs for purity,  potency, <br/> and safety"
        },
        {
            image: "/image/card3.svg",
            title: "Secure Payment",
            description: "Shop with confidence—our secure payment <br/> system protects your information every <br/> step of the way"
        },
        {
            image: "/image/card4.svg",
            title: "Highest Quality",
            description: "Crafted with precision, our products  <br/>meet the highest standards of quality <br/> and consistency"
        }
    ];

    // Use useEffect to update visibility based on InView
    useEffect(() => {
        setIsVisible(isInView);
    }, [isInView]);


    return (
        <>
            <Box
                ref={sectionRef}
                id="card-section"
                sx={{
                    backgroundImage: `url('/image/CradBackground.svg')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '400px',
                    width: '100%',
                    mt: "60px",
                    py: 4
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <Typography sx={{
                        fontFamily: "Outfit",
                        fontWeight: 700,
                        fontSize: "50px",
                        lineHeight: "63px",
                        color: "#0F75BC",
                        textAlign: "center",
                        mb: 4
                    }}>
                        Feel the Differnce, As Nature Intended
                    </Typography>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    <Grid
                        container
                        spacing={3}
                        justifyContent="center"
                        alignItems="stretch"
                    >
                        {cardData.map((card, index) => (
                            <Grid
                                key={index}
                                item
                                xs={12}
                                sm={6}
                                md={3}
                            >
                                <motion.div
                                    variants={cardVariants}
                                    style={{ height: '100%' }}
                                >
                                    <Box
                                        sx={{
                                            backgroundColor: "#0F75BC",
                                            padding: "30px",
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            textAlign: 'center'
                                        }}
                                    >
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            style={{
                                                maxWidth: '100%',
                                                marginBottom: '15px'
                                            }}
                                        />

                                        <Typography sx={{
                                            fontFamily: "Outfit",
                                            fontWeight: 700,
                                            fontSize: "20px",
                                            lineHeight: "25px",
                                            color: "#FFFFFF",
                                            mb: 2
                                        }}>
                                            {card.title}
                                        </Typography>

                                        <Typography
                                            sx={{
                                                fontFamily: "Outfit",
                                                fontWeight: 300,
                                                fontSize: "16px",
                                                lineHeight: "22px",
                                                color: "#FFFFFF"
                                            }}
                                            dangerouslySetInnerHTML={{ __html: card.description }}
                                        />
                                    </Box>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </Box>



        



        </>
    )
}

export default Card;