import { FC, memo } from 'react';
import Image from 'next/image';

type Props = {
  imgSrc: string;
  isFill?: boolean;
  width?: number;
  height?: number;
  alt?: string;
};

const Component: FC<Props> = ({
  imgSrc,
  width,
  height,
  isFill = false,
  alt = 'pokedex-image'
}) => {
  return (
    <Image
      src={imgSrc}
      alt={alt}
      loading="lazy"
      fill={isFill}
      width={width}
      height={height}
    />
  );
};

export const NextLazyImage = memo(Component);
