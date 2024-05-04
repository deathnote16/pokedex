import { styled } from '@mui/system';
import NextImage, { ImageProps } from 'next/image';

const LazeImage = styled(NextImage)(({ theme }) => ({
  maxWidth: '100px',
  width: '100px',
  height: 'auto'
}));

type Props = {
  src: string;
  alt: string;
};

export const LazyImage: React.FC<Props> = ({ ...rest }) => (
  <LazeImage src={rest.src} alt={rest.alt} style={{ width: '100%' }} />
);
