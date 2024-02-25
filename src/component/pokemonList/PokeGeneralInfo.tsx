import {
  Box,
  Button,
  ButtonGroup,
  Card,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tooltip,
  TooltipProps,
  Typography,
  tooltipClasses
} from '@mui/material';
import { Ability, Type } from 'modules/pokemon/types';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { capitalize } from 'lodash';
import { PokeColor, pokemonColorTypesArray } from 'constant';
import { styled } from '@mui/system';
import { convertDmToFoot, fixKg } from 'utils';
import { modules } from 'modules';
import CloseIcon from '@mui/icons-material/Close';

const { useGetPokemonAbilityQuery } = modules.pokemonModule;

const FlexRowBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap'
});

type Props = {
  pokemonType?: Type[];
  pokeAbilities?: Ability[];
  weight?: number;
  height?: number;
};

const Component: React.FC<Props> = ({
  pokemonType,
  pokeAbilities,
  weight,
  height
}) => {
  const typeColor = useCallback((typeName?: string | undefined) => {
    const findTypeColor = pokemonColorTypesArray.find(
      (el?: PokeColor) => typeName === el?.type
    );
    return findTypeColor?.color;
  }, []);

  const extractAbilities = useMemo(() => {
    const arrayTypes = pokeAbilities
      ?.map((ability) => {
        return ability?.ability?.name?.toUpperCase();
      })
      .join(', ');
    return arrayTypes;
  }, [pokeAbilities]);

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '0.5rem',
        minHeight: '100px'
      }}
    >
      <FlexRowBox mb={'1vh'}>
        <Typography mr={1}>Type:</Typography>
        <ButtonGroup variant="contained">
          {pokemonType?.map((pokeType, index) => (
            <Button
              key={index}
              color="primary"
              size="small"
              sx={{
                backgroundColor: typeColor(pokeType?.type?.name),
                fontWeight: 700,
                fontSize: '16px',
                height: '20px',
                color: 'white'
              }}
            >
              {capitalize(pokeType?.type?.name) ?? ''}
            </Button>
          ))}
        </ButtonGroup>
      </FlexRowBox>
      <Box>
        <FlexRowBox mb={'1vh'}>
          <Typography mr={1}>{`Abilities:`}</Typography>
          <Typography fontWeight={700}>{extractAbilities}</Typography>
        </FlexRowBox>
        <FlexRowBox mb={'1vh'}>
          <Typography sx={{ mr: 1 }}>{`Weight:`}</Typography>
          <Typography fontWeight={700}>{`${fixKg(weight || 0)} kg`}</Typography>
        </FlexRowBox>
        <FlexRowBox>
          <Typography sx={{ mr: 1 }}>{`Height:`}</Typography>
          <Typography fontWeight={700}>{`${convertDmToFoot(
            height || 0
          )} ft`}</Typography>
        </FlexRowBox>
      </Box>
    </Card>
  );
};

export const PokeGeneralInfo = React.memo(Component);
