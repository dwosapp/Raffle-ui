import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DeviceType } from '../../providers/ViewportProvider';

export const useStyles = makeStyles<Theme, { device: DeviceType }>(
  (theme: Theme) => ({
    modal: ({ device }) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      width: '100%',
    }),
    content: ({ device }) => ({
      outline: 'none',
      width: '50%',
      minWidth: '250px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 2, 3),
      borderRadius: '10px',
    }),
    header: { width: '100%', display: 'flex', justifyContent: 'flex-end' },
    body: ({ device }) => ({
      width: '100%',
      display: 'flex',
      flexDirection: device === DeviceType.Phone ? 'column' : 'row',
      marginTop: device === DeviceType.Phone ? '5px' : '0',
    }),
    contentLeft: ({ device }) => ({
      width: device === DeviceType.Phone ? '100%' : '50%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px',
    }),
    media: {
      width: '90%',
      borderRadius: '10px',
    },
    contentRight: ({ device }) => ({
      width: device === DeviceType.Phone ? '100%' : '50%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: device === DeviceType.Phone ? 'center' : 'baseline',
      textAlign: device === DeviceType.Phone ? 'center' : 'left',
      justifyContent: 'space-evenly',
      padding:
        device === DeviceType.Phone
          ? theme.spacing(1)
          : theme.spacing(0, 3, 3, 3),
    }),
    ticketButton: {
      marginTop: '10px',
      fontSize: '14px',
      color: 'theme.palette.secondary.main',
    },
  })
);
