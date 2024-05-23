import { FlexBox } from 'component/BoxLayout/Boxes';
import { NextLazyImage } from 'component/image/LazyImageNext';
import { FC, memo } from 'react';

type Props = {};

const Component: FC<Props> = () => {
  return (
    <FlexBox sx={{ justifyContent: 'center', height: '100vh' }}>
      <NextLazyImage
        imgSrc={'/images/gif/running-pikachu.gif'}
        width={300}
        height={300}
      />
    </FlexBox>
  );
};

export const PageLoaders = memo(Component);
