import { FC, memo } from 'react';
import { Box, TableCell, TableRow, Typography } from '@mui/material';
import { AbilitiesButton } from 'component/Pokemon/Abilities';
import { CommonTypeDataWithUrl } from 'global-types';
import { FlexBox } from 'component/BoxLayout/Boxes';

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
        <FlexBox>
          {rowItemArr?.map((item, index) => (
            <FlexBox ml={1} mt={1} key={index}>
              <AbilitiesButton
                key={index}
                label={item?.label}
                url={item?.url}
              />
            </FlexBox>
          ))}
        </FlexBox>
      </TableCell>
    </TableRow>
  );
};

export const TableRowArrayData = memo(Component);
