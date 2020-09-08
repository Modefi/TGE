/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

import Blockie from '../Blockie';

import logo from '../../images/ethereumLogo.png';

function Header({ address, onConnect }) {
  return (
    <div
      style={{
        display: 'flex',
        backgroundColor: '#15151B',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid white',
      }}
    >
      <img
        src={logo}
        style={{
          maxWidth: '155px',
          maxHeight: '55px',
          marginTop: '15px',
          marginBottom: '15px',
          paddingLeft: '20px',
        }}
      />

      {address ? (
        <div style={{ marginLeft: 'auto' }}>
          <Blockie address={address} />
        </div>
      ) : (
        <Button
          style={{ marginRight: '10px', height: '35px', fontFamily: 'Gotham' }}
          onClick={onConnect}
        >
          CONNECT
        </Button>
      )}
    </div>
  );
}

Header.propTypes = {};

export default memo(Header);
