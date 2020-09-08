import WalletConnectProvider from '@walletconnect/web3-provider';
import Fortmatic from 'fortmatic';
import Torus from '@toruslabs/torus-embed';
import Authereum from 'authereum';
import UniLogin from '@unilogin/provider';
import MewConnect from '@myetherwallet/mewconnect-web-client';

export const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: '1b9a912e0233469ebd1a9de3696227a4', // required
    },
  },
  fortmatic: {
    package: Fortmatic, // required
    options: {
      key: 'pk_live_B853BB3433E80B5B', // required
    },
  },
  torus: {
    package: Torus, // required
  },
  authereum: {
    package: Authereum, // required
  },
  unilogin: {
    package: UniLogin, // required
  },
  mewconnect: {
    package: MewConnect, // required
    options: {
      infuraId: '1b9a912e0233469ebd1a9de3696227a4', // required
    },
  },
};

export const infuraId = '1b9a912e0233469ebd1a9de3696227a4';

export const contractAddress = '0xcd4480f9a8dec09be96e521d816ab875dbb8c133';
export const contractDeployedNetwork = 'ROPSTEN';
