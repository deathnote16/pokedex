import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { NextLazyImage } from 'component/image/LazyImageNext';
import { useRouter } from 'next/router';
import Link from 'next/link';

const NotFound = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '90vh',
        display: 'grid',
        placeContent: 'center'
      }}
    >
      <Box>
        <NextLazyImage
          imgSrc={'/images/jpeg/psyduck_confuse.jpg'}
          width={350}
          height={350}
          alt="confuse-psyduck"
        />
      </Box>
      <Typography variant="h4" fontWeight={700} textAlign={'center'}>
        PAGE NOT FOUND
      </Typography>
      <Box sx={{ display: 'grid', placeContent: 'center', mt: '1rem' }}>
        <Link href="/" passHref replace>
          <Button variant="contained" color="primary">
            Back to Home
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default NotFound;
