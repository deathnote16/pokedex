import { FC, memo } from 'react';
import { FlexBox } from 'component/BoxLayout/Boxes';
import { Typography } from '@mui/material';

type Props = {};

const Component: FC<Props> = () => {
  return (
    <FlexBox>
      <Typography variant="h3" fontWeight={500}>
        Connect with me
      </Typography>
      <Typography variant="subtitle1">
        {` Hi there! I'm Angelo Dela Cruz, a passionate Junior Front-End Software
        Engineer specializing in React and Next.js. With a strong foundation in
        modern web development technologies, I bring designs to life with
        pixel-perfect precision and optimized performance. I thrive on crafting
        engaging user interfaces and experiences that leave a lasting
        impression.`}
      </Typography>
    </FlexBox>
  );
};

export const FooterTitle = memo(Component);
