import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { motion } from "framer-motion";

const QualityCard = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            sx={{
                backgroundImage: `url('/image/Qualitybackground.svg')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: 'auto',
                width: '100%',
                mt:"70px"
            }}
        >
            <Grid
                container
                spacing={2}
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: "50px"
                }}
            >
                <Grid
                    item
                    xs={12}
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
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <img
                        src="/image/Kratom.svg"
                        style={{
                            width: '100%',
                            maxWidth: '400px',
                            height: 'auto',
                            margin: isMobile ? '20px 0' : '60px 0 40px 0'
                        }}
                        alt="Kratom Product"
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        textAlign: { xs: 'center', md: 'left' }
                    }}
                >
                    <Box>
                        <motion.div
                            initial={{ y: -100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 50, damping: 10 }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: "Outfit",
                                    fontWeight: 700,
                                    fontSize: { xs: '30px', sm: '40px', md: '50px' },
                                    lineHeight: { xs: '40px', sm: '50px', md: '63px' },
                                    color: "#262626",
                                    mb: 1,
                                    px: { xs: 2, md: 0 }
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
                                sx={{
                                    fontFamily: "Outfit",
                                    fontWeight: 400,
                                    fontSize: { xs: '14px', sm: '16px', md: '18px' },
                                    lineHeight: { xs: '22px', sm: '24px', md: '28px' },
                                    color: "#262626",
                                    // px: { xs: 2, md: 0 },
                                    whiteSpace: { xs: "pre-line", md: "pre-line" },
                                    mb: { xs: 2, md: 0 }
                                }}
                            >
                                {isMobile 
                                    ? "At 7OMoons, we are committed to delivering a consistent,\n high-quality product you can trust batch after batch. Our meticulous process include  comprehensive testing at every production stage. From initial material assessments to the rigorous checks of the first tablets off the press, routine of samplings through production, and final testing of the last tablets, every step is designeds to ensure excellences. Each sample is carefully analyzed by independent ISO-certified testing lab, guaranteeing the reliability and purity  products. With advanced precision-mixing equipment and state-of-the-art tablet presses, we  unparalleled consistency in every tablet. Experience quality you can rely on with 7OMoons."
                                    : "At 7OMoons, we are committed to delivering a consistent, high-quality product \nyou can trust—batch after batch. Our meticulous process includes comprehensive \ntesting at every production stage. From initial material assessments to rigorous \nchecks of the first tablets off the press, routine sampling throughout production, \nand final testing of the last tablets, every step is designed to ensure excellence.\nEach sample is carefully analyzed by an independent ISO-certified testing lab, \nguaranteeing the reliability and purity of our products. With advanced \nprecision-mixing equipment and state-of-the-art tablet presses, we ensure \nunparalleled consistency in every tablet. Experience quality you can rely on with 7OMoons."
                                }
                               
                            </Typography>
                        </motion.div>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default QualityCard;
