import React from 'react';

import Select from './Select';
import Input from './Input';

const FormControl = () => {

  return <div>
    <form>
      <Select />
      <Input type="text" placeholder="Enter your name" />
      <button>PLAY</button>
    </form>
  </div>
}

export default FormControl;
