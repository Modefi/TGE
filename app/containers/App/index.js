/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';

import Web3 from 'web3';
import Web3Modal from 'web3modal';

import { Button, Grid, Segment, Portal } from 'semantic-ui-react';

import GlobalStyle from '../../global-styles';

import Header from '../../components/Header';
import ViewCard from '../../components/ViewCard';
import PresaleEndCountdown from '../../components/PresaleEndCountdown';
import BlockTokens from '../../components/BlockTokens';
import BuyBlockTokenModal from '../../components/BuyBlockTokenModal';
import Footer from '../../components/Footer';

import {
  providerOptions,
  infuraId,
  contractAddress,
  contractDeployedNetwork,
} from '../../utils/config';
import abi from '../../utils/abi.js';

const web3Modal = new Web3Modal({
  // network: contractDeployedNetwork.toLowerCase(), // optional
  cacheProvider: true, // optional
  providerOptions, // required
});

const presaleEndDate = 'September 25, 2020 00:00:00';

export default function App() {
  console.log(
    `HTTP Provider: https://${contractDeployedNetwork.toLowerCase()}.infura.io/v3/${infuraId}`,
  );

  const chainedWeb3 = window.ethereum;

  if (chainedWeb3) {
    chainedWeb3.on('networkChanged', networkId => {
      console.log('networkChanged -> networkId -> ', networkId);
      // handle the new network
      setWeb3(null);
      setAddress(null);
      setProvider(null);
      // window.location.reload();
    });

    chainedWeb3.on('accountsChanged', account => {
      console.log('accountsChanged -> account -> ', account);
      // handle the new network
      setWeb3(null);
      setAddress(null);
      setProvider(null);
      // window.location.reload();
    });
  }
  const [address, setAddress] = React.useState(null);
  const [provider, setProvider] = React.useState(
    new Web3.providers.HttpProvider(
      `https://${contractDeployedNetwork.toLowerCase()}.infura.io/v3/${infuraId}`,
    ),
  );
  const [web3, setWeb3] = React.useState(new Web3(provider));

  const [portalState, setPortalState] = React.useState(false);

  const handleClose = () => setPortalState(false);

  const [contract, setContract] = React.useState(null);

  const [contractViewData, setContractViewData] = React.useState({
    presaleContract: contractAddress,
    etherDepositedInBlock1: 0,
    etherDepositedInBlock2: 0,
    etherDepositedInBlock3: 0,
    etherDepositedInBlock4: 0,
    tokensInvested: 0,
    tokensleft: 0,
  });

  const [blockTokensLeft, setBlockTokensLeft] = React.useState({
    0: '0',
    1: '0',
    2: '0',
    3: '0',
  });

  const [openBuyBlockToken, setOpenBuyBlockToken] = React.useState(false);

  const [buyBlockTokenData, setBuyBlockTokenData] = React.useState({
    block: null,
    tokenAmount: 0.0001,
  });

  const resetBuyBlockTokenData = () => {
    setBuyBlockTokenData({
      block: null,
      tokenAmount: 0.0001,
    });
  };

  const [buyBlockTokenLoading, setBuyBlockTokenLoading] = React.useState(false);

  const resetApp = async () => {
    if (web3 && web3.currentProvider && web3.currentProvider.close) {
      await web3.currentProvider.close();
    }
    await web3Modal.clearCachedProvider();
    setAddress(null);
    setWeb3(null);
    setProvider(null);
  };

  const subscribeProvider = async (provider, web3) => {
    if (!provider.on) {
      return;
    }
    provider.on('close', () => resetApp(web3));
    provider.on('accountsChanged', async accounts => {
      setAddress(accounts[0]);
    });
  };

  const onConnect = async () => {
    const provider = await web3Modal.connect();
    const web3 = await new Web3(provider);
    // const web3 = await new Web3(window.web3.currentProvider);
    const network = await web3.eth.net.getNetworkType();
    console.log('web3: ', web3);

    if (network === contractDeployedNetwork.toLowerCase()) {
      await subscribeProvider(provider, web3);
      const accounts = await web3.eth.getAccounts();
      const address = accounts[0];

      setAddress(address);
      setProvider(provider);
      setWeb3(web3);
      setContract(new web3.eth.Contract(abi, contractAddress));
    } else {
      setPortalState(true);
      resetApp();
    }
  };

  React.useEffect(() => {
    if (window.web3) onConnect();
  }, []);

  const getBlockTokensLeft = async () => {
    try {
      const blockTokensLeft = await contract.methods.blockTokensLeft().call();
      setBlockTokensLeft(blockTokensLeft);
      console.log(
        'App -> getBlockTokensLeft -> blockTokensLeft: ',
        blockTokensLeft,
      );
    } catch (err) {
      console.log('App -> getBlockTokensLeft -> blockTokensLeft: err: ', err);
    }
  };

  const getEtherDeposit = async () => {
    try {
      const etherDeposit = await contract.methods.etherDeposit().call();
      setContractViewData({
        ...contractViewData,
        etherDepositedInBlock1: etherDeposit[0],
        etherDepositedInBlock2: etherDeposit[1],
        etherDepositedInBlock3: etherDeposit[2],
        etherDepositedInBlock4: etherDeposit[3],
      });
      console.log('App -> getEtherDeposit -> etherDeposit: ', etherDeposit);
    } catch (err) {
      console.log('App -> getEtherDeposit -> etherDeposit: err: ', err);
    }
  };

  const getTokensInvestedAndLeft = async () => {
    try {
      console.log('address: ', address);
      const tokensInvestedAndLeft = await contract.methods
        .tokensInvestedAndLeft(address)
        .call();
      setContractViewData({
        ...contractViewData,
        tokensInvested: tokensInvestedAndLeft[0],
        tokensLeft: tokensInvestedAndLeft[1],
      });
      console.log(
        'App -> getTokensInvestedAndLeft -> tokensInvestedAndLeft: ',
        tokensInvestedAndLeft,
      );
    } catch (err) {
      console.log(
        'App -> getTokensInvestedAndLeft -> tokensInvestedAndLeft: err: ',
        err,
      );
    }
  };

  const fetchViewData = () => {
    getBlockTokensLeft();
    getEtherDeposit();
    getTokensInvestedAndLeft();
    resetBuyBlockTokenData();
  };

  React.useEffect(() => {
    if (address) {
      fetchViewData();
    }
  }, [contract, address]);

  const buyBlockTokens1 = async () => {
    try {
      console.log(
        'Number(buyBlockTokenData.tokenAmount): ',
        Number(buyBlockTokenData.tokenAmount),
      );

      console.log('contractAddress: ', contractAddress);

      const tokenValue = web3.utils.toWei(
        String(buyBlockTokenData.tokenAmount),
      );

      console.log('tokenValue: ', tokenValue);

      const buyBlockOneTokens = await contract.methods
        .buyBlockOneTokens(tokenValue)
        .send({
          from: address,
          to: contractAddress,
          value: web3.utils.toWei(
            String(buyBlockTokenData.tokenAmount),
            'ether',
          ),
        });
      console.log(
        'App -> buyBlockTokens1: buyBlockOneTokens: ',
        buyBlockOneTokens,
      );

      fetchViewData();
    } catch (err) {
      console.log('App -> buyBlockTokens1: err: ', err);
    }
  };

  const buyBlockTokens2 = async () => {
    try {
      console.log(
        'Number(buyBlockTokenData.tokenAmount): ',
        Number(buyBlockTokenData.tokenAmount),
      );

      const tokenValue = web3.utils.toWei(
        String(buyBlockTokenData.tokenAmount),
      );

      console.log('tokenValue: ', tokenValue);

      const buyBlockTwoTokens = await contract.methods
        .buyBlockTwoTokens(tokenValue)
        .send({
          from: address,
          to: contractAddress,
          value: web3.utils.toWei(
            String(buyBlockTokenData.tokenAmount),
            'ether',
          ),
        });
      console.log(
        'App -> buyBlockTokens2: buyBlockTwoTokens: ',
        buyBlockTwoTokens,
      );

      fetchViewData();
    } catch (err) {
      console.log('App -> buyBlockTokens2: err: ', err);
    }
  };

  const buyBlockTokens3 = async () => {
    try {
      console.log(
        'Number(buyBlockTokenData.tokenAmount): ',
        Number(buyBlockTokenData.tokenAmount),
      );

      const tokenValue = web3.utils.toWei(
        String(buyBlockTokenData.tokenAmount),
      );

      console.log('tokenValue: ', tokenValue);

      const buyBlockThreeTokens = await contract.methods
        .buyBlockThreeTokens(tokenValue)
        .send({
          from: address,
          to: contractAddress,
          value: web3.utils.toWei(
            String(buyBlockTokenData.tokenAmount),
            'ether',
          ),
        });
      console.log(
        'App -> buyBlockTokens3: buyBlockThreeTokens: ',
        buyBlockThreeTokens,
      );

      fetchViewData();
    } catch (err) {
      console.log('App -> buyBlockTokens3: err: ', err);
    }
  };

  const buyBlockTokens4 = async () => {
    try {
      console.log(
        'Number(buyBlockTokenData.tokenAmount): ',
        Number(buyBlockTokenData.tokenAmount),
      );

      const tokenValue = web3.utils.toWei(
        String(buyBlockTokenData.tokenAmount),
      );

      console.log('tokenValue: ', tokenValue);

      const buyBlockFourTokens = await contract.methods
        .buyBlockFourTokens(tokenValue)
        .send({
          from: address,
          to: contractAddress,
          value: web3.utils.toWei(
            String(buyBlockTokenData.tokenAmount),
            'ether',
          ),
        });
      console.log(
        'App -> buyBlockTokens4: buyBlockFourTokens: ',
        buyBlockFourTokens,
      );

      fetchViewData();
    } catch (err) {
      console.log('App -> buyBlockTokens4: err: ', err);
    }
  };

  const claimTokenFirstBlock = async () => {
    try {
      const claimBlockOneTokens = await contract.methods
        .claimTokenFirstBlock()
        .send({ from: address });
      console.log(
        'App -> claimTokenFirstBlock: claimBlockOneTokens: ',
        claimBlockOneTokens,
      );

      fetchViewData();
    } catch (err) {
      console.log('App -> claimTokenFirstBlock: err: ', err);
    }
  };

  const claimTokenSecondBlock = async () => {
    try {
      const claimBlockSecondTokens = await contract.methods
        .claimTokenSecondBlock()
        .send({ from: address });
      console.log(
        'App -> claimTokenSecondBlock: claimBlockSecondTokens: ',
        claimBlockOneTokens,
      );

      fetchViewData();
    } catch (err) {
      console.log('App -> claimTokenSecondBlock: err: ', err);
    }
  };

  const claimTokenThirdBlock = async () => {
    try {
      const claimBlockThirdTokens = await contract.methods
        .claimTokenThirdBlock()
        .send({ from: address });
      console.log(
        'App -> claimTokenThirdBlock: claimBlockThirdTokens: ',
        claimBlockThirdTokens,
      );

      fetchViewData();
    } catch (err) {
      console.log('App -> claimTokenThirdBlock: err: ', err);
    }
  };

  const claimTokenForthBlock = async () => {
    try {
      const claimBlockFourthTokens = await contract.methods
        .claimTokenForthBlock()
        .send({ from: address });
      console.log(
        'App -> claimTokenForthBlock: claimBlockFourthTokens: ',
        claimBlockFourthTokens,
      );

      fetchViewData();
    } catch (err) {
      console.log('App -> claimTokenForthBlock: err: ', err);
    }
  };

  return (
    <div>
      <Header address={address} onConnect={onConnect} />
      <Portal
        onClose={() => handleClose()}
        closeOnTriggerClick
        open={portalState}
      >
        <Segment
          style={{
            left: '40%',
            position: 'fixed',
            top: '1vH',
            zIndex: 1000,
          }}
        >
          <h4>
            Please connect to {contractDeployedNetwork.toLowerCase()} network
          </h4>
        </Segment>
      </Portal>
      <ViewCard contractViewData={contractViewData} address={address} />
      {new Date().getTime() < new Date(presaleEndDate).getTime() && (
        <React.Fragment>
          <PresaleEndCountdown presaleEndDate={presaleEndDate} />
        </React.Fragment>
      )}

      <BlockTokens
        blockTokensLeft={blockTokensLeft}
        openBuyBlockToken={openBuyBlockToken}
        setOpenBuyBlockToken={setOpenBuyBlockToken}
        buyBlockTokenData={buyBlockTokenData}
        setBuyBlockTokenData={setBuyBlockTokenData}
        buyBlockTokenLoading={buyBlockTokenLoading}
        claimTokenFirstBlock={claimTokenFirstBlock}
        claimTokenSecondBlock={claimTokenSecondBlock}
        claimTokenThirdBlock={claimTokenThirdBlock}
        claimTokenForthBlock={claimTokenForthBlock}
        presaleEndDate={presaleEndDate}
      />
      <BuyBlockTokenModal
        openBuyBlockToken={openBuyBlockToken}
        setOpenBuyBlockToken={setOpenBuyBlockToken}
        setBuyBlockTokenData={setBuyBlockTokenData}
        resetBuyBlockTokenData={resetBuyBlockTokenData}
        buyBlockTokenData={buyBlockTokenData}
        buyBlockTokenLoading={buyBlockTokenLoading}
        buyBlockTokens1={buyBlockTokens1}
        buyBlockTokens2={buyBlockTokens2}
        buyBlockTokens3={buyBlockTokens3}
        buyBlockTokens4={buyBlockTokens4}
      />
      <Footer />
      <GlobalStyle />
    </div>
  );
}
