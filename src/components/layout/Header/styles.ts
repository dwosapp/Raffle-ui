import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { DeviceType } from '../../../providers/ViewportProvider';

export const useStyles = makeStyles<Theme, { device: DeviceType }>(
  (theme: Theme) => ({
    root: ({ device }) => ({
      width: '100%',
      height: device === DeviceType.Phone ? '50px' : '90px',
    }),
    drawerHeader: () => ({
      width: '100%',
      height: '50px',
      display: 'flex',
      justifyContent: 'space-between',
      padding: theme.spacing(0, 1),
    }),
    appBar: ({ device }) => ({
      height: device === DeviceType.Phone ? '50px' : '90px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      alignItems: 'center',
      zIndex: 99
    }),
    navContainer: {
      display: 'flex',
      alignItems: 'center',
      marginRight: '30px',
    },
    homeButton: () => ({
      marginLeft: '30px',
      color: theme.palette.primary.dark,
      '&:hover': {
        backgroundColor: 'transparent',
      },
    }),
    navButtons: {
      marginLeft: '30px',
      color: theme.palette.primary.main,
      '&:hover': {
        textShadow: '0px 0px 0px #e86bff',
        backgroundColor: 'transparent',
      },
    },
    homeButtonIcon: {
      height: '90px',
      color: theme.palette.primary.main,
    },
    homeButtonIconPhone: {
      height: '50px',
    },
    walletButtonContainer: {
      marginLeft: '20px',
    },
    currentLocation: {
      color: 'black',
    },
  })
);