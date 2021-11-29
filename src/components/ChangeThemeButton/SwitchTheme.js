import { Button } from './styled';

const SwitchTheme = ({ handleChange, caption }) => {
  return <Button onClick={handleChange}>{caption === 'dark' ? 'light' : 'dark'}</Button>;
};

export default SwitchTheme;
