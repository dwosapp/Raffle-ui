export const wrappedSOL = 'So11111111111111111111111111111111111111112';

const tokenRegistry = {
  So11111111111111111111111111111111111111112: {
    chainId: 101,
    address: wrappedSOL,
    symbol: 'SOL',
    name: 'SOL',
    decimals: 9,
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
    tags: [],
    extensions: {
      website: 'https://solana.com/',
      serumV3Usdc: '9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT',
      serumV3Usdt: 'HWHvQhFmJB3NUcu1aihKmrKegfVxBEHzwVX6yZCKEsi1',
      coingeckoId: 'solana',
      imageURI: '/resources/solana-logo.gif',
    },
  },
  'tDWgfue1v4JNMHmgxi7Qd2xzNpLhGFhaghcwAvnsYsv': {
    chainId: 101,
    address: 'tDWgfue1v4JNMHmgxi7Qd2xzNpLhGFhaghcwAvnsYsv',
    symbol: 'tDWOS',
    name: '$t',
    decimals: 4,
    logoURI: '/resources/tdwos.png',
    tags: []
  },
  'gDWFpMSB8JFVn4NNjiP9Y9EfKTtJ3M5dpUusKuS4mFn': {
    chainId: 101,
    address: 'gDWFpMSB8JFVn4NNjiP9Y9EfKTtJ3M5dpUusKuS4mFn',
    symbol: 'gDWOS',
    name: '$g',
    decimals: 4,
    logoURI: '/resources/gdwos.png',
    tags: []
  }
};

export const tokenInfoMap = new Map(Object.entries(tokenRegistry));

export const UNKNOWN_TOKEN_INFO = {
  chainId: 101,
  symbol: '???',
  name: 'Unkown token',
  decimals: 0,
  logoURI:
    'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9nusLQeFKiocswDt6NQsiErm1M43H2b8x6v5onhivqKv/logo.png',
  tags: [],
  extensions: {},
};
