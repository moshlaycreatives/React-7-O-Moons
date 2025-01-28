import React from "react";
import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";



const ViewDetail = () => {

    const [showSecondContent, setShowSecondContent] = useState(false);

    const handleToggleContent = () => {
        setShowSecondContent((prevState) => !prevState);
    };




    return (
        <>

            {/* First Content */}

            <Box mt={7} mb={5}>
                <Typography style={{
                    fontFamily: "Outfit",
                    fontWeight: 700,
                    fontSize: "50px",
                    lineHeight: "63px",
                    color: "#262626",
                    textAlign: "center",

                }}>
                    Product Disclaimers And FDA Disclosure
                </Typography>
            </Box>

            <Box>
                <Grid
                    container
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: "20px",


                        margin: "50px 0px 0px 0px"
                    }}
                >
                    <Grid
                        item
                        xs={3}
                        md={6}

                    >
                        <Box>
                            <Typography style={{
                                fontFamily: "Outfit",
                                fontWeight: 400,
                                fontSize: "16px",
                                lineHeight: "22px",
                                color: "#636363",


                            }}>

                                CAUTION: 7OHMZ IS NOT INTENDED NOR SHOULD IT BE USED, IF YOU ARE <br /> PREGNANT OR LACTATING,TAKING ANY MEDICATIONS, OR BY ANYONE WITH A  <br /> DISORDER, HEART DISEASE, HIGH BLOOD PRESSURE OR ANY OTHER MEDICAL <br /> CONDITION. ALWAYS CONSULT WITH A PHYSICIAN OR HEALTHCARE <br />PROFESSIONAL  PRIOR TO USE.<br />
                                MUST BE 21+ TO PURCHASE OR CONSUME THESE PRODUCTS <br />If you experience nausea,vomiting, or increased heart rate, do not <br />consume any more of these products.



                            </Typography>
                        </Box>



                    </Grid>
                    <Grid
                        item
                        xs={3}
                        md={6}
                    >



                        <Box>
                            <Typography style={{
                                fontFamily: "Outfit",
                                fontWeight: 400,
                                fontSize: "16px",
                                lineHeight: "22px",
                                color: "#636363",


                            }}>

                                These PRODUCTs CAN BE ADDICTING. <br />DO NOT MIX WITH ALCOHOL. DO NOT TAKE THIS PRODUCT WHILE OPERATING A  <br />MOTOR VEHICLE OR OTHER MACHINERY.<br /><br />

                                WARNING! KEEP OUT OF REACH OF CHILDREN. <br />These statements have not been evaluated by the Food and Drug <br /> Administration. This product is not intended to diagnose, treat, cure, or <br />prevent any disease. Consult your healthcare provider before using any <br />new products.


                            </Typography>
                        </Box>


                    </Grid>
                </Grid>
            </Box>


            <Box
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                }}
            >
                <Button
                    style={{
                        color: "#FFFFFF",
                        backgroundColor: "#0F75BC",
                        width: "230px",
                        borderRadius: "61px",
                        margin: "40px 0px 40px 0px",
                        height: "50px"
                    }}
                    onClick={handleToggleContent}
                >
                    {/* View All Disclaimerss */}
                    {showSecondContent ? "View Less Disclaimers" : "View All Disclaimers"}
                </Button>
            </Box>



            {/* Second Content */}


            {showSecondContent && (
                <Box>
                    <Box>
                        <Typography style={{
                            fontFamily: "Outfit",
                            fontWeight: 700,
                            fontSize: "50px",
                            lineHeight: "63px",
                            color: "#262626",
                            textAlign: "center",
                            margin: "0px 0px 0px 0px"

                        }}>
                            7-O-MOONS Product Disclaimer
                        </Typography>
                    </Box>
                    <Box>
                        <Typography style={{
                            fontFamily: "Outfit",
                            fontWeight: 700,
                            fontSize: "30px",
                            lineHeight: "40px",
                            color: "#262626",
                            margin: "10px 0px 0px 190px",
                            


                        }}>
                            Do not use this product if the seal is broken.
                        </Typography>
                    </Box>
                    <Box>
                        <Grid
                            container
                            spacing={2}
                            sx={{
                                alignItems: "center",
                                justifyContent: "center",
                                margin: "0px 0px 0px 180px"

                            }}
                        >


                            <Grid
                                item
                                xs={12}
                                md={6}
                            >

                                <Box>
                                    <Typography style={{
                                        fontFamily: "Outfit",
                                        fontWeight: 600,
                                        fontSize: "20px",
                                        lineHeight: "30px",
                                        color: "#262626",
                                        margin: "-150px 0px 0px 0px"


                                    }}
                                    >
                                        WARNING:
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontFamily: "Outfit",
                                            fontWeight: 400,
                                            fontSize: "18px",
                                            lineHeight: "20px",
                                            color: "#636363",
                                            margin: "20px 0px 0px 0px"
                                        }}
                                    >
                                        The levels of mitragynine and other alkaloids in this kratom extract are <br />many times higher than what is contained in fresh kratom leaves, thus <br /> increasing the potency of this extract. Please act accordingly and proceed <br /> with extreme caution. As with all kratom products, do not use this product <br /> without first consulting your doctor. Using Mitragyna Speciosa can be <br /> dangerous. Adverse health effects have been reported with the use of  <br />products. Some publications suggest that kratom may be associated with <br />serious side effects such as seizures, liver damage, withdrawal, addiction,<br /> abuse and death. Kratom information is available on the FDA website. <br /> Read FDA’s advisories and comments on product concerns. Do not take <br /> kratom extract unless you have taken non-extracted kratom several times <br /> in the past and have had no side effects. Do not use this product for more <br /> than one consecutive day with or in combination with other kratom products.<br /> Mixing Mitragyna Speciosa extracts with pharmaceuticals, vitamins, nicotine,<br /> alcohol, herbal supplements, pharmaceuticals or other kratom products;<br /> extracts or non-extracts, or combined with other substances may lead <br />to serious drug interactions. It could be dangerous not to follow the advice <br /> contained in this disclaimer. Do not use this product if you are pregnant,<br /> planning to become pregnant, or breastfeeding. Do not take this product <br /> if you have any blood disease, liver or kidney disease, high blood pressure, <br /> heart disease, central nervous system disorder, or any other medical condition.<br /><br />

                                        Do not use this product while driving a car or operating heavy machinery. <br />If you experience any side effects, call your doctor right away or seek <br /> emergency medical attention.
                                    </Typography>
                                </Box>

                            </Grid>
                            <Grid
                                item
                                xs={12}
                                md={6}
                            >

                                <Box>
                                    <Typography style={{
                                        fontFamily: "Outfit",
                                        fontWeight: 600,
                                        fontSize: "20px",
                                        lineHeight: "30px",
                                        color: "#262626",
                                        margin: "30px 0px 0px 0px"


                                    }}
                                    >
                                        Do Not Sell To Minors! Keep out of reach of children.
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontFamily: "Outfit",
                                            fontWeight: 400,
                                            fontSize: "18px",
                                            lineHeight: "20px",
                                            color: "#636363",
                                            margin: "20px 0px 0px 0px"
                                        }}
                                    >

                                        Not recommended for long-term or continuous use.<br /> This includes combinations of this product and other kratom products. <br /> Used only as a botanical preparation.
                                    </Typography>
                                    <Typography style={{
                                        fontFamily: "Outfit",
                                        fontWeight: 600,
                                        fontSize: "20px",
                                        lineHeight: "30px",
                                        color: "#262626",
                                        margin: "10px 0px 0px 0px"


                                    }}
                                    >
                                        Disclaimer
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontFamily: "Outfit",
                                            fontWeight: 400,
                                            fontSize: "18px",
                                            lineHeight: "20px",
                                            color: "#636363",
                                            margin: "5px 0px 0px 0px"
                                        }}
                                    >
                                        This product has not been evaluated by the Food and Drug Administration.<br /> These statements have not been evaluated by the FDA. This product is <br /> considered unsuitable for consumption in the United States by the FDA.<br /> By using this product, you assume full responsibility for the use of the product,<br /> including without limitation any adverse events or health complications that <br />may result from the use of the product. The manufacturer assumes no liability <br /> for the use or misuse of this product.
                                    </Typography>
                                    <Typography style={{
                                        fontFamily: "Outfit",
                                        fontWeight: 600,
                                        fontSize: "20px",
                                        lineHeight: "30px",
                                        color: "#262626",
                                        margin: "10px 0px 0px 0px"


                                    }}
                                    >
                                        Instructions
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontFamily: "Outfit",
                                            fontWeight: 400,
                                            fontSize: "18px",
                                            lineHeight: "20px",
                                            color: "#636363",
                                            margin: "5px 0px 80px 0px"
                                        }}>
                                        Do not use this product if you have a serious medical condition or are taking <br /> prescription medications. Do not use this product in combination with <br /> prescription and over-the-counter medications, alcohol, vitamins, herbal <br /> supplements, drugs, nicotine, or drugs containing other substances, including <br /> other kratom products. Talk to your doctor about all medications, vitamins,<br /> nicotine, herbal supplements, medications, and other kratom-containing substances <br /> you are taking or have taken. Tell your doctor the contents of any other Kratom <br /> products you may have used in the past. Before using this product for any reason, <br /> consult with your licensed healthcare provider to ensure that this product may be safe. <br /> Please determine if it is suitable for you, and if so, how to use it safely. Also, before using <br />this product, check with your licensed healthcare provider about possible drug interactions <br />and other complications. This disclaimer is not intended to replace information provided by<br /> your doctor.<br /><br />
                                        Do not repackage for retail sale. Do not alter or relabel this package.

                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                </Box>
            )}
        </>
    )
}


export default ViewDetail;






