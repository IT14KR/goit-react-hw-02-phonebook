import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label, Wrapp } from './Filter.styled';

function Filter({ value, changeFilter }) {
  return (
    <Wrapp>
      <Label>
        Find contacts
        <Input type="text" value={value} onChange={changeFilter} />
      </Label>
    </Wrapp>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;
