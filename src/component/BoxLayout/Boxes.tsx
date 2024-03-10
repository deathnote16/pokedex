import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const FlexBoxRow = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row'
  // padding: '1rem'
});

export const FlexBoxColumn = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column'
});

export const FlexBoxStartRow = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center'
});

export const FlexBoxStartColumn = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '1rem'
});

export const FlexBoxInBetween = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '1rem'
});
