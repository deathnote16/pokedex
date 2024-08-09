import { FC, Fragment, memo } from 'react';
import { SearchBar } from './SearchBar';
import { Backdrop, Box, Slide } from '@mui/material';
import { FlexBoxRow } from 'component/BoxLayout/Boxes';
import { customColor } from 'component/theme';

import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = { isOpen: boolean };

const Component: FC<Props> = ({ isOpen }) => {
  return (
    <Backdrop open={isOpen} sx={{ zIndex: 2 }}>
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: isOpen ? [-600, 0] : -100 // Provide a default value for y when isOpen is false
        }}
        transition={{ type: 'spring', bounce: 0.5, duration: 1 }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Box
            sx={{
              borderRadius: '50%',
              padding: '1.5rem',
              background: customColor.primary.main,
              zIndex: 1
            }}
          >
            <Image
              style={{ zIndex: 2 }}
              src={`/images/icon/pokeball_icon3.png`}
              alt="pokemon-img"
              width={120}
              height={100}
            />
          </Box>
          <FlexBoxRow
            sx={{
              background: customColor.primary.main,
              padding: '1rem',
              marginLeft: -4
            }}
          >
            <SearchBar />
          </FlexBoxRow>
        </Box>
      </motion.div>
    </Backdrop>
  );
};

export const SearchBarDialog = memo(Component);
