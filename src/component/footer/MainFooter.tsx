import { FC, memo } from 'react';
import { FlexBox } from 'component/BoxLayout/Boxes';

type Props = {};

const Component: FC<Props> = () => {
  return <FlexBox>test</FlexBox>;
};

export const MainFooter = memo(Component);
