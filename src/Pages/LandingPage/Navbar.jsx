import React from "react";
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
// import { Link } from "react-router-dom"; 

const Navbar = () => {
    return (
        <Box>
            <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }} />

                    {/* Navigation Links */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Link to="/" style={{ textDecoration: 'none', color: '#000000', margin: '0 16px' }}>
                            <Typography variant="h6">Home</Typography>
                        </Link>
                        <Link to="/" style={{ textDecoration: 'none', color: '#000000', margin: '0 16px' }}>
                            <Typography variant="h6">Lab Tests</Typography>
                        </Link>
                    </Box>

                    <Box sx={{ flexGrow: 1 }} />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;