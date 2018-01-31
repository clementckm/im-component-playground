import React from 'react';
import PropTypes from 'prop-types';
import { Button, Label, NextButton } from 'im-component-lib';
import '../assets/stylesheets/base.scss';


const App = ({ name }) => {
  return (
    <div>
      <Label>Basic Button</Label>
      <br />

      <Button>Default</Button>
      <div>
        <Button
          bgColor="#13CE66"
          size="small"
        >
          small
        </Button>
      </div>
      <div>
        <Button
          bgColor="#FFC82C"
          size="medium"
        >
          medium
        </Button>
      </div>
      <div>
        <Button
          bgColor="#FF7849"
          size="large"
        >
          large
        </Button>
      </div>
      <div>
        <Button
          size="wide"
        >
          wide
        </Button>
      </div>
      <div>
        <Button
          bgColor="#FF49DB"
          size="extraWide"
        >
          extra wide
        </Button>
      </div>
      <div>
       <Button
         bgColor="#7E5BEF"
         size="fullWidth"
       >
         full width
       </Button>
      </div>
      <Label>Persona Button</Label>
       <NextButton
        size="medium"
        onClick={evt => evt }
        label='Next >'
       ></NextButton>
    </div>
  );
};

App.propTypes = {
  name: PropTypes.string,
};

export default App;
