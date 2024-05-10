import { FC, memo } from 'react';
import { Button, Typography } from '@mui/material';

import Image from 'next/image';
import { usePokemonPayload } from 'hook';
import { useGlobalEvent } from 'hook/use-global-event';

type Props = { label?: string; url?: string };

const Component: FC<Props> = ({ label, url }) => {
  const { getAbilitiesUrl } = usePokemonPayload();
  const { onTogglePokemonAbilityDialog } = useGlobalEvent();

  const handleToggleAbilityDialog = () => {
    getAbilitiesUrl(url || '');
    onTogglePokemonAbilityDialog(true);
  };

  return (
    <Button
      sx={{ borderRadius: '20px', px: 3 }}
      variant="contained"
      onClick={handleToggleAbilityDialog}
    >
      <Image
        src={`/images/icon/pokeball_icon4.png`}
        alt="pokeball-icon"
        width={25}
        height={25}
      />
      <Typography>{label || 'abilities'}</Typography>
    </Button>
  );
};

export const AbilitiesButton = memo(Component);
