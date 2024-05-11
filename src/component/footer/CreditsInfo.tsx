import { FC, memo } from 'react';
import { FlexBox } from 'component/BoxLayout/Boxes';
import { Typography } from '@mui/material';
import { customColor } from 'component/theme';

type Props = {};

const Component: FC<Props> = () => {
  return (
    <FlexBox flexDirection={'column'}>
      <Typography textAlign={'center'}>
        {`Pokémon images and resources credited to:
          © 2024 Pokémon. © 1995-2024 Nintendo/Creatures Inc./GAME FREAK inc.
          Pokémon and Pokémon character names are trademarks of Nintendo.
          This website is not affiliated with or endorsed by Nintendo, Creatures, or Game Freak.`}
      </Typography>
      <Typography textAlign={'center'} mt={3}>{`
      Website Design & Development by:
      Angelo Dela Cruz
      © 2024 Angelo Pogi. All rights reserved.`}</Typography>
    </FlexBox>
  );
};

export const CreditsInfo = memo(Component);
