import { Theme, alpha } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
  walletConnectButton: {
    width: '100%',
    backgroundColor: '#6435C9',
    fontFamily: "Sora",
    '&:hover': {
      backgroundColor: '#6435C9',
    },
  },
  walletDisconnectButton: {
    width: '100%',
    backgroundColor: '#6435C9',
    fontFamily: "Sora",
  
    '&:hover': {
      backgroundColor: '#6435C9',
    },
  },
}));
