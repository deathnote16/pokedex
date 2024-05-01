import {
  Box,
  Paper,
  Table,
  TableBody,
  TableContainer,
  Typography
} from '@mui/material';
import { FlexBox } from 'component/BoxLayout/Boxes';
import { TableRowDataCard } from 'component/table';
import { customColor } from 'component/theme';
import { usePokemonData } from 'hook';
import { FC, memo } from 'react';

type Props = {};

const Component: FC<Props> = () => {
  const { pokemonTrainingData } = usePokemonData();

  return (
    <Paper elevation={0} sx={{ background: customColor.primary.main, p: 3 }}>
      <FlexBox>
        <FlexBox flexDirection={'column'}>
          <Box justifyContent={'flex-start'} width={'100%'}>
            <Typography
              variant="h4"
              fontWeight={600}
            >{`Training Info`}</Typography>
          </Box>
        </FlexBox>
      </FlexBox>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRowDataCard
              rowHeader={pokemonTrainingData?.ev_yield.label}
              rowItem={pokemonTrainingData?.ev_yield?.data}
            />
            <TableRowDataCard
              rowHeader={pokemonTrainingData?.base_exp.label}
              rowItem={pokemonTrainingData?.base_exp?.data}
            />
            <TableRowDataCard
              rowHeader={pokemonTrainingData?.base_happiness.label}
              rowItem={pokemonTrainingData?.base_happiness?.data}
            />
            <TableRowDataCard
              rowHeader={pokemonTrainingData?.capture_rate.label}
              rowItem={pokemonTrainingData?.capture_rate?.data}
            />
            <TableRowDataCard
              rowHeader={pokemonTrainingData?.growth_rate.label}
              rowItem={pokemonTrainingData?.growth_rate?.data}
            />
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export const PokemonTrainingInfo = memo(Component);
