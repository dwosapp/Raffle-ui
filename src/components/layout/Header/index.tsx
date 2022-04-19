import React, { FC, useState } from 'react';
import { AppBar, IconButton } from '@material-ui/core';
import { useWallet } from '@solana/wallet-adapter-react';
import MenuIcon from '@material-ui/icons/Menu';
import { ChevronLeft, Home } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

import { useStyles } from './styles';
import { routes } from '../../../router/routes';
import { useViewport } from '../../../hooks/useViewport';
import { DeviceType } from '../../../providers/ViewportProvider';
import Drawer from '../Drawer';
import WalletButton from '../WalletButton';
import NavButton from '../NavButton';
import { TESTING } from '../../../config/misc';
import { isAdmin } from '../../AdminRoute';

export interface HeaderProps {
  onBackNavigation?: () => void;
}

const NAV_LINKS_LIST = [
  { label: 'Admin Panel', target: routes.ADMIN.HOME, admin: true },
];

const Header: FC<HeaderProps> = ({ onBackNavigation }) => {
  const { device } = useViewport();
  const classes = useStyles({ device });
  const { connected, publicKey } = useWallet();
  const { push, location } = useHistory();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className={classes.root}>
      <div
        style={{
          width: '100%',
          height: device === DeviceType.Phone ? '50px' : '90px',
          background:
            '#F3B8C7',
          backdropFilter: 'blur(3px)',
          zIndex: 98,
        }}
      />
      <AppBar className={classes.appBar} elevation={0}>
        {device === DeviceType.Phone ? (
          <div className={classes.drawerHeader}>
            {onBackNavigation ? (
              <IconButton size={'medium'} onClick={() => onBackNavigation()}>
                <ChevronLeft />
              </IconButton>
            ) : (
              <IconButton
              onClick={() => push(routes.HOME)}
              >
                <img
                  src="/logo.png"
                  alt={'Site banner'}
                  className={classes.homeButtonIconPhone}
                />
              </IconButton>
            )}
            <IconButton size={'medium'} onClick={() => setIsDrawerOpen(true)}>
              <MenuIcon color="primary" />
            </IconButton>
            <Drawer
              wallet={publicKey}
              isOpen={isDrawerOpen}
              setIsOpen={setIsDrawerOpen}
              navLinksList={NAV_LINKS_LIST}
            />
          </div>
        ) : (
          <>
            <div>
              <IconButton
                onClick={() => push(routes.HOME)}
                className={classes.homeButton}
              >
                <img
                  src="/logo.png"
                  alt={'Site banner'}
                  className={classes.homeButtonIcon}
                />
              </IconButton>
            </div>
            <div className={classes.navContainer}>
              {NAV_LINKS_LIST.filter(
                ({ admin }) => !admin || (admin && isAdmin(publicKey))
              ).map(({ label, target }) => (
                <NavButton
                  key={target}
                  label={label}
                  target={target}
                  isCurrent={location.pathname === target}
                  style={{ marginRight: '20px' }}
                />
              ))}
              <div className={classes.walletButtonContainer}>
                <WalletButton />
              </div>
            </div>
          </>
        )}
      </AppBar>
    </div>
  );
};

export default Header;
