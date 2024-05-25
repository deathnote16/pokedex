import { Typography } from '@mui/material';
import { FlexBox } from 'component/BoxLayout/Boxes';
import { NextLazyImage } from 'component/image/LazyImageNext';
import { FC, memo } from 'react';

type Props = {
  label?: string;
  imgUrl?: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const Component: FC<Props> = ({
  label = 'Pokemon',
  imgUrl = '/images/icon/pokeball_icon4.png',
  variant = 'h5'
}) => {
  return (
    <FlexBox>
      <NextLazyImage imgSrc={imgUrl} width={30} height={30} />
      <Typography variant={variant} fontWeight={700} ml={1}>
        {label}
      </Typography>
    </FlexBox>
  );
};

export const TitleWithIcon = memo(Component);
