import { FC, ReactNode, memo } from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableContainer,
  Typography
} from '@mui/material';
import { FlexBox } from 'component/BoxLayout/Boxes';
import { customColor } from 'component/theme';

type Props = { infoHeaderName?: string; children: ReactNode };

const Component: FC<Props> = ({ infoHeaderName = 'Pokemon', children }) => {
  return (
    <Paper elevation={0} sx={{ background: customColor.primary.main, p: 3 }}>
      <FlexBox>
        <FlexBox flexDirection={'column'}>
          <Box justifyContent={'flex-start'} width={'100%'}>
            <Typography variant="h4" fontWeight={600}>
              {infoHeaderName}
            </Typography>
          </Box>
        </FlexBox>
      </FlexBox>
      <TableContainer>
        <Table>
          <TableBody>{children}</TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export const PokemonInfoTableLayout = memo(Component);
