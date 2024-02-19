import {
  Box,
  Button,
  ButtonGroup,
  Card,
  IconButton,
  Paper,
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

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '0.5rem',
        minHeight: '100px'
      }}
    >
      <FlexRowBox mb={0.5}>
        <Typography fontWeight={700} mr={1}>
          Type:
        </Typography>
        <ButtonGroup variant="contained">
          {pokemonType?.map((pokeType, index) => (
            <Button
              key={index}
              color="primary"
              size="small"
              sx={{
                backgroundColor: typeColor(pokeType?.type?.name),
                fontWeight: 700,
                fontSize: '14px',
                height: '20px'
              }}
            >
              {capitalize(pokeType?.type?.name) ?? ''}
            </Button>
          ))}
        </ButtonGroup>
      </FlexRowBox>
      <Box>
        <FlexRowBox mb={0.5}>
          <Typography fontWeight={700} mr={0.3}>{`Abilities:`}</Typography>
          {pokeAbilities?.map((abilities, index) => (
            <Typography key={index} fontWeight={700}>{`| ${capitalize(
              abilities?.ability?.name
            )} |`}</Typography>
          ))}
        </FlexRowBox>
        <Typography fontWeight={700} mb={0.5}>{`Weight: ${fixKg(
          weight || 0
        )} kg`}</Typography>
        <Typography fontWeight={700}>{`Height: ${convertDmToFoot(
          height || 0
        )} ft`}</Typography>
      </Box>
    </Card>
  );
};

export const PokeGeneralInfo = React.memo(Component);
