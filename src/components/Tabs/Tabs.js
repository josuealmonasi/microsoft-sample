import { useState } from 'react';
import { TabOutput, TabsContainer, TabsTitleContainer, TabsTitles } from './styled';

const Tabs = ({ children }) => {
  const [active, setActive] = useState(0);

  const handleTabChange = (tabIndex) => {
    setActive(tabIndex);
  };

  return (
    <TabsContainer>
      <TabsTitleContainer>
        {children.map(({ props: { title } }, index) => (
          <TabsTitles key={index} onClick={() => handleTabChange(index)} active={index === active}>
            {title}
          </TabsTitles>
        ))}
      </TabsTitleContainer>
      <TabOutput>{children[active]}</TabOutput>
    </TabsContainer>
  );
};

export default Tabs;
