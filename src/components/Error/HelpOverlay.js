import { CodeExample, HelpButton, Overlay, OverlayContent, OverLayScroll } from './styled';

const HelpOverlay = ({ onClose }) => {
  return (
    <Overlay>
      <OverlayContent>
        <OverLayScroll>
          <h2>Example:</h2>
          <p>A valid input is tree that follows this format</p>
          <CodeExample>
            <code>
              Node = [value, Node | null, Node | null]
              <br />
              <br />
              That means, a node has:
              <br />
              <br />
              [root value, left leave, right leave]
              <br />
              <br />
              These are examples of valid inputs:
              <br />
              <br />
              Only root tree (string | number)
              <br />
              <ul>
                <li>[1]</li>
                <li>["Hi"]</li>
              </ul>
              <br />
              One node tree:
              <ul>
                <li>[1, null]</li>
                <li>["Hi", [1, null]]</li>
              </ul>
              Two nodes tree:
              <ul>
                <li>[1, null, null]</li>
                <li>["Hi", [1, null], [1, null, [1]]]</li>
              </ul>
            </code>
          </CodeExample>
        </OverLayScroll>
        <HelpButton onClick={onClose}>Accept</HelpButton>
      </OverlayContent>
    </Overlay>
  );
};

export default HelpOverlay;
