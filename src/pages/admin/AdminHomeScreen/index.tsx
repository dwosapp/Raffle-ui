import { Card, Grid, Typography } from '@material-ui/core';
import { useWallet } from '@solana/wallet-adapter-react';
import { FC } from 'react';
import { useHistory } from 'react-router';

import Screen from '../../../components/layout/Screen';
import WalletButton from '../../../components/layout/WalletButton';
import Spacer from '../../../components/Spacer';
import { useRafflesStore } from '../../../hooks/useRafflesStore';
import { routes } from '../../../router/routes';
import { useStyles } from './styles';


const AdminHomeScreen: FC = () => {
  const classes = useStyles();
  const { connected } = useWallet();
  const { push } = useHistory();
  const { raffles } = useRafflesStore();


  return (
    <div className={classes.root}>
      {connected ? (
        <>
          <Spacer height={'20px'} />
          <Typography variant="h3" style={{ color: 'black' }}>Ongoing raffles</Typography>
          <Spacer height={'20px'} />
          <Grid container spacing={1} className={classes.raffleGrid}>
            {[...raffles.values()]
              .filter((raffle) => new Date() <= raffle.endTimestamp)
              .map((raffle) => (
                <Grid
                  item
                  xs={3}
                  spacing={3}
                  className={classes.raffleGridItem}
                >
                  <Card
                    className={classes.raffleCard}
                    onClick={() =>
                      push(`${routes.ADMIN.RAFFLES}/${raffle.publicKey}`)
                    }
                  >
                    <Typography>{raffle.metadata.name}</Typography>
                    <Typography>
                      <Typography>
                        {raffle.endTimestamp.toISOString()}
                      </Typography>
                    </Typography>
                  </Card>
                </Grid>
              ))}
          </Grid>
          <Spacer height={'50px'} />
          <Typography variant="h3" style={{ color: 'black' }}>Ended raffles</Typography>
          <Spacer height={'20px'} />
          <Grid container spacing={1} className={classes.raffleGrid}>
            {[...raffles.values()]
              .filter((raffle) => new Date() > raffle.endTimestamp)
              .map((raffle) => (
                <Grid
                  key={raffle.publicKey.toString()}
                  item
                  xs={2}
                  spacing={2}
                  className={classes.raffleGridItem}
                >
                  <Card
                    className={classes.raffleCard}
                    onClick={() =>
                      push(`${routes.ADMIN.RAFFLES}/${raffle.publicKey}`)
                    }
                  >
                    <Typography>{raffle.metadata.name}</Typography>
                    <Typography>{raffle.endTimestamp.toISOString()}</Typography>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </>
      ) : (
        <>
          <Typography variant="h3" style={{ color: 'black' }}>
            Connect with an admin wallet to unlock admin panel
          </Typography>
          <div className={classes.walletButtonContainer}>
            <WalletButton />
          </div>
        </>
      )}
    </div>
  );
};

const AdminHomeScreenWithLayout = () => (
  <Screen>
    <AdminHomeScreen />
  </Screen>
);

export default AdminHomeScreenWithLayout;
