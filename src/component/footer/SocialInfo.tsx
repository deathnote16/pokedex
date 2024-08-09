import { FC, memo } from 'react';
import { Grid, Typography } from '@mui/material';
import { FlexBox } from 'component/BoxLayout/Boxes';
import { socialMediaInfo } from 'constant/socials';
import Link from 'next/link';

type Props = {};

const Component: FC<Props> = () => {
  return (
    <FlexBox
      flexDirection={'column'}
      sx={{
        alignItems: 'flex-start'
      }}
    >
      <Typography variant="h6">{`Follow | Contact me`}</Typography>
      <FlexBox flexDirection={'row'} mt={1}>
        {<socialMediaInfo.linkedin.icon />}
        <Link href={socialMediaInfo.linkedin.link} target="blank">
          <Typography>{socialMediaInfo.linkedin.label}</Typography>
        </Link>
      </FlexBox>
      <FlexBox flexDirection={'row'} mt={1}>
        {<socialMediaInfo.gmail.icon />}
        <Link href={socialMediaInfo.gmail.link} target="blank">
          <Typography>{socialMediaInfo.gmail.label}</Typography>
        </Link>
      </FlexBox>
      <FlexBox flexDirection={'row'} mt={1}>
        {<socialMediaInfo.facebook.icon />}
        <Link href={socialMediaInfo.facebook.link} target="blank">
          <Typography>{socialMediaInfo.facebook.label}</Typography>
        </Link>
      </FlexBox>
      <FlexBox flexDirection={'row'} mt={1}>
        {<socialMediaInfo.ig.icon />}
        <Link href={socialMediaInfo.ig.link} target="blank">
          <Typography>{socialMediaInfo.ig.label}</Typography>
        </Link>
      </FlexBox>
    </FlexBox>
  );
};

export const SocialInfoCard = memo(Component);
