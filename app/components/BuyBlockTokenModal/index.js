/**
 *
 * BuyBlockTokenModal
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react';

function BuyBlockTokenModal({
  openBuyBlockToken,
  setOpenBuyBlockToken,
  setBuyBlockTokenData,
  resetBuyBlockTokenData,
  buyBlockTokenData,
  buyBlockTokenLoading,
  buyBlockTokens1,
  buyBlockTokens2,
  buyBlockTokens3,
  buyBlockTokens4,
}) {
  console.log('buyBlockTokenData: ', buyBlockTokenData);

  const handleBuyBlockTokens = event => {
    setBuyBlockTokenData({
      ...buyBlockTokenData,
      tokenAmount: event.target.value,
    });
  };

  const closeBuyBlockTokensModel = () => {
    if (!buyBlockTokenLoading) {
      resetBuyBlockTokenData();
      setOpenBuyBlockToken(false);
    }
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    setOpenBuyBlockToken(false);

    if (buyBlockTokenData.block === 1) {
      buyBlockTokens1();
    }
    if (buyBlockTokenData.block === 2) {
      buyBlockTokens2();
    }
    if (buyBlockTokenData.block === 3) {
      buyBlockTokens3();
    }
    if (buyBlockTokenData.block === 4) {
      buyBlockTokens4();
    }
  };

  return (
    <Modal
      basic
      onClose={() => closeBuyBlockTokensModel()}
      onOpen={() => setOpenBuyBlockToken(true)}
      open={openBuyBlockToken}
      size="small"
    >
      <Header icon>
        {/* <Icon name="archive" /> */}
        BUY BLOCK {buyBlockTokenData.block} TOKEN
      </Header>
      <Modal.Content>
        <Form
          inverted
          autoComplete="off"
          onSubmit={event => handleFormSubmit(event)}
        >
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Block Tokens to Buy For Ethereum*"
              placeholder="Block Tokens to Buy For Ethereum"
              value={buyBlockTokenData.tokenAmount}
              id="tokenAmount"
              type="number"
              step={0.0001}
              min={0.0001}
              max={1000000}
              onChange={event => handleBuyBlockTokens(event)}
            />
          </Form.Group>
          {buyBlockTokenLoading ? (
            <Form.Button disabled>Loading...</Form.Button>
          ) : (
            <Form.Button>Submit</Form.Button>
          )}
        </Form>
      </Modal.Content>
    </Modal>
  );
}

BuyBlockTokenModal.propTypes = {};

export default memo(BuyBlockTokenModal);
