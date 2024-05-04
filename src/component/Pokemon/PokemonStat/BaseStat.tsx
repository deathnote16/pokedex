import { FC, memo, useMemo } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow
} from '@mui/material';
import { FlexBox } from 'component/BoxLayout/Boxes';
import { convertStatName, convertStatPercentageString } from 'utils';
import { usePokemonData } from 'hook';
import { statColor } from 'utils';

type Props = {};

const Component: FC<Props> = ({}) => {
  const { pokeStats } = usePokemonData();

  return (
    <TableContainer>
      <Table>
        <TableBody>
          {pokeStats?.map((stats, index) => (
            <TableRow key={index} sx={{ padding: 0 }}>
              <TableCell width={'5%'}>
                <Typography fontWeight={500}>
                  {`${convertStatName(stats?.stat?.name)?.toUpperCase()}:`}
                </Typography>
              </TableCell>
              <TableCell width={'95%'}>
                <FlexBox flexDirection={'row'}>
                  {stats?.base_stat && (
                    <Box
                      sx={{
                        width: `${convertStatPercentageString(
                          stats?.base_stat
                        )}%`,
                        height: '20px',
                        background: statColor(stats?.base_stat)
                      }}
                    />
                  )}

                  <Typography ml={1}> {stats?.base_stat}</Typography>
                </FlexBox>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export const BaseStat = memo(Component);
