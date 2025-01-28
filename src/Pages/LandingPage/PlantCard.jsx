import React, { useRef, useState, useEffect } from 'react';
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { motion } from "framer-motion";

const PlantCard = () => {
    return (
        <>
            <Box>
                <Grid
                    container
                    spacing={2}
                    mt={5}
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: { xs: '20px', md: '40px 0' },
                        flexWrap: 'nowrap',
                        gap: "70px"
                    }}
                >
                    <Grid
                        item
                        xs={3}
                        md={5}
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
                            src="/image/PlantCard.svg"
                            style={{
                                width: "100%",
                                maxWidth: "350px",
                                height: "auto"
                            }}
                            alt="Boy"
                        />
                    </Grid>
                    <Grid
                        item
                        xs={3}
                        md={7}
                    >
                        <Box
                            component={motion.div}
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
                                    margin: "0px 0px 0px 0px"
                                }}
                            >
                                A Plant Based Botanical <br /> Extract
                            </Typography>
                        </Box>
                        <Box
                            component={motion.div}
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 50, damping: 10 }}
                        >
                            <Typography style={{
                                fontFamily: "Outfit",
                                fontWeight: "400",
                                fontSize: "20px",
                                lineHeight: "28px",
                                color: "#636363",
                                margin: "0px 0px 0px 0px"
                            }}>
                                7OMoons is a terpenoid indole alkaloid derived from the Mitragyna <br/> speciosa plant, commonly known as Kratom. First identified in 1994,<br/> 7OMoons is a natural compound extracted from mitragynine found  <br/>in Kratom leaves. It is recognized as an oxidized derivative <br/> and an active metabolite of mitragynine.<br/>
                                What sets 7OMoons apart is its exceptional potency in binding to <br/> opioid receptors. Research indicates that while mitragynine <br/> also binds to these receptors, 7OMoons demonstrates significantly <br/> greater affinity, making it a key contributor to the analgesic <br/>properties associated with mitragynine.
                                7OMoons represents a pinnacle <br/> of natural innovation, harnessing the power of this remarkable metabolite <br/> to deliver enhanced efficacy and reliable results.

                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default PlantCard;