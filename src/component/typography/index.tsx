import { Typography } from '@mui/material';
import { styled } from '@mui/system';

export const ResponsiveTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '1.125em'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1em'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.125em'
  }
}));

export const ResponsiveBoldTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '1.125em',
    fontWeight: 700
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1em',
    fontWeight: 700
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.125em',
    fontWeight: 700
  }
}));

export const ResponsiveTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    fontWeight: 700,
    fontSize: '1.225em'
  },
  [theme.breakpoints.up('sm')]: {
    fontWeight: 700,
    fontSize: '1.425em'
  },
  [theme.breakpoints.up('md')]: {
    fontWeight: 700,
    fontSize: '1.625em'
  }
}));

export const Small = styled(Typography)(({ theme }) => ({
  fontSize: '0.8em',
  color: '#9e9e9e'
}));
