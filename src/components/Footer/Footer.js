import { FOOTER_CAPTION, GH_REPO, GH_USER } from '../../utils/appConstants';
import { StyledFooter } from './styled';

const Footer = () => (
  <StyledFooter>
    {FOOTER_CAPTION} <a href={GH_REPO}>{GH_USER}</a>{' '}
  </StyledFooter>
);

export default Footer;
