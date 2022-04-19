import { FC } from 'react';
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router';
import Screen from '../../components/layout/Screen';
import { routes } from '../../router/routes';
import useCommonStyles from '../../assets/styles';
import { useStyles } from './styles';
import { useViewport } from '../../hooks/useViewport';
import { DeviceType } from '../../providers/ViewportProvider';
import ReactiveButton from 'reactive-button';
import Footer from '../../components/layout/Footer';
import Banner from '../../components/layout/Banner/Banner';

const LandingScreen: FC = () => {
  const { device } = useViewport();
  const classes = { ...useCommonStyles(), ...(useStyles({ device }) as any) };
  const { push } = useHistory();

  return (
    <div className={classes.root}>
      <img
        className={device === DeviceType.Phone ? 'banner-small' : 'banner'}
        src="raffle.png"
        alt={'Site banner'}
        width={device === DeviceType.Phone ? '280px' : '600px'}
      />
      <Typography variant="h1" className={classes.titleBar} style={{ fontWeight: 'bold' }}>
      <br></br>  
      </Typography>
      <ReactiveButton
        onClick={() => push(routes.RAFFLES)}
        color={'violet'}
        idleText={'Explore DWOS Raffles'}
        style={{ fontFamily: "Sora", borderRadius: '5px' }}
        size={'normal'}
      />
    </div>
  );
};

const LandingScreenWithLayout = () => (
  <Screen>
    <LandingScreen />     
    <Banner />
    <Footer />
  </Screen>
);

export default LandingScreenWithLayout;
