import React, { FC, Fragment, memo } from 'react';
import { AppBar, Box } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';
import { subNavigationPath } from 'constant/routing-links/sub-navigation';
import { FlexBoxRow } from 'component/BoxLayout/Boxes';
import { ResponsiveBoldTypography } from 'component/typography';
import { customColor } from 'component/theme';

const BoxNav = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '150px',
  padding: '0.5rem',
  background: customColor.primary.main,
  borderLeft: `1px solid ${customColor.secondary.main}`,
  borderRight: `1px solid ${customColor.secondary.main}`,
  cursor: 'pointer',
  '&:hover': { background: 'white' }
});

type Props = {};

const Component: FC<Props> = ({}) => {
  return (
    <Fragment>
      <AppBar position="static" color="secondary">
        <FlexBoxRow justifyContent={'center'} padding={0}>
          {subNavigationPath.map((path, index) => (
            <BoxNav key={index}>
              <Image
                src={path.icon || ''}
                alt="pokemon-img"
                width={25}
                height={25}
              />
              <ResponsiveBoldTypography fontSize={'16px'} color={'secondary'}>
                {path.title}
              </ResponsiveBoldTypography>
            </BoxNav>
          ))}
        </FlexBoxRow>
      </AppBar>
    </Fragment>
  );
};

export const SubNavigationBar = memo(Component);
