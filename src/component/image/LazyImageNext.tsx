import { FC, memo } from 'react';
import Image from 'next/image';

type Props = {
  imgSrc: string;
  isFill?: boolean;
  width?: number;
  height?: number;
};

const Component: FC<Props> = ({ imgSrc, width, height, isFill = false }) => {
  return (
    <Image
      src={imgSrc}
      alt="a cool image"
      loading="lazy"
      fill={isFill}
      width={width}
      height={height}
    />
  );
};

export const NextLazyImage = memo(Component);
