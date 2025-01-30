import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { motion } from "framer-motion";
import { useTheme } from '@mui/material/styles';







const ProductCrad = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));



    return (
        <>
            <Box>
                <Typography style={{
                    fontFamily: "Outfit",
                    fontWeight: 700,
                    color: "#262626",
                    textAlign: "center",
                    margin: "40px 0px 0px 0px"
                }}

                    sx={{
                        fontSize: { xs: "22px", md: "50px" },
                        lineHeight: { xs: "30px", md: "63px" },
                    }}
                >
                    Our Kratom Products
                </Typography>
                <Typography style={{
                    fontFamily: "Outfit",
                    fontWeight: 400,
                    fontSize: "19px",
                    lineHeight: "26px",
                    color: "#636363",
                    textAlign: "center",
                    margin: "10px 0px 40px 0px"
                }}

                    sx={{

                        whiteSpace: { xs: "pre-line", md: "pre-line" }
                    }}

                >
                    {isMobile ? " Unlock the full potential of 7 O Moons the\n purests and most powerful the 7-hydroxy \n mitragyni product on the market.Crafted\n for those who demand the excellence, this \n premium formula deliver fast-acting, long \n lasting results. Say goodbye  the imitators choose the gold standard in potency and performance."
                        : "Unlock the full potential of 7OMoons, the purest and most powerful 7-hydroxymitragynine product on the \n market. Crafted for those  who demand excellence, this premium formula delivers fast-acting,\n  long-lasting results.  Say goodbye to  imitators—choose the gold standard \n in potency and performance."}


                </Typography>
            </Box>

            {/* Single Row with Three Grids */}
            <Box>
                <Grid
                    container
                    spacing={2}
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexWrap: { xs: 'wrap', md: 'nowrap' },
                        padding: { xs: '20px', md: '20px 0' }
                    }}
                >
                    {/* First Grid */}
                    <Grid
                        item
                        xs={12}
                        md={4}
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
                            flexDirection: { xs: 'column', md: 'column' },
                            gap: { xs: '20px', md: '20px' },
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <motion.img
                                src="/image/Group 499.svg"
                                style={{
                                    width: "100%",
                                    maxWidth: "450px",
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
                                alt="Product 1"
                            />
                            <motion.img
                                src="/image/Group 502.svg"
                                style={{
                                    width: "100%",
                                    maxWidth: "450px",
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
                        </Box>
                    </Grid>

                    {/* Second Grid */}
                    <Grid
                        item
                        xs={12}
                        md={4}
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
                            flexDirection: { xs: 'column', md: 'column' },
                            gap: { xs: '20px', md: '20px' },
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <motion.img
                                src="/image/Group 500.svg"
                                style={{
                                    width: "100%",
                                    maxWidth: "450px",
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
                                alt="Product 3"
                            />
                            <motion.img
                                src="/image/Group 503.svg"
                                style={{
                                    width: "100%",
                                    maxWidth: "450px",
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
                                alt="Product 4"
                            />
                        </Box>
                    </Grid>

                    {/* Third Grid */}
                    <Grid
                        item
                        xs={12}
                        md={4}
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
                            flexDirection: { xs: 'column', md: 'column' },
                            gap: { xs: '20px', md: '20px' },
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <motion.img
                                src="/image/Group 501.svg"
                                style={{
                                    width: "100%",
                                    maxWidth: "450px",
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
                                alt="Product 5"
                            />
                            <motion.img
                                src="/image/Group 504.svg"
                                style={{
                                    width: "100%",
                                    maxWidth: "450px",
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