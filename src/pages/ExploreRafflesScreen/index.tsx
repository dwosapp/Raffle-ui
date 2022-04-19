import { FC, useEffect, useMemo, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useWallet } from '@solana/wallet-adapter-react';

import RaffleCard from '../../components/RaffleCard';
import { useStyles } from './styles';
import { useRafflesStore } from '../../hooks/useRafflesStore';
import Screen from '../../components/layout/Screen';
import { Raffle } from '../../lib/types';
import { useViewport } from '../../hooks/useViewport';
import FilterBar from './components/FilterBar';
import { DeviceType } from '../../providers/ViewportProvider';
import Footer from '../../components/layout/Footer';
import Banner from '../../components/layout/Banner/Banner';

const ExploreRafflesScreen: FC = () => {
  const { device } = useViewport();
  const classes = useStyles({ device });
  const { publicKey } = useWallet();
  const { raffles, fetchAllRaffles, fetching } = useRafflesStore();
  const [showOwnRafflesOnly, setShowOwnRafflesOnly] = useState(false);
  const [hideEndedRaffles, setHideEndedRaffles] = useState(false);

  useEffect(fetchAllRaffles, [fetchAllRaffles]);

  const filterMap = useMemo(
    () => ({
      own: (raffle: Raffle) => raffle.entrants.has(publicKey?.toString() || ''),
      ongoing: (raffle: Raffle) => new Date() < raffle.endTimestamp,
    }),
    [publicKey]
  );

  const rafflesToShow = useMemo(() => {
    let toShow = [...raffles.values()].sort(
      (raffle1, raffle2) =>
        raffle2.endTimestamp.getTime() - raffle1.endTimestamp.getTime()
    );
    if (showOwnRafflesOnly) toShow = toShow.filter(filterMap.own);
    if (hideEndedRaffles) toShow = toShow.filter(filterMap.ongoing);
    return toShow;
  }, [raffles, filterMap, showOwnRafflesOnly, hideEndedRaffles]);

  if (raffles.size === 0 && fetching)
    return (
      <>
        <img
          className={device === DeviceType.Phone ? 'banner-small' : 'banner'}
          src="raffle.png"
          alt={'Site banner'}
          width={device === DeviceType.Phone ? '280px' : '600px'}
        />
        <div className={classes.mainContent}>
          <CircularProgress color="secondary" />
        </div>
      </>
    );

  if (raffles.size === 0)
    return (
      <>
        <img
          className={device === DeviceType.Phone ? 'banner-small' : 'banner'}
          src="raffle.png"
          alt={'Site banner'}
          width={device === DeviceType.Phone ? '280px' : '600px'}
        />
        <Typography variant="h4" className={classes.mainContent}>
          More Raffle Pools will be coming soon!
        </Typography>
      </>
    );

  return (
    <>

      <img
        className={device === DeviceType.Phone ? 'banner-small' : 'banner'}
        src="raffle.png"
        alt={'Site banner'}
        width={device === DeviceType.Phone ? '280px' : '600px'}
      />

      <FilterBar
        hideEndedRaffles={hideEndedRaffles}
        setHideEndedRaffles={setHideEndedRaffles}
        setShowOwnRafflesOnly={setShowOwnRafflesOnly}
      />
      {rafflesToShow.length > 0 ? (
        <Grid
          container
          justifyContent={'center'}
          direction={'row'}
          className={classes.rafflesGrid}
        >
          {rafflesToShow
            .filter((r) => r.prizes.length > 0)
            .map((raffle) => (
              <RaffleCard
                key={raffle.publicKey.toString()}
                className={classes.raffleCardContainer}
                raffle={raffle}
              />
            ))}
        </Grid>
      ) : (
        <Typography variant="h4" className={classes.mainContent} style={{ color: '#6435C9' }}>
          No Raffle Pools to display.
        </Typography>
      )}
    </>
  );
};

const ExploreRafflesScreenWithLayout = () => (
  <Screen>
    <ExploreRafflesScreen />  
    <Banner />
    <Footer/>
  </Screen>
);

export default ExploreRafflesScreenWithLayout;
