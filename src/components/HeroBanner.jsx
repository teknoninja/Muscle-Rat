import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner4.jpg';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="40px">
    Muscle Rat
    </Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
    Built in the Gym<br/> Forged in Pain
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
    Unleash Your True Potential with Personalized Workouts
    </Typography>
    <Stack>
      <a href="#exercises" className="search-btn"  style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '10px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '70px' }}>
      Enleash The
       Beast
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;