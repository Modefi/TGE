/**
 *
 * PresaleEndCountdown
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import DateCountdown from 'react-date-countdown-timer';

function PresaleEndCountdown({ presaleEndDate }) {
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
          marginTop: '20px',
          marginBottom: '30px',
          fontFamily: 'Gotham',
          fontWeight: 700,
          color: '#ffffff',
        }}
      >
        WIZ PRESALE ENDS IN <br />
      </h1>

      <div
        style={{
          fontFamily: `Gotham, 'Courier Prime', monospace`,
          color: '#54d522',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 'bold',
          fontSize: '18px',
        }}
      >
        <DateCountdown
          dateTo={presaleEndDate}
          callback={() => {
            <span />;
          }}
        />
      </div>
    </div>
  );
}

PresaleEndCountdown.propTypes = {};

export default memo(PresaleEndCountdown);
