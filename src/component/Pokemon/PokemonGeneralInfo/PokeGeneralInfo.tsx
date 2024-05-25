import { Box, Button, ButtonGroup, Card } from '@mui/material';
import { Ability, Type } from 'modules/pokemon/types';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { capitalize } from 'lodash';
import { PokeColor, pokemonColorTypesArray } from 'constant';
import { styled } from '@mui/system';
import { convertDmToFoot, fixKg } from 'utils';
import { modules } from 'modules';
import CloseIcon from '@mui/icons-material/Close';
import { ResponsiveTypography } from 'component/typography';

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
        return capitalize(ability?.ability?.name);
      })
      .join(', ');
    return arrayTypes;
  }, [pokeAbilities]);

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
        minHeight: '100px'
      }}
    >
      <FlexRowBox mb={'1vh'}>
        <ResponsiveTypography mr={1}>Type:</ResponsiveTypography>
        <ButtonGroup variant="contained">
          {pokemonType?.map((pokeType, index) => (
            <Button
              key={index}
              color="primary"
              size="small"
              sx={{
                backgroundColor: typeColor(pokeType?.type?.name),
                color: 'white',
                paddingX: '1rem',
                paddingY: '0.1rem'
              }}
            >
              <ResponsiveTypography fontWeight={700}>
                {pokeType?.type?.name ?? ''}
              </ResponsiveTypography>
            </Button>
          ))}
        </ButtonGroup>
      </FlexRowBox>
      <Box>
        <FlexRowBox mb={'1vh'}>
          <ResponsiveTypography mr={1}>{`Abilities:`}</ResponsiveTypography>
          <ResponsiveTypography fontWeight={'bold'}>
            {extractAbilities}
          </ResponsiveTypography>
        </FlexRowBox>
        <FlexRowBox mb={'1vh'}>
          <ResponsiveTypography
            sx={{ mr: 1 }}
          >{`Weight:`}</ResponsiveTypography>
          <ResponsiveTypography fontWeight={700}>{`${fixKg(
            weight || 0
          )} kg`}</ResponsiveTypography>
        </FlexRowBox>
        <FlexRowBox>
          <ResponsiveTypography
            sx={{ mr: 1 }}
          >{`Height:`}</ResponsiveTypography>
          <ResponsiveTypography fontWeight={700}>{`${convertDmToFoot(
            height || 0
          )} ft`}</ResponsiveTypography>
        </FlexRowBox>
      </Box>
    </Card>
  );
};

export const PokeGeneralInfo = React.memo(Component);
