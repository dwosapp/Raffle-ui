import { RaffleMetaData } from '../lib/types';
import { TESTING } from './misc';

const testWhitelist = new Map<string, RaffleMetaData>([
  [
    '79R8axdTSq6kWjiuavudBvQxaYYbR1nzHH9NNHNyS8FV',
    { name: 'DWOS Gen-1 #421' },
  ]
]);

const prodWhitelist = new Map<string, RaffleMetaData>([
  [
    '79R8axdTSq6kWjiuavudBvQxaYYbR1nzHH9NNHNyS8FV',
    {
      name: 'DWOS Gen-1 #421',
      overviewImageUri: '/resources/solana-logo.gif',
    },
  ]
]);

export const RAFFLES_WHITELIST = TESTING
  ? testWhitelist
  : prodWhitelist;
