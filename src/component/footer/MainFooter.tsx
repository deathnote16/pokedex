import { FC, memo } from 'react';
import { FlexBox } from 'component/BoxLayout/Boxes';
import { customColor } from 'component/theme';
import { FooterTitle } from './FooterTitle';
import { SocialInfoCard } from './SocialInfo';
import { Grid } from '@mui/material';
import { CreditsInfo } from './CreditsInfo';

type Props = {};

const Component: FC<Props> = () => {
  return (
    <FlexBox
      sx={{
        maxWidth: '100%',
        background: customColor.secondary.main,
        mt: '5rem',
        justifyContent: 'center',
        padding: '3rem'
      }}
    >
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <FooterTitle />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <SocialInfoCard />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <CreditsInfo />
        </Grid>
      </Grid>
    </FlexBox>
  );
};

export const MainFooter = memo(Component);
