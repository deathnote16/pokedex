import { TableCell, TableRow, Typography } from '@mui/material';
import { FC, memo } from 'react';

type Props = { rowHeader?: string; rowItem?: string | number | any[] };

const Component: FC<Props> = ({ rowHeader, rowItem }) => {
  return (
    <TableRow sx={{ padding: 0 }}>
      <TableCell>
        <Typography fontWeight={500}>{rowHeader}</Typography>
      </TableCell>
      {Array.isArray(rowItem) && rowItem?.length > 0 ? (
        rowItem.map((item, index) => (
          <TableCell key={index}>
            <Typography>{item}</Typography>
          </TableCell>
        ))
      ) : (
        <TableCell>
          <Typography>{rowItem}</Typography>
        </TableCell>
      )}
    </TableRow>
  );
};

export const TableRowDataCard = memo(Component);
