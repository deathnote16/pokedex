import { Typography } from '@mui/material';
import { FlexBox } from 'component/BoxLayout/Boxes';
import { NextLazyImage } from 'component/image/LazyImageNext';
import { FC, memo } from 'react';

type Props = { label?: string; imgUrl?: string };

const Component: FC<Props> = ({
  label = 'Pokemon',
  imgUrl = '/images/icon/pokeball_icon4.png'
}) => {
  return (
    <FlexBox>
      <NextLazyImage imgSrc={imgUrl} width={30} height={30} />
      <Typography variant="h5" fontWeight={700} ml={1}>
        {label}
      </Typography>
    </FlexBox>
  );
};

export const TitleWithIcon = memo(Component);
