import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { motion } from "framer-motion";

const QualityCard = () => {
    return (
        <>
            <Box
                sx={{
                    backgroundImage: `url('/image/Qualitybackground.svg')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: 'auto',
                    width: '100%',
                    mt: "60px"
                }}
            >
                <Box>
                    <Grid
                        container
                        sx={{
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                            padding: { xs: '20px', },
                            flexWrap: 'nowrap',
                            margin: "0px 0px 0px 0px"
                        }}
                    >
                        <Grid
                            item
                            xs={3}
                            md={6}
                            component={motion.div}
                            initial={{ x: -200, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{
                                duration: 0.8,
                                type: "spring",
                                stiffness: 50,
                                damping: 10
                            }}
                        >
                            <img
                                src="/image/Kratom.svg"
                                style={{
                                    width: "100%",
                                    maxWidth: "400px",
                                    height: "auto",
                                    margin: "60px 0px 40px 160px"
                                }}
                                alt="Boy"
                            />
                        </Grid>
                        <Grid
                            item
                            xs={3}
                            md={6}
                        >
                            <Box>
                                <motion.div
                                    initial={{ y: -100, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 50, damping: 10 }}
                                >
                                    <Typography
                                        style={{
                                            fontFamily: "Outfit",
                                            fontWeight: 700,
                                            fontSize: "50px",
                                            lineHeight: "63px",
                                            color: "#262626",
                                            margin: "10px 200px 0px 0px"
                                        }}
                                    >
                                        Quality you can count on!
                                    </Typography>
                                </motion.div>
                                <motion.div
                                    initial={{ y: 100, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 50, damping: 10 }}
                                >
                                    <Typography
                                        style={{
                                            fontFamily: "Outfit",
                                            fontWeight: 400,
                                            fontSize: "18px",
                                            lineHeight: "28px",
                                            color: "#262626",
                                            margin: "10px 0px 0px 0px"
                                        }}
                                    >
                                        At 7OMoons, we are committed to delivering a consistent, high-quality product <br/> you can trust—batch after batch. Our meticulous process includes comprehensive <br/> testing at every production stage. From initial material assessments to rigorous <br/> checks of the first tablets off the press, routine sampling throughout production, <br/> and final testing of the last tablets, every step is designed to ensure excellence.<br/>
                                        Each sample is carefully analyzed by an independent ISO-certified testing lab, <br/> guaranteeing the reliability and purity of our products. With advanced <br/> precision-mixing equipment and state-of-the-art tablet presses, we ensure <br/> unparalleled consistency in every tablet. Experience quality you can rely on with 7OMoons.

                                    </Typography>
                                </motion.div>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default QualityCard;
