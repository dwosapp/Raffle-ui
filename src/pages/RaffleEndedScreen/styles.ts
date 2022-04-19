import { Theme } from '@material-ui/core';
import { makeStyles, alpha } from '@material-ui/core/styles';

import { DeviceType } from '../../providers/ViewportProvider';

export const useStyles = makeStyles<Theme, { device: DeviceType }>(
  (theme: Theme) => ({
    root: {
      width: '100%',
      height: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    topSection: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      fontWeight: 'bold',
    },
    raffleTitle: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      justifyItems: 'space-between',
    },
    raffleSubtitle: {
      color: 'black',
      marginLeft: '10px',
    },
    leftTitleSection: {
      paddingLeft: '20px',
      width: '10%',
      display: 'flex',
    },
    middleTitleSection: {
      width: '90%',
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
    },
    rightTitleSection: {
      width: '10%',
    },
    backButton: {
      color: 'black',
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    backButtonIcon: {},
    mainContent: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    prizesSection: {
      width: '70%',
      display: 'flex',
      flexDirection: 'column',
      paddingRight: '20px',
      minHeight: '450px',
      justifyContent: 'center',
      alignItems: 'center',
    },
    prizesHeader: {
      marginBottom: '10px',
    },
    seeAllPrizesButton: {
      marginLeft: '5px',
      color: theme.palette.secondary.main,
      textTransform: 'initial',
      '&:hover': {
        textShadow: `0px 0px 5px ${theme.palette.secondary.main}`,
        backgroundColor: 'transparent',
        textDecoration: 'none',
      },
    },
    detailsSection: ({ device }) => ({
      paddingTop: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      width: '30%',
      minWidth: device === DeviceType.Phone ? '256px' : '313px',
      maxWidth: device === DeviceType.Phone ? '380px' : '380px',
      maxHeight: '500px',
    }),
    actionSectionContainer: {
      width: '100%',
    },
    totalTickets: {
      marginRight: '80px',
    },
    prizeGallerySection: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    scrollIcon: {
      color: theme.palette.common.white,
      transform: `rotate(90deg)`,
      fontSize: '50px',
      opacity: '0.6',
      marginTop: '20px',
      marginBottom: '60px',
    },
    spacer: {
      width: '100%',
      height: '15px',
    },
    topSectionPhone: {
      width: '100%',
      display: 'inline-block',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    raffleSubtitlePhone: {
      color: 'black',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      justifyItems: 'space-between',
    },
    leftTitleSectionPhone: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    middleTitleSectionPhone: {
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
    },
    rightTitleSectionPhone: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '5px',
    },
  })
);
