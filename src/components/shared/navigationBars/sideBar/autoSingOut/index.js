import React from 'react';
import Countdown from 'react-countdown-now';
import Renderer from './renderer';

const AutoSingOut = ({
  expireTime,
  onCountdownComplete,
  history,
  resetTimer,
  t,
}) => (
  <Countdown
    date={expireTime}
    onComplete={onCountdownComplete}
    renderer={({ minutes, seconds }) => (
      <Renderer
        minutes={minutes}
        seconds={seconds}
        history={history}
        resetTimer={resetTimer}
        t={t}
      />
    )}
  />
);


export default AutoSingOut;
