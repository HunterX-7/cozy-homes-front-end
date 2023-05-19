import React from 'react';
import { number, string } from 'prop-types';

const Selection = (props) => {
  const { name, id } = props;
  return (
    <option name={name} value={id}>{name}</option>
  );
};

export default Selection;

Selection.propTypes = {
  name: string.isRequired,
  id: number.isRequired,
};
