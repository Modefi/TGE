/**
 *
 * ViewCard
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Card, Feed, Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

import ethLogo from '../../images/ethereumLogo.png';
import propleGroupIcon from '../../images/group.png';

function ViewCard({ contractViewData, address }) {
  console.log('ViewCard -> contractViewData', contractViewData);

  const items = [
    {
      id: 'presaleContract',
      header: 'Verified Presale Contract',
      description: contractViewData.presaleContract,
    },
    {
      id: 'etherDepositedInBlock1',
      header: 'ETH Deposited in Block 1',
      description: (
        Number(contractViewData.etherDepositedInBlock1) / 100000000
      ).toLocaleString('fullwide', { useGrouping: false }),
    },
    {
      id: 'etherDepositedInBlock2',
      header: 'ETH Deposited in Block 2',
      description: (
        Number(contractViewData.etherDepositedInBlock2) / 100000000
      ).toLocaleString('fullwide', { useGrouping: false }),
    },
    {
      id: 'etherDepositedInBlock3',
      header: 'ETH Deposited in Block 3',
      description: (
        Number(contractViewData.etherDepositedInBlock3) / 100000000
      ).toLocaleString('fullwide', { useGrouping: false }),
    },
    {
      id: 'etherDepositedInBlock4',
      header: 'ETH Deposited in Block 4',
      description: (
        Number(contractViewData.etherDepositedInBlock4) / 100000000
      ).toLocaleString('fullwide', { useGrouping: false }),
    },
    {
      id: 'tokensInvested',
      header: 'Total Tokens Invested',
      description: `${(
        Number(contractViewData.tokensInvested) / 100000000
      ).toLocaleString('fullwide', { useGrouping: false })}`,
    },
    {
      id: 'tokensLeft',
      header: 'Total Tokens Left',
      description: `${(
        Number(contractViewData.tokensleft) / 100000000
      ).toLocaleString('fullwide', { useGrouping: false })}`,
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px 5px',
        // paddingBottom: '50px',
        backgroundColor: '#15151b',
      }}
    >
      <h1
        style={{
          marginTop: '20px',
          marginBottom: '30px',
          fontFamily: 'Gotham',
          fontWeight: 700,
          color: '#ffffff',
        }}
      >
        WIZ STATISTICS
      </h1>

      <Card.Group centered>
        {items.map((item, index) => (
          <Card
            key={index}
            raised
            style={{
              height: 'auto',
              backgroundColor: '#15151b',
              minWidth: '30%',
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
                {(item.id === 'etherDepositedInBlock1' ||
                  item.id === 'etherDepositedInBlock2' ||
                  item.id === 'etherDepositedInBlock3' ||
                  item.id === 'etherDepositedInBlock4') && (
                  <React.Fragment>
                    <span
                      style={{
                        fontFamily: `Gotham, 'Courier Prime', monospace`,
                        fontSize: '18px',
                      }}
                    >
                      <img
                        src={ethLogo}
                        style={{
                          maxWidth: '40px',
                          maxHeight: '25px',
                          paddingRight: '10px',
                        }}
                      />
                      {item.header}
                    </span>
                  </React.Fragment>
                )}

                {item.id != 'etherDepositedInBlock1' &&
                  item.id != 'etherDepositedInBlock2' &&
                  item.id != 'etherDepositedInBlock3' &&
                  item.id != 'etherDepositedInBlock4' && (
                    <React.Fragment>
                      <span
                      style={{
                        fontFamily: `Gotham, 'Courier Prime', monospace`,
                        fontSize: '18px',
                      }}
                    >
                      {item.header}
                    </span>
                  </React.Fragment>
                  )}
              </Card.Header>
            </Card.Content>
            <Card.Content>
              <Feed>
                <Feed.Event>
                  <Feed.Content>
                    {item.id === 'presaleContract' ? (
                      <Feed.Summary>
                        <a
                          href={`https://etherscan.io/address/${
                            item.description
                          }`}
                          target="blank"
                          style={{
                            color: 'white',
                            fontFamily: `Gotham, 'Courier Prime', monospace`,
                          }}
                        >
                          <h3
                            style={{
                              color: 'white',
                              fontFamily: `Gotham, 'Courier Prime', monospace`,
                              fontSize: '18px',
                            }}
                          >
                            {item.description}
                          </h3>
                        </a>
                      </Feed.Summary>
                    ) : (
                      <Feed.Summary>
                        <h3
                          style={{
                            color: 'white',
                            fontFamily: `Gotham, 'Courier Prime', monospace`,
                            fontSize: '18px',
                          }}
                        >
                          {item.description}
                        </h3>
                      </Feed.Summary>
                    )}
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}

ViewCard.propTypes = {};

export default memo(ViewCard);
