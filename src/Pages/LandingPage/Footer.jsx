import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Divider from '@mui/material/Divider';






const Footer = () => {

    return (
        <>

            <Box

                style={{
                    backgroundImage: `url('/image/FooterBackground.svg')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: 'auto',
                    width: '100%',
                }}

                sx={{ margin: { xs: "40px 0px 0px 0px", md: "0px" } }}

            >
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 2 }}>
                        <Box>

                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Box
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                // Adjust this depending on your desired layout
                            }}
                        >
                            <img
                                src="/image/logo.svg"
                                style={{
                                    width: "300px",
                                    marginTop: "60px"
                                }}
                                alt="Logo"
                            />
                        </Box>

                        <Box  >
                            <Typography style={{
                                fontFamily: "Outfit",
                                fontWeight: "700",
                                // fontSize: "60px",
                                lineHeight: "78px",
                                color: "#FFFFFF",
                                textAlign: "center"
                            }}
                                sx={{
                                    fontSize: { xs: "30px", md: "60px" },
                                }}

                            >
                                Subscribe to Newsletter
                            </Typography>
                            <Typography

                                style={{
                                    fontFamily: "Outfit",
                                    fontWeight: "300",
                                    fontSize: "20px",
                                    lineHeight: "27px",
                                    color: "#FFFFFF",
                                    textAlign: "center",
                                    margin: "5px 0px 20px 0px"
                                }}
                            >
                                Join our newsletter to stay in the know about 7-o-Moons new products, special offers <br />
                                and CBD education!
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", md: "row" }, // Column on small screens, row on medium and above
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: "10px",
                                gap: "10px", // Space between elements
                            }}
                        >
                            <input
                                type="search"
                                placeholder="Input your email address here"
                                style={{
                                    width: "75%",
                                    maxWidth: "620px", // Limits the width on larger screens
                                    height: "50px",
                                    border: "1px solid #000000",
                                    borderRadius: "70px",
                                    padding: "0 15px",
                                    margin: "0px", // Removes unnecessary margin
                                }}
                                className="responsive-input"
                            />

                            <Button
                                sx={{
                                    backgroundColor: "#000000",
                                    color: "#FFF",
                                    borderRadius: "61px",
                                    height: "50px",
                                    width: { xs: "50%", md: "170px" }, // Full width on xs screens, fixed width on md+
                                    textTransform: "none",
                                    ":hover": { backgroundColor: "#333" },
                                }}
                                endIcon={<ArrowOutwardIcon />}
                            >
                                Subscribe
                            </Button>

                        </Box>
                        <Box
                            sx={{
                                padding: "0px 0px",
                                margin: "40px 0px 0px 0px",
                            }}
                        >
                            <Divider
                                sx={{
                                    backgroundColor: "#FFFFFF", // Sets the color of the divider
                                }}
                            />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexWrap: "wrap", // Ensure responsiveness for smaller screens
                                padding: { xs: "0px 25px", md: "0px 0px" },
                            }}
                        >
                            <Typography
                                style={{
                                    fontFamily: "Outfit",
                                    fontWeight: "400",
                                    lineHeight: "22px",
                                    color: "#FFFFFF",
                                    margin: "15px 0px 20px 0px",
                                }}
                                sx={{ fontSize: { xs: "14px", md: "18px" } }} // Adjust for smaller screens
                            >
                                Copyright © 2025  7.o.Moons . All Rights Reserved.
                            </Typography>

                            <Box
                                style={{
                                    display: "flex",
                                    gap: "10px",
                                }}
                            >
                                <img src="/image/mastercard.png" alt="Mastercard" />
                                <img src="/image/dicover.png" alt="Discover" />
                                <img src="/image/amex.png" alt="Amex" />
                                <img src="/image/visa.png" alt="Visa" />
                            </Box>
                        </Box>




                    </Grid>

                    <Grid size={{ xs: 12, md: 2 }} sx={{ display: { xs: "none", md: "none" } }}>
                        <Box>

                        </Box>
                    </Grid>
                </Grid>







            </Box>





        </>
    )
}





export default Footer;