import React from 'react';
import { useHistory } from 'react-router-dom';

const StartComponent: React.VFC = () => {
  const history = useHistory();

  const onClickStartButton = () => {
    history.push('/player');
  };

  return (
    <div>
      <button type="button" onClick={onClickStartButton}>開始</button>
    </div>
  );
};

export default StartComponent;
