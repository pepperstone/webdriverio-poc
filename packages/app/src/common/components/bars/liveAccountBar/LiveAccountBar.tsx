import FundAccountModal from 'src/common/components/modals/fundAccountModal';
import LiveAccountData from './components/liveAccountData';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import stylesCreator from './Styles';
import { useLiveAccountBar } from './Hooks';
import useModal from 'src/common/hooks/useModal';
import { useTheme } from 'src/lib/theme/Theme';

const LiveAccountBar = () => {
  const [styles] = useTheme(stylesCreator);
  const { isShowing, toggle } = useModal();
  const { equity, profitAndLoss } = useLiveAccountBar();
  const freeMargin = equity + profitAndLoss;
  const style = freeMargin < 2000 ? [styles.bar, styles.red] : styles.bar;

  return (
    <>
      <TouchableOpacity style={style} onPress={toggle}>
        <>
          <LiveAccountData title={'Equity'} amount={equity} />
          <LiveAccountData title={'P&L'} amount={profitAndLoss} showColor />
          <LiveAccountData title={'Free margin'} amount={freeMargin} />
        </>
      </TouchableOpacity>
      <FundAccountModal isShowing={isShowing} toggle={toggle} />
    </>
  );
};

export default LiveAccountBar;
