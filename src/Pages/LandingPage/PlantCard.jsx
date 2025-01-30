import React from 'react';
import { Box, Typography, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { motion } from "framer-motion";
import { useTheme } from '@mui/material/styles';

const PlantCard = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box>
            <Grid
                container
                spacing={2}
                mt={5}
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: { xs: '20px', md: '40px 0' },
                    gap: { xs: '20px', md: '70px' }
                }}
            >
                <Grid
                    item
                    xs={12}
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
                        alt="Plant"
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
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
                            sx={{
                                fontFamily: "Outfit",
                                fontWeight: 700,
                                fontSize: { xs: "22px", md: "50px" },
                                lineHeight: { xs: "30px", md: "63px" },
                                margin: "0px 0px 0px 0px",
                                textAlign: { xs: "center", md: "left" },
                                whiteSpace: { xs: "normal", md: "pre-line" }
                            }}
                        >
                            {isMobile
                                ? "A Plant Based Botanical Extract"
                                : "A Plant Based Botanical \n  Extract"}
                        </Typography>
                    </Box>
                    <Box
                        component={motion.div}
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 50, damping: 10 }}
                    >
                        <Typography
                            component="div"
                            sx={{
                                fontFamily: "Outfit",
                                fontWeight: "400",
                                fontSize: { xs: "14px", md: "20px" },
                                lineHeight: { xs: "24px", md: "28px" },
                                color: "#636363",
                                margin: {xs: "10px 0px 0px 0px", md :"0px"},
                                textAlign: { xs: "", md: "left" },
                                whiteSpace: { xs: "normal", md: "pre-line" }
                            }}
                        >
                            {isMobile
                                ? "7OMoons is a terpenoid indole alkaloid derived \n from the  Mitragyna speciosa plant, commonly known as Kratom. First identified in 1994, 7OMoons is a natural compound extracted from mitragynine found in Kratom leaves. It is recognized as an oxidized derivative and an active metabolite of mitragynine. What sets 7OMoons apart is its exceptional potency in binding to opioid receptors. Research indicates that while mitragynine also binds to these receptors, 7OMoons demonstrates significantly greater affinity, making it a key contributor to the analgesic properties associated with mitragynine. 7OMoons represents a pinnacle of natural innovation, harnessing the power of this remarkable metabolite to deliver enhanced efficacy and reliable results."
                                : "7OMoons is a terpenoid indole alkaloid derived from the Mitragyna \n speciosa plant, commonly known as Kratom. First identified in 1994,\n 7OMoons is a natural compound extracted from mitragynine found  \n in Kratom leaves. It is recognized as an oxidized derivative \n and an active metabolite of mitragynine.\n What sets 7OMoons apart is its exceptional potency in binding to \n opioid receptors. Research indicates that while mitragynine \nalso binds to these receptors, 7OMoons demonstrates significantly \n greater affinity, making it a key contributor to the analgesic \n properties associated with mitragynine.7OMoons represents a pinnacle \n of natural innovation, harnessing the power of this remarkable metabolite \n to deliver enhanced efficacy and reliable results."}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default PlantCard;