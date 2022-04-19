import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { DeviceType } from '../../providers/ViewportProvider';

export const useStyles = makeStyles<Theme, { device: DeviceType }>(
  (theme: Theme) => ({
    root: ({ device }) => ({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100%',
      margin: device === DeviceType.Phone ? '20px 0' : '-20px 0',
    }),
  })
);
