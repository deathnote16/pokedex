import { Box, Tab, Tabs } from '@mui/material';
import { FC, memo, useState } from 'react';

type Props = {};

const Component: FC<Props> = () => {
  const [selectedTabs, setSelectedTabs] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTabs(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={selectedTabs}
        onChange={handleChange}
        aria-label="Pokemon Move Tabs"
        variant="fullWidth"
        textColor="secondary"
        indicatorColor="secondary"
      >
        <Tab label="Level Moves" />
        <Tab label="Egg Moves" />
        <Tab label="Machine Moves" />
        <Tab label="Tutor Moves" />
      </Tabs>
    </Box>
  );
};

export const MoveTabs = memo(Component);
