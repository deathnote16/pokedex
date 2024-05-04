import { FC, memo } from 'react';
import { Card, capitalize } from '@mui/material';
import { FlexBoxRow } from 'component/BoxLayout/Boxes';
import { ResponsiveTypography } from 'component/typography';
import Image from 'next/image';

type Props = {
  iconUrl?: string;
  optionName: string;
  onHandleClick: () => void;
};

const Component: FC<Props> = ({ optionName, iconUrl, onHandleClick }) => {
  return (
    <Card elevation={0}>
      <div onClick={onHandleClick}>
        <FlexBoxRow
          sx={{
            padding: '1rem',
            alignItems: 'center'
          }}
        >
          {iconUrl && (
            <Image src={iconUrl} width={25} height={25} alt={'img-option'} />
          )}
          <ResponsiveTypography fontWeight={700} ml={1}>
            {capitalize(optionName) || ''}
          </ResponsiveTypography>
        </FlexBoxRow>
      </div>
    </Card>
  );
};

export const OptionCard = memo(Component);
