import { RaffleMetaData } from '../lib/types';
import { TESTING } from './misc';

const testWhitelist = new Map<string, RaffleMetaData>([
  [
    '6FDKAphG1GCCXrVDfSZ3K8SdYw5yXMfkUj94GSe7zWji',
    { name: 'Golden Box #245' },
  ],
  [
    '79R8axdTSq6kWjiuavudBvQxaYYbR1nzHH9NNHNyS8FV',
    { name: 'DWOS Gen-1 #421' },
  ],
  [
    'F3Kb2ExBBZ4UnaxBjAXT8mbS6nrAZXWZMyuMhRJvseDB',
    { name: 'PSY Network | PlanetZ #4214' },
  ],
  [
    '5JgAgpWnd9wNcZKwhJvTEbnmZwCEMLsu1LvbCfXBwFvs',
    { name: 'x100 your $t',
    overviewImageUri: '/resources/tdwos.png',
    },
  ],
  [
    '5Zz6xR1CPgQWayue4Tw6yuzwZu1h3Fum3UjXLD3dfVbM',
    { name: '10,000 $skull',
    overviewImageUri: '/resources/skull.png',
    },
  ],
  [
    'E8ABLssWnJ4GDMSJqt3vPyqehFSsDCvEoVvSCVzMR4ag',
    { name: 'Moodies #129' },
  ],
  [
    '85jUSBeKw9wV3KgNydLchGGHvBZF4eMREVBJV8ssWfUN',
    { name: 'x100 your $t (2)',
    overviewImageUri: '/resources/tdwos.png',
    },
  ],
  [
    'BwAhxPpBmwMDiYXN4goz7TSyRRckNsFkHw3JxKzDp5pM',
    { name: 'DWOS Gen-1 #186 and $t' },
  ],
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
