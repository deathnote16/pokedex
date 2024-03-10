import { FC, memo } from 'react';
import { Box, Drawer, List, styled } from '@mui/material';
import { FlexBoxRow } from 'component/BoxLayout/Boxes';
import { ResponsiveBoldTypography } from 'component/typography';
import { subNavigationPath } from 'constant/routing-links/sub-navigation';
import Image from 'next/image';
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

const Component: FC<Props> = () => {
  return (
    <Drawer open={true} onClose={() => {}}>
      <List>
        <FlexBoxRow justifyContent={'center'} padding={0}>
          {subNavigationPath.map((path, index) => (
            <BoxNav key={index}>
              <Image
                src={path.icon || ''}
                alt="pokemon-img"
                width={40}
                height={40}
              />
              <ResponsiveBoldTypography color={'secondary'}>
                {path.title}
              </ResponsiveBoldTypography>
            </BoxNav>
          ))}
        </FlexBoxRow>
      </List>
    </Drawer>
  );
};

export const SubNavigationDrawer = memo(Component);
