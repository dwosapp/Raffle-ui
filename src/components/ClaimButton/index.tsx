import { FC, useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import { cloneDeep } from 'lodash';

import { Prize } from '../../lib/types';
import useCommonStyles from '../../assets/styles';
import { useStyles } from './styles';
import ReactiveButton from 'reactive-button';

interface ClaimButtonProps {
  prize: Prize;
  prizeIndex: number;
  ticketIndex: number;
  claimPrize: (prizeIndex: number, ticketIndex: number) => Promise<void>;
}

const ClaimButton: FC<ClaimButtonProps> = ({
  prize,
  prizeIndex,
  ticketIndex,
  claimPrize,
}) => {
  const classes = { ...useCommonStyles(), ...useStyles() };
  const [claimOngoing, setClaimOngoing] = useState(new Map<number, boolean>());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.root}>
      <ReactiveButton className={classes.rbutton}
        style={{ fontFamily: "Sora", borderRadius: '5px', width: '100%' }}
        color={'violet'}
        width={'100%'}
        idleText={'Claim Your Prize'}
        size={'normal'}
        onClick={async () => {
          setClaimOngoing((state) => cloneDeep(state.set(prizeIndex, true)));
          await claimPrize(prizeIndex, ticketIndex);
          setClaimOngoing((state) => cloneDeep(state.set(prizeIndex, false)));
        }}
        disabled={prize.amount.isZero() || !!claimOngoing.get(prizeIndex)}
      >
        <div className={classes.claimButtonContent}>
          {!!claimOngoing.get(prizeIndex) ? (
            <>
              <div className={classes.claimButtonContentLeft}>
                <CircularProgress size={20} className={classes.claimSpinner} />
              </div>
              <div className={classes.claimButtonContentMiddle}>
                Processing...
              </div>
              <div className={classes.claimButtonContentRight} />
            </>
          ) : (
            <>Claim</>
          )}
        </div>
      </ReactiveButton>
    </div>
  );
};

export default ClaimButton;
