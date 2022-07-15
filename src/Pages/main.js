import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar/Navbar';
import Herobanner from '../components/Herobanner/herobanner';

const main = () => {
  return (
    <Box>
        <Navbar/>
        <Herobanner/>
    </Box>
  )
}

export default main