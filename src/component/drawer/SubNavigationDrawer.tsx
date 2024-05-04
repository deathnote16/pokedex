import { FC, memo } from 'react';
import { Box, Drawer, List, styled } from '@mui/material';
import { FlexBoxColumn, FlexBoxRow } from 'component/BoxLayout/Boxes';
import { ResponsiveBoldTypography } from 'component/typography';
import { subNavigationPath } from 'constant/routing-links/sub-navigation';
import Image from 'next/image';
import { customColor } from 'component/theme';
import { useDrawer } from 'hook/use-drawer';

const BoxNav = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '150px',
  padding: '1rem',
  background: customColor.primary.main,

  cursor: 'pointer',
  '&:hover': { background: 'white' }
});

type Props = {};

const Component: FC<Props> = () => {
  const { isOpenSubNavigationBar, onToggleSubNavigationDrawer } = useDrawer();

  return (
    <Drawer
      PaperProps={{
        sx: {
          backgroundColor: customColor.primary.main
        }
      }}
      open={isOpenSubNavigationBar}
      onClose={onToggleSubNavigationDrawer}
    >
      <List
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <FlexBoxColumn padding={0} margin={0}>
          {subNavigationPath.map((path, index) => (
            <BoxNav key={index}>
              <Image
                src={path.icon || ''}
                alt="pokemon-img"
                width={40}
                height={40}
              />
              <ResponsiveBoldTypography color={customColor.secondary.main}>
                {path.title}
              </ResponsiveBoldTypography>
            </BoxNav>
          ))}
        </FlexBoxColumn>
      </List>
    </Drawer>
  );
};

export const SubNavigationDrawer = memo(Component);
