import React from "react";
import { useState } from "react";
import { Box, Typography, Button, useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";

const ViewDetail = () => {
    const [showSecondContent, setShowSecondContent] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleToggleContent = () => {
        setShowSecondContent((prevState) => !prevState);
    };

    const commonTypographyProps = {
        fontFamily: "Outfit",
        color: "#262626",
        textAlign: "center"
    };

    return (
        <Box sx={{
            px: { xs: 1, sm: 4, md: 8 },
            py: { xs: 4, md: 7 }
        }}>
            {/* First Content Title */}
            <Typography
                variant={isMobile ? "h4" : "h3"}
                sx={{
                    ...commonTypographyProps,
                    fontWeight: 700,
                    mb: { xs: 3, md: 5 },
                    mt: { xs: 9, md: 0 }
                }}
            >
                Product Disclaimers And FDA Disclosure
            </Typography>

            {/* First Content Grid */}
            <Grid
                container
                spacing={2}
                sx={{
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    mb: { xs: 3, md: 5 }
                }}
            >
                <Grid
                    item
                    xs={12}
                    md={6}
                >
                    <Typography
                        sx={{
                            fontFamily: "Outfit",
                            fontWeight: 400,
                            fontSize: { xs: "14px", md: "16px" },
                            lineHeight: "22px",
                            color: "#636363",
                            textAlign: { xs: "center", md: "left" },
                            whiteSpace: { xs: "pre-line", md: "pre-line" }
                        }}
                    >


                        {isMobile
                            ? "CAUTION: 7OHMZ IS NOT INTENDED NOR SHOULD IT BE USED, IF YOU ARE  PREGNANTS OR LACTATING,TAKINGS ANY MEDICATIONS, OR BY ANYONE WITH A   DISORDERS, HEART DISEASE, HIGH BLOOD PRESSURE OR ANY OTHER MEDICAL  CONDITION. ALWAYS OF CONSULT WITH THE PHYSICIAN OR HEALTHCARE PROFESSIONAL  PRIOR TO USE. MUST BE 21+ TO PURCHASE OR CONSUME THESE PRODUCTS If you experience nausea,vomiting, or the increased heart rate, do not consume any more of these products."
                            : "CAUTION: 7OHMZ IS NOT INTENDED NOR SHOULD IT BE USED, IF YOU ARE \n  PREGNANT OR LACTATING,TAKING ANY MEDICATIONS, OR BY ANYONE WITH A  \n  DISORDER, HEART DISEASE, HIGH BLOOD PRESSURE OR ANY OTHER MEDICAL \n  CONDITION. ALWAYS CONSULT WITH A PHYSICIAN OR HEALTHCARE \n PROFESSIONAL  PRIOR TO USE.\n  MUST BE 21+ TO PURCHASE OR CONSUME THESE PRODUCTS \n If you experience nausea,vomiting, or increased heart rate, do not \n consume any more of these products."}


                    </Typography>
                </Grid>

                <Grid
                    item
                    xs={12}
                    md={6}
                >
                    <Typography
                        sx={{
                            fontFamily: "Outfit",
                            fontWeight: 400,
                            fontSize: { xs: "14px", md: "16px" },
                            lineHeight: "22px",
                            color: "#636363",
                            textAlign: { xs: "center", md: "left" },
                            whiteSpace: { xs: "pre-line", md: "pre-line" }
                        }}
                    >
                        {isMobile
                            ? "These PRODUCTs CAN BE ADDICTING. DO NOT MIX WITH ALCOHOL. DO NOT TAKE THIS PRODUCT WHILE OPERATING A  MOTOR VEHICLE OR OTHER MACHINERY. WARNING! KEEP OUT OF REACH OF CHILDREN. These statements have not been evaluated by the Food and Drug  Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Consult your healthcare provider before using any new products."
                            : "These PRODUCTs CAN BE ADDICTING. \nDO NOT MIX WITH ALCOHOL. DO NOT TAKE THIS PRODUCT WHILE OPERATING A  \nMOTOR VEHICLE OR OTHER MACHINERY.\n\n  WARNING! KEEP OUT OF REACH OF CHILDREN. \nThese statements have not been evaluated by the Food and Drug \n Administration. This product is not intended to diagnose, treat, cure, or \nprevent any disease. Consult your healthcare provider before using any \nnew products."}
                    </Typography>
                </Grid>
            </Grid>

            {/* Toggle Button */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        width: { xs: "230px", md: "230px" },
                        height: { xs: "40px", md: "50px" },
                        borderRadius: "61px",
                        my: { xs: 2, md: 4 }
                    }}
                    onClick={handleToggleContent}
                >
                    {showSecondContent ? "View Less Disclaimers" : "View All Disclaimers"}
                </Button>
            </Box>

            {/* Second Content */}
            {showSecondContent && (
                <Box sx={{ mt: { xs: 2, md: 4 } }}>
                    <Typography
                        variant={isMobile ? "h4" : "h3"}
                        sx={{
                            ...commonTypographyProps,
                            mb: { xs: 2, md: 3 }
                        }}
                    >
                        7-O-MOONS Product Disclaimer
                    </Typography>

                    <Typography
                        sx={{
                            ...commonTypographyProps,
                            fontWeight: 700,
                            fontSize: { xs: "20px", md: "30px" },
                            mb: { xs: 2, md: 3 },
                            px: { xs: 2, md: 0 }
                        }}
                    >
                        Do not use this product if the seal is broken.
                    </Typography>

                    <Grid
                        container
                        spacing={2}
                        sx={{
                            justifyContent: 'center',
                            px: { xs: 2, md: 0 }
                        }}
                    >
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Typography
                                    sx={{
                                        fontFamily: "Outfit",
                                        fontWeight: 600,
                                        fontSize: { xs: "18px", md: "20px" },
                                        color: "#262626",
                                        mb: 2
                                    }}
                                >
                                    WARNING:
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: "Outfit",
                                        fontWeight: 400,
                                        fontSize: { xs: "14px", md: "18px" },
                                        color: "#636363",
                                        lineHeight: "1.5"
                                    }}
                                >
                                    The levels of mitragynine and other alkaloids in this kratom extract are <br />many times higher than what is contained in fresh kratom leaves, thus <br /> increasing the potency of this extract. Please act accordingly and proceed <br /> with extreme caution. As with all kratom products, do not use this product <br /> without first consulting your doctor. Using Mitragyna Speciosa can be <br /> dangerous. Adverse health effects have been reported with the use of  <br />products. Some publications suggest that kratom may be associated with <br />serious side effects such as seizures, liver damage, withdrawal, addiction,<br /> abuse and death. Kratom information is available on the FDA website. <br /> Read FDA’s advisories and comments on product concerns. Do not take <br /> kratom extract unless you have taken non-extracted kratom several times <br /> in the past and have had no side effects. Do not use this product for more <br /> than one consecutive day with or in combination with other kratom products.<br /> Mixing Mitragyna Speciosa extracts with pharmaceuticals, vitamins, nicotine,<br /> alcohol, herbal supplements, pharmaceuticals or other kratom products;<br /> extracts or non-extracts, or combined with other substances may lead <br />to serious drug interactions. It could be dangerous not to follow the advice <br /> contained in this disclaimer. Do not use this product if you are pregnant,<br /> planning to become pregnant, or breastfeeding. Do not take this product <br /> if you have any blood disease, liver or kidney disease, high blood pressure, <br /> heart disease, central nervous system disorder, or any other medical condition.<br /><br />

                                    Do not use this product while driving a car or operating heavy machinery. <br />If you experience any side effects, call your doctor right away or seek <br /> emergency medical attention.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Typography
                                    sx={{
                                        fontFamily: "Outfit",
                                        fontWeight: 600,
                                        fontSize: { xs: "18px", md: "20px" },
                                        color: "#262626",
                                        mb: 2
                                    }}
                                >
                                    Do Not Sell To Minors! Keep out of reach of children.
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: "Outfit",
                                        fontWeight: 400,
                                        fontSize: { xs: "14px", md: "18px" },
                                        color: "#636363",
                                        lineHeight: "1.5"
                                    }}
                                >
                                    Not recommended for long-term or continuous use.<br /> This includes combinations of this product and other kratom products. <br /> Used only as a botanical preparation.
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: "Outfit",
                                        fontWeight: 600,
                                        fontSize: { xs: "18px", md: "20px" },
                                        color: "#262626",

                                    }}
                                >
                                    Disclaimer
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: "Outfit",
                                        fontWeight: 400,
                                        fontSize: { xs: "14px", md: "18px" },
                                        color: "#636363",
                                        lineHeight: "1.5"
                                    }}
                                >
                                    This product has not been evaluated by the Food and Drug Administration.<br /> These statements have not been evaluated by the FDA. This product is <br /> considered unsuitable for consumption in the United States by the FDA.<br /> By using this product, you assume full responsibility for the use of the product,<br /> including without limitation any adverse events or health complications that <br />may result from the use of the product. The manufacturer assumes no liability <br /> for the use or misuse of this product.
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: "Outfit",
                                        fontWeight: 600,
                                        fontSize: { xs: "18px", md: "20px" },
                                        color: "#262626",

                                    }}
                                >
                                    Instructions
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: "Outfit",
                                        fontWeight: 400,
                                        fontSize: { xs: "14px", md: "18px" },
                                        color: "#636363",
                                        lineHeight: "1.5",
                                        mb: { xs: 4, md: 8 }
                                    }}
                                >
                                    Do not use this product if you have a serious medical condition or are taking <br /> prescription medications. Do not use this product in combination with <br /> prescription and over-the-counter medications, alcohol, vitamins, herbal <br /> supplements, drugs, nicotine, or drugs containing other substances, including <br /> other kratom products. Talk to your doctor about all medications, vitamins,<br /> nicotine, herbal supplements, medications, and other kratom-containing substances <br /> you are taking or have taken. Tell your doctor the contents of any other Kratom <br /> products you may have used in the past. Before using this product for any reason, <br /> consult with your licensed healthcare provider to ensure that this product may be safe. <br /> Please determine if it is suitable for you, and if so, how to use it safely. Also, before using <br />this product, check with your licensed healthcare provider about possible drug interactions <br />and other complications. This disclaimer is not intended to replace information provided by<br /> your doctor.<br /><br />
                                    Do not repackage for retail sale. Do not alter or relabel this package.

                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            )}
        </Box>
    );
};

export default ViewDetail;
