/**
 *
 * Footer
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import logo from '../../images/ethereumLogo.png';
import telegramLogo from '../../public/icons/telegram.png';
import twitterLogo from '../../public/icons/twitter.png';
import redditLogo from '../../public/icons/reddit.png';
import discordLogo from '../../public/icons/discord.png';

function Footer() {
  return (
    <div
      style={{
        backgroundColor: '#15151B',
        borderTop: '1px solid white',
      }}
    >
      <div
        style={{
          display: 'flex',
          backgroundColor: '#15151B',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={logo}
          style={{
            maxWidth: '155px',
            maxHeight: '55px',
            margin: '10px 0',
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '10px',
        }}
      >
        <h4 style={{ color: '#ffffff' }}>WIZ Presale</h4>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '10px',
        }}
      >
        <a href="www.telegram.com" target="_blank">
          <img
            src={telegramLogo}
            style={{
              maxWidth: '95px',
              maxHeight: '45px',
              padding: '10px',
            }}
          />
        </a>
        <a href="www.twitter.com" target="_blank">
          <img
            src={twitterLogo}
            style={{
              maxWidth: '95px',
              maxHeight: '45px',
              padding: '10px',
            }}
          />
        </a>
        <a href="www.reddit.com" target="_blank">
          <img
            src={redditLogo}
            style={{
              maxWidth: '95px',
              maxHeight: '45px',
              padding: '10px',
            }}
          />
        </a>
        <a href="www.discord.com" target="_blank">
          <img
            src={discordLogo}
            style={{
              maxWidth: '95px',
              maxHeight: '45px',
              padding: '10px',
            }}
          />
        </a>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: '10px',
        }}
      >
        <h4 style={{ color: '#ffffff' }}>
          © 2020 WIZ Presale. All Rights Reserved.
        </h4>
      </div>
    </div>
  );
}

Footer.propTypes = {};

export default memo(Footer);
