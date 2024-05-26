import { TableCell, TableRow, Typography } from '@mui/material';
import { FC, memo } from 'react';

type Props = { rowHeader?: string; rowItem?: string | number | any[] };

const Component: FC<Props> = ({ rowHeader, rowItem }) => {
  return (
    <TableRow sx={{ padding: 0 }}>
      <TableCell sx={{ padding: 1 }}>
        <Typography fontWeight={500}>{`${rowHeader}:`}</Typography>
      </TableCell>
      {Array.isArray(rowItem) && rowItem?.length > 0 ? (
        rowItem.map((item, index) => (
          <TableCell key={index} sx={{ background: 'yellow' }}>
            <Typography>{item}</Typography>
          </TableCell>
        ))
      ) : (
        <TableCell sx={{ padding: 1 }}>
          <Typography>{rowItem}</Typography>
        </TableCell>
      )}
    </TableRow>
  );
};

export const TableRowDataCard = memo(Component);
