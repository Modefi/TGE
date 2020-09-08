/**
 *
 * BlockTokens
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Card, Feed, Button, Loader, Image, Segment } from 'semantic-ui-react';

function BlockTokens({
  blockTokensLeft,
  openBuyBlockToken,
  setOpenBuyBlockToken,
  buyBlockTokenData,
  setBuyBlockTokenData,
  buyBlockTokenLoading,
  claimTokenFirstBlock,
  claimTokenSecondBlock,
  claimTokenThirdBlock,
  claimTokenForthBlock,
  presaleEndDate,
}) {
  const blockTokens = [
    {
      id: 'block1',
      blockNumber: 1,
      header: 'Block 1 Tokens Left',
      description: (Number(blockTokensLeft['0']) / 100000000).toLocaleString(
        'fullwide',
        { useGrouping: false },
      ),
    },
    {
      id: 'block2',
      blockNumber: 2,
      header: 'Block 2 Tokens Left',
      description: (Number(blockTokensLeft['1']) / 100000000).toLocaleString(
        'fullwide',
        { useGrouping: false },
      ),
    },
    {
      id: 'block3',
      blockNumber: 3,
      header: 'Block 3 Tokens Left',
      description: (Number(blockTokensLeft['2']) / 100000000).toLocaleString(
        'fullwide',
        { useGrouping: false },
      ),
    },
    {
      id: 'block4',
      blockNumber: 4,
      header: 'Block 4 Tokens Left',
      description: (Number(blockTokensLeft['3']) / 100000000).toLocaleString(
        'fullwide',
        { useGrouping: false },
      ),
    },
  ];

  const claimTokens = [
    {
      id: 'block1',
      header: 'Claim Block 1 Tokens',
      description: 'CLAIM',
    },
    {
      id: 'block2',
      header: 'Claim Block 2 Tokens',
      description: 'CLAIM',
    },
    {
      id: 'block3',
      header: 'Claim Block 3 Tokens',
      description: 'CLAIM',
    },
    {
      id: 'block4',
      header: 'Claim Block 4 Tokens',
      description: 'CLAIM',
    },
  ];

  const handleBuyToken = block => {
    console.log('block: ', block);
    setBuyBlockTokenData({
      ...buyBlockTokenData,
      block: Number(block.blockNumber),
    });
    setOpenBuyBlockToken(true);
  };

  const handleClaimToken = block => {
    console.log('block: ', block);
    if (block.id === 'block1') {
      claimTokenFirstBlock();
    }
    if (block.id === 'block2') {
      claimTokenSecondBlock();
    }
    if (block.id === 'block3') {
      claimTokenThirdBlock();
    }
    if (block.id === 'block4') {
      claimTokenForthBlock();
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px 0px',
        backgroundColor: '#15151b',
        paddingBottom: '40px',
      }}
    >
      <h1
        style={{
          marginBottom: '30px',
          fontFamily: 'Gotham',
          fontWeight: 700,
          color: '#ffffff',
        }}
      >
        BLOCK DATA
      </h1>
      <Card.Group centered>
        {blockTokens.map((block, index) => (
          <Card
            key={index}
            raised
            style={{
              height: 'auto',
              backgroundColor: '#15151b',
              minWidth: '20%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card.Content>
              <Card.Header
                style={{
                  color: '#54d522',
                  fontFamily: `Gotham, 'Courier Prime', monospace`,
                }}
              >
                <React.Fragment>{block.header}</React.Fragment>
              </Card.Header>
            </Card.Content>
            <Card.Content style={{ paddingTop: '0px' }}>
              <Feed>
                <Feed.Event>
                  <Feed.Content>
                    <h3
                      style={{
                        color: 'white',
                        fontFamily: `Gotham, 'Courier Prime', monospace`,
                        textAlign: 'center',
                        fontSize: '16px',
                      }}
                    >
                      {block.description}
                    </h3>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      {Number(block.description) > 0 && (
                        <Button onClick={() => handleBuyToken(block)}>
                          BUY
                        </Button>
                      )}
                    </div>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>

      {/* <h1
        style={{
          marginTop: '30px',
          marginBottom: '10px',
          fontFamily: 'Gotham',
          fontWeight: 700,
          color: '#ffffff',
        }}
      >
        CLAIM BLOCK TOKENS
      </h1> */}
      {new Date().getTime() >= new Date(presaleEndDate).getTime() && (
        <React.Fragment>
          <Card.Group centered>
            {claimTokens.map((block, index) => (
              <Card
                key={index}
                raised
                style={{
                  height: 'auto',
                  backgroundColor: '#15151b',
                  minWidth: '20%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Card.Content>
                  <Card.Header
                    style={{
                      color: '#54d522',
                      fontFamily: `Gotham, 'Courier Prime', monospace`,
                    }}
                  >
                    <React.Fragment>{block.header}</React.Fragment>
                  </Card.Header>
                </Card.Content>
                <Card.Content>
                  <Feed>
                    <Feed.Event>
                      <Feed.Content>
                        <Button onClick={() => handleClaimToken(block)}>
                          {block.description}
                        </Button>
                      </Feed.Content>
                    </Feed.Event>
                  </Feed>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </React.Fragment>
      )}
    </div>
  );
}

BlockTokens.propTypes = {};

export default memo(BlockTokens);
