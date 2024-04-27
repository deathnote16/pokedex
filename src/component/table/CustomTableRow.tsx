import { FC, memo } from 'react';
import { TableRow, colors } from '@mui/material';
import { style, styled } from '@mui/system';

const AlternatingTableRow = styled(TableRow)({
  background: colors.grey[50],
  '&:nth-of-type(odd)': { background: colors.grey[100] }
});

type Props = {};

const Component: FC<Props> = () => {
  return <AlternatingTableRow>test</AlternatingTableRow>;
};

export const ComponentName = memo(Component);
