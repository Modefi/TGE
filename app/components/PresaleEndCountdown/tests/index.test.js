/**
 *
 * Tests for PresaleEndCountdown
 *
 * @see https://github.com/presale-dapp/presale-dapp/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import PresaleEndCountdown from '../index';

describe('<PresaleEndCountdown />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<PresaleEndCountdown />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to have additional unit tests specified', () => {
    expect(true).toEqual(false);
  });

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<PresaleEndCountdown />);
    expect(firstChild).toMatchSnapshot();
  });
});
