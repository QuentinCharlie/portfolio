// == Import npm
import React from 'react';
import { Button, Modal, Image } from 'semantic-ui-react';

// == Import
import CVStyled from 'src/components/AppEnglish/CV/CVStyled';

// == Composant
const CV = () => {
  const handleClick = () => {
    console.log('download-button click');
  };

  return (
    <CVStyled>
      <Modal centered trigger={<Button size="massive">Voir mon CV</Button>} closeIcon>
        <Modal.Content
          image
          style={{ justifyContent: 'center' }}
        >
          <Image className="resume-image" src="https://i.imgur.com/ilWCCLF.jpg" />
        </Modal.Content>
      </Modal>
      <Button
        download
        href="/cv.jpg"
        size="huge"
        icon="download"
        onClick={handleClick}
      />
    </CVStyled>
  );
};

// == Export
export default CV;
