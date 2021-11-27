import { useState } from 'react';
import { INVALID_INPUT } from '../../utils/appConstants';
import HelpOverlay from './HelpOverlay';
import { ErrorContainer, HelpButton } from './styled';

const ErrorMessage = () => {
  const [showHelp, setShowHelp] = useState(false);

  const handleShowHelp = () => {
    setShowHelp(!showHelp);
  };
  return (
    <ErrorContainer>
      <p>{INVALID_INPUT}</p>
      <HelpButton onClick={handleShowHelp}>Show me an example</HelpButton>
      {showHelp && <HelpOverlay onClose={handleShowHelp} />}
    </ErrorContainer>
  );
};

export default ErrorMessage;
