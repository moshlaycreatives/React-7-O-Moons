import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { motion } from "framer-motion";

const ProductCrad = () => {
    return (
        <>
            <Box>
                <Typography style={{
                    fontFamily: "Outfit",
                    fontWeight: 700,
                    fontSize: "50px",
                    lineHeight: "63px",
                    color: "#262626",
                    textAlign: "center",
                    margin:"40px 0px 0px 0px"
                }}>
                    Our Kratom Products
                </Typography>
                <Typography style={{
                    fontFamily: "Outfit",
                    fontWeight: 400,
                    fontSize: "19px",
                    lineHeight: "26px",
                    color: "#636363",
                    textAlign: "center",
                    margin:"0px 0px 40px 0px"
                }}>
                 Unlock the full potential of 7OMoons, the purest and most powerful 7-hydroxymitragynine product on the <br/>market. Crafted for those  who demand excellence, this premium formula delivers fast-acting,<br/> long-lasting results.  Say goodbye to  imitators—choose the gold standard <br/>in potency and performance.

                </Typography>
            </Box>

            <Box>
                <Grid
                    container
                    spacing={2}
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        padding: { xs: '20px', md: '20px 0' },
                        flexWrap: 'nowrap'
                    }}
                >
                    <Grid
                        item
                        xs={3}
                        md={6}
                        component={motion.div}
                        initial={{ y: -200, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ 
                            duration: 0.8,
                            type: "spring",
                            stiffness: 50,
                            damping: 10
                        }}
                    >
                        <Box sx={{
                            display: 'flex',
                            gap: { xs: '10px', md: '20px' },
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <motion.img
                                src="/image/Group 499.svg"
                                style={{
                                    width: "100%",
                                    maxWidth: "350px",
                                    height: "auto"
                                }}
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: 0.2,
                                    type: "spring",
                                    stiffness: 50,
                                    damping: 10
                                }}
                                alt="Product 1"
                            />
                            <motion.img
                                src="/image/Group 500.svg"
                                style={{
                                    width: "100%",
                                    maxWidth: "350px",
                                    height: "auto"
                                }}
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: 0.4,
                                    type: "spring",
                                    stiffness: 50,
                                    damping: 10
                                }}
                                alt="Product 2"
                            />
                            <motion.img
                                src="/image/Group 501.svg"
                                style={{
                                    width: "100%",
                                    maxWidth: "350px",
                                    height: "auto"
                                }}
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: 0.6,
                                    type: "spring",
                                    stiffness: 50,
                                    damping: 10
                                }}
                                alt="Product 3"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            
            <Box>
                <Grid
                    container
                    spacing={2}
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        flexWrap: 'nowrap'
                    }}
                >
                    <Grid
                        item
                        xs={3}
                        md={6}
                        component={motion.div}
                        initial={{ y: 200, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ 
                            duration: 0.8,
                            type: "spring",
                            stiffness: 50,
                            damping: 10
                        }}
                    >
                        <Box sx={{
                            display: 'flex',
                            gap: { xs: '10px', md: '20px' },
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <motion.img
                                src="/image/Group 502.svg"
                                style={{
                                    width: "100%",
                                    maxWidth: "350px",
                                    height: "auto"
                                }}
                                initial={{ y: -100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: 0.2,
                                    type: "spring",
                                    stiffness: 50,
                                    damping: 10
                                }}
                                alt="Product 4"
                            />
                            <motion.img
                                src="/image/Group 503.svg"
                                style={{
                                    width: "100%",
                                    maxWidth: "350px",
                                    height: "auto"
                                }}
                                initial={{ y: -100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: 0.4,
                                    type: "spring",
                                    stiffness: 50,
                                    damping: 10
                                }}
                                alt="Product 5"
                            />
                            <motion.img
                                src="/image/Group 504.svg"
                                style={{
                                    width: "100%",
                                    maxWidth: "350px",
                                    height: "auto"
                                }}
                                initial={{ y: -100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: 0.6,
                                    type: "spring",
                                    stiffness: 50,
                                    damping: 10
                                }}
                                alt="Product 6"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default ProductCrad;