import { FC, memo, useMemo } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper
} from '@mui/material';
import { FlexBox } from 'component/BoxLayout/Boxes';
import {
  convertDmToFoot,
  convertStatName,
  convertStatPercentageString,
  fixKg,
  removeEscapeSequence
} from 'utils';
import { usePokemonData } from 'hook';
import { statColor } from 'utils';
import { customColor } from 'component/theme';
import { TableRowDataCard } from 'component/table';

type Props = {};

const Component: FC<Props> = ({}) => {
  const { pokedexData } = usePokemonData();

  return (
    <Paper elevation={0} sx={{ background: customColor.primary.main, p: 3 }}>
      <FlexBox>
        <FlexBox flexDirection={'column'}>
          <Box justifyContent={'flex-start'} width={'100%'}>
            <Typography
              variant="h4"
              fontWeight={600}
            >{`Pokedex Entry`}</Typography>
          </Box>
        </FlexBox>
      </FlexBox>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRowDataCard
              rowHeader={pokedexData?.national_no?.name}
              rowItem={pokedexData?.national_no?.data}
            />
            <TableRowDataCard
              rowHeader={pokedexData?.height?.name}
              rowItem={`${convertDmToFoot(pokedexData?.height?.data)} ft`}
            />
            <TableRowDataCard
              rowHeader={pokedexData?.weight?.name}
              rowItem={`${fixKg(pokedexData?.weight?.data)} kg`}
            />
            <TableRowDataCard
              rowHeader={pokedexData?.genus?.name}
              rowItem={
                pokedexData?.genus?.data && pokedexData?.genus?.data[0].genus
              }
            />
            <TableRowDataCard
              rowHeader={pokedexData?.color?.name}
              rowItem={pokedexData?.color?.data?.name}
            />
            <TableRowDataCard
              rowHeader={pokedexData?.generation?.name}
              rowItem={pokedexData?.generation?.data?.name}
            />
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export const PokeDexEntry = memo(Component);
