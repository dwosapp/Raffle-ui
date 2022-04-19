import React, { FC } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-material-ui';

import { useStyles } from './styles';

const WalletButton: FC = () => {
  const classes = useStyles();
  const { connected } = useWallet();

  return (
    <WalletMultiButton
      className={
        connected ? classes.walletDisconnectButton : classes.walletConnectButton
      }
    />
  );
};

export default WalletButton;
