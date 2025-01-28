import React, { useState } from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
    useMediaQuery,
    useTheme
} from "@mui/material";
import { motion } from "framer-motion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid2";

const CustomExpandIcon = ({ expanded }) => (
    <Box
        sx={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            width: '24px',
            textAlign: 'center'
        }}
    >
        {expanded ? '-' : '+'}
    </Box>
);

const According = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const gridItemVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <>
            <Box>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: false,
                        amount: 0.1
                    }}
                    variants={containerVariants}
                >
                    <Grid
                        container
                        mt={8}
                    >
                        <Grid
                            item
                            xs={3}
                            md={6}
                            mt={3}
                            component={motion.div}
                            variants={gridItemVariants}
                        >
                            <Box>
                                <Typography style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 700,
                                    fontSize: "50px",
                                    lineHeight: "63px",
                                    color: "#262626",
                                    textAlign: "center",
                                }}>
                                    What Sets us apart
                                </Typography>
                            </Box>

                            <Box sx={{
                                width: '100%',
                                maxWidth: {
                                    xs: '100%',
                                    sm: '90%',
                                    md: '80%',
                                    lg: '70%',
                                    xl: '60%'
                                },
                                margin: 'auto',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: {
                                    xs: 1,
                                    sm: 2
                                },
                                padding: {
                                    xs: 1,
                                    sm: 2
                                }
                            }}>
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    viewport={{
                                        once: false,
                                        amount: 0.1
                                    }}
                                >
                                    <Accordion
                                        expanded={expanded === 'panel1'}
                                        onChange={handleChange('panel1')}
                                        sx={{
                                            borderRadius: 2,
                                            boxShadow: isMobile ? 1 : 2,
                                            '&:before': {
                                                display: 'none',
                                            },
                                            backgroundColor: "transparent",
                                            border: "1px solid black",
                                            borderBottom: "2px solid #FFCF08",
                                        }}
                                    >
                                        <AccordionSummary
                                            expandIcon={<CustomExpandIcon expanded={expanded === 'panel1'} />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            sx={{
                                                fontSize: {
                                                    xs: '0.9rem',
                                                    sm: '1rem'
                                                },
                                            }}
                                        >
                                            <Typography
                                                variant={isMobile ? 'body2' : 'body1'}
                                                style={{
                                                    fontFamily: "Outfit",
                                                    fontWeight: 600,
                                                    fontSize: "20px",
                                                    lineHeight: "25px",
                                                    color: "#0F75BC",
                                                }}
                                            >
                                                Unmatched Quality
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography
                                                variant={isMobile ? 'body2' : 'body1'}
                                                sx={{
                                                    fontSize: {
                                                        xs: '0.8rem',
                                                        sm: '1rem'
                                                    },
                                                }}
                                            >
                                                At 7OMoons, we are dedicated to offering a pure and effective <br />7-hydroxymitragynine product that stands out for its consistency <br /> and reliability. Our focus on innovation and excellence has earned <br />us a reputation for delivering products you can trust
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    viewport={{
                                        once: false,
                                        amount: 0.1
                                    }}
                                >
                                    <Accordion
                                        expanded={expanded === 'panel2'}
                                        onChange={handleChange('panel2')}
                                        sx={{
                                            borderRadius: 2,
                                            boxShadow: isMobile ? 1 : 2,
                                            '&:before': {
                                                display: 'none',
                                            },
                                            backgroundColor: "transparent",
                                            border: "1px solid black",
                                            borderBottom: "2px solid #FFCF08",
                                        }}
                                    >
                                        <AccordionSummary
                                            expandIcon={<CustomExpandIcon expanded={expanded === 'panel2'} />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                            sx={{
                                                fontSize: {
                                                    xs: '0.9rem',
                                                    sm: '1rem'
                                                }
                                            }}
                                        >
                                            <Typography variant={isMobile ? 'body2' : 'body1'}
                                                style={{
                                                    fontFamily: "Outfit",
                                                    fontWeight: 600,
                                                    fontSize: "20px",
                                                    lineHeight: "25px",
                                                    color: "#262626",
                                                }}
                                            >
                                                Advanced Extraction Techniques
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography
                                                variant={isMobile ? 'body2' : 'body1'}
                                                sx={{
                                                    fontSize: {
                                                        xs: '0.8rem',
                                                        sm: '1rem'
                                                    }
                                                }}
                                            >
                                                Our proprietary extraction process allows us to naturally isolate <br /> and preserve the most sought-after alkaloid in Mitragyna Speciosa: <br /> 7-hydroxymitragynine. With precision and care, we ensure only the <br />  finest alkaloid is retained, leaving behind unnecessary components to <br />  provide unparalleled purity and potency.
                                                Choose 7OMoons for a product backed by science, quality, and trust

                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.9 }}
                                    viewport={{
                                        once: false,
                                        amount: 0.1
                                    }}
                                >
                                    <Accordion
                                        expanded={expanded === 'panel3'}
                                        onChange={handleChange('panel3')}
                                        sx={{
                                            borderRadius: 2,
                                            boxShadow: isMobile ? 1 : 2,
                                            '&:before': {
                                                display: 'none',
                                            },
                                            backgroundColor: "transparent",
                                            border: "1px solid black",
                                            borderBottom: "2px solid #FFCF08",
                                        }}
                                    >
                                        <AccordionSummary
                                            expandIcon={<CustomExpandIcon expanded={expanded === 'panel3'} />}
                                            aria-controls="panel3a-content"
                                            id="panel3a-header"
                                            sx={{
                                                fontSize: {
                                                    xs: '0.9rem',
                                                    sm: '1rem'
                                                }
                                            }}
                                        >
                                            <Typography variant={isMobile ? 'body2' : 'body1'}
                                                style={{
                                                    fontFamily: "Outfit",
                                                    fontWeight: 600,
                                                    fontSize: "20px",
                                                    lineHeight: "25px",
                                                    color: "#262626",
                                                }}
                                            >
                                                Guaranteed Purity
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography
                                                variant={isMobile ? 'body2' : 'body1'}
                                                sx={{
                                                    fontSize: {
                                                        xs: '0.8rem',
                                                        sm: '1rem'
                                                    }
                                                }}
                                            >
                                              We ensure our product is free from adulterants, bacteria, and  <br/> microorganisms. Every batch undergoes rigorous testing for potency, <br/>  cleanliness, and purity. To uphold transparency, we provide COA test <br/>  results for every batch, verified by accredited 3rd-party testing laboratories.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </motion.div>
                            </Box>
                        </Grid>

                        <Grid
                            item
                            xs={3}
                            md={6}
                            component={motion.div}
                            variants={imageVariants}
                        >
                            <motion.img
                                src="/image/AccordingImage.svg"
                                style={{
                                    width: "100%",
                                    maxWidth: "570px",
                                    height: "auto"
                                }}
                                alt="Boy"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{
                                    once: false,
                                    amount: 0.1
                                }}
                            />
                        </Grid>
                    </Grid>
                </motion.div>
            </Box>
        </>
    );
};

export default According;