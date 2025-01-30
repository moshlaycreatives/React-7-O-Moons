import React, { useRef, useState, useEffect } from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowForward';
import Grid from "@mui/material/Grid2";
import { keyframes } from '@mui/system';
import PlantCard from './PlantCard';
import ProductCrad from './ProductCrad';
import QualityCard from './QualityCard';
import Card from './Card';
import Footer from './Footer';
import According from './According';
import ViewDetail from './ViewDetail';



// Custom hook for intersection observer
const useInView = () => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.disconnect();
            }
        };
    }, []);

    return [ref, isInView];
};

// Define animations
const slideLeftRight = keyframes`
  0% { transform: translateX(-20px); opacity: 0; }
  100% { transform: translateX(20px); opacity: 1; }
`;

const slideUpDown = keyframes`
  0% { transform: translateY(-20px); opacity: 0; }
  100% { transform: translateY(20px); opacity: 1; }
`;

const slideDownUp = keyframes`
  0% { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(-20px); opacity: 1; }
`;

const LandingPage = () => {
    const [secondGridRef, secondGridInView] = useInView();
    const [thirdGridRef, thirdGridInView] = useInView();

    return (
        <>


            {/* header  */}
            <Box
                sx={{
                    backgroundImage: `url('/image/BackgroundHeader.svg')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: 'auto',
                    width: '100%',
                    borderRadius: "0px 0px 90px 90px"
                }}
            >
                {/* AppBar */}


                <Grid
                    container
                    spacing={2}
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: { xs: '20px', md: '40px 0' },
                        flexWrap: { xs: 'wrap', md: 'nowrap' }
                    }}
                >
                    {/* Text Column - Full width on xs, half width on md+ */}
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            order: { xs: 1, md: 0 },
                            textAlign: { xs: 'center', md: 'left' },
                            padding: { xs: '0px 20px', md: '0px 40px' },
                        }}
                    >
                        <Box
                            sx={{
                                margin: { xs: '0', md: '0 0 0 40px' },
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: 'Outfit',
                                    fontWeight: 400,
                                    fontSize: { xs: '32px', sm: '36px', md: '40px' },
                                    lineHeight: '44px',
                                    color: '#262626',
                                }}
                            >
                                Finest Organic
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: 'Outfit',
                                    fontWeight: 700,
                                    fontSize: { xs: '40px', sm: '80px', md: '90px' },
                                    lineHeight: { xs: '50px', sm: '90px', md: '98px' },
                                    color: '#0F75BC',
                                    margin: "10px 0px 10px 0px"
                                }}
                            >
                                Imitated but <br /> Never Equaled: <br /> 7 O Moons.
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: 'Outfit',
                                    fontWeight: 400,
                                    fontSize: { xs: '16px', sm: '20px', md: '27px' },
                                    lineHeight: { xs: '28px', sm: '32px', md: '30px' },
                                    color: '#262626',
                                }}
                            >
                                Our unparalleled extraction process ensures you <br /> experience 7 O Moons at its most <br /> potent and purest form.
                            </Typography>

                            <Button
                                style={{
                                    backgroundColor: '#0F75BC',
                                    color: 'white',
                                    width: '150px',
                                    height: '42px',
                                    borderRadius: '61px',
                                    margin: '60px 0px 20px 0px',
                                }}
                                endIcon={<ArrowOutwardIcon />}
                            >
                                LAB TESTS
                            </Button>
                        </Box>
                    </Grid>

                    {/* Image Columns - Full width on xs, half width on md+ */}


                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            order: { xs: 2, md: 1 },
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            justifyContent: 'center',
                            alignItems: 'center',
                            '@media (max-width: 600px)': {
                                flexWrap: 'nowrap', // Removing flex-wrap on mobile
                            },
                        }}
                    >
                        <Grid
                            container
                            spacing={2}
                            sx={{
                                width: '100%',
                                justifyContent: 'center',
                                '@media (max-width: 600px)': {
                                    flexWrap: 'nowrap', // Ensuring no flex-wrap on mobile
                                },
                            }}
                        >
                            <Grid
                                item
                                xs={12}
                                md={6}
                                ref={secondGridRef}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    '@media (max-width: 600px)': {
                                        flexWrap: 'nowrap', // Preventing flex-wrap on mobile
                                    },
                                    '& img': {
                                        animation: secondGridInView
                                            ? `${slideLeftRight} 1s ease-out forwards`
                                            : 'none',
                                        opacity: 0
                                    },
                                    margin: { xs: "0px", md: "0px -45px 0px 0px" }
                                }}
                            >
                                <img
                                    src="/image/SeondHeader.svg"
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
                                xs={12}
                                md={6}
                                ref={thirdGridRef}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: 4,
                                    '@media (max-width: 600px)': {
                                        flexWrap: 'nowrap', // Ensuring no flex-wrap on mobile
                                    },
                                    '& img:first-of-type': {
                                        animation: thirdGridInView
                                            ? `${slideUpDown} 1s ease-out forwards`
                                            : 'none',
                                        opacity: 0
                                    },
                                    '& img:last-of-type': {
                                        animation: thirdGridInView
                                            ? `${slideDownUp} 1s ease-out forwards`
                                            : 'none',
                                        opacity: 0,
                                        animationDelay: '0.3s'
                                    },
                                }}
                            >
                                <img
                                    src="/image/FirstHeader.svg"
                                    style={{
                                        width: "100%",
                                        maxWidth: "350px",
                                        height: "auto",
                                    }}
                                    alt="Boy"
                                />
                                <img
                                    src="/image/ThirdhHeader.svg"
                                    style={{
                                        width: "100%",
                                        maxWidth: "350px",
                                        height: "auto"
                                    }}
                                    alt="Boy"
                                />
                            </Grid>
                        </Grid>
                    </Grid>


                </Grid>
            </Box>







            <Box>
                <PlantCard />
            </Box>

            <Box>
                <ProductCrad />
            </Box>


            <Box>
                <QualityCard />
            </Box>


            <Box>
                <According />
            </Box>

            <Box>
                <Card />
                <ViewDetail />
            </Box>

            <Box>
                <Footer />
            </Box>





        </>
    );
};



export default LandingPage;