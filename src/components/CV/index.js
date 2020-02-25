// == Import npm
import React from 'react';
import { Button, Modal, Image } from 'semantic-ui-react';

// == Import
import CVStyled from './CVStyled';

// == Composant
const CV = () => (
  <CVStyled>
    <Modal centered trigger={<Button size="massive">Voir mon CV</Button>} closeIcon>
      <Modal.Content
        image
        style={{
          'justify-content': 'center',
        }}
      >
        <Image className="resume-image" src="https://i.imgur.com/kG1r1P5.jpg" />
      </Modal.Content>
    </Modal>
    <Button size="huge" icon="download" />
  </CVStyled>
);

// == Export
export default CV;