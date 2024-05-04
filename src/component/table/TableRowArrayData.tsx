import { FC, memo } from 'react';
import { Box, TableCell, TableRow, Typography } from '@mui/material';
import { AbilitiesButton } from 'component/Pokemon/Abilities';
import { CommonTypeDataWithUrl } from 'global-types';

type Props = {
  rowHeader?: string;
  rowItemArr?: CommonTypeDataWithUrl[];
  direction?: 'row' | 'column';
};

const Component: FC<Props> = ({
  rowHeader,
  rowItemArr,
  direction = 'column'
}) => {
  return (
    <TableRow sx={{ padding: 0 }}>
      <TableCell>
        <Typography fontWeight={500}>{`${rowHeader}:`}</Typography>
      </TableCell>
      <TableCell sx={{ display: 'flex', flexDirection: direction }}>
        {rowItemArr?.map((item, index) => (
          <Box ml={1} key={index}>
            <AbilitiesButton label={item?.label} url={item?.url} />
          </Box>
        ))}
      </TableCell>
    </TableRow>
  );
};

export const TableRowArrayData = memo(Component);
