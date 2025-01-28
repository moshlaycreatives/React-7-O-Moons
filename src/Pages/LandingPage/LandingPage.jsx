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
                        alignItems: 'center', // Align items vertically
                        justifyContent: '', // Spread items across the width
                        padding: { xs: '20px', md: '40px 0' },
                        flexWrap: 'nowrap'
                    }}
                >
                    <Grid item xs={12} md={8}>
                        <Box
                            sx={{
                                margin: { xs: '0px', md: '0px 0px 0px 140px' },
                                textAlign: { xs: 'center', md: 'left' },
                                padding: { xs: '0px 20px', md: '0px' },
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: 'Outfit',
                                    fontWeight: 400,
                                    fontSize: { xs: '32px', sm: '36px', md: '40px' }, // Responsive font sizes
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
                                    fontSize: { xs: '60px', sm: '80px', md: '90px' }, // Responsive font sizes
                                    lineHeight: { xs: '70px', sm: '90px', md: '98px' },
                                    color: '#0F75BC',
                                    margin: "10px 0px 10px 0px"
                                }}
                            >
                                {/* Herbs in Every <br /> CBD Product */}
                                Imitated but <br/> Never Equaled: <br/> 7 O Moons.
                                
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: 'Outfit',
                                    fontWeight: 400,
                                    fontSize: { xs: '16px', sm: '20px', md: '27px' }, // Responsive font sizes
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
                    <Grid
                        item
                        xs={3}
                        md={2}
                        ref={secondGridRef}
                        sx={{
                            '& img': {
                                animation: secondGridInView
                                    ? `${slideLeftRight} 1s ease-out forwards`
                                    : 'none',
                                opacity: 0
                            }
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
                        xs={3}
                        md={2}
                        ref={thirdGridRef}
                        sx={{
                            margin: { xs: '0px', md: '0px 0px 0px 10px' },
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            gap: 4,
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
                            }
                        }}
                    >
                        <img
                            src="/image/FirstHeader.svg"
                            style={{
                                width: "100%",
                                maxWidth: "350px",
                                height: "auto"
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
                <ViewDetail/>
            </Box>

            <Box>
                <Footer />
            </Box>


        </>
    );
};



export default LandingPage;