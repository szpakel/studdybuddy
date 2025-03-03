import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: white;

  label {
    margin-bottom: 7px;
  }

  input {
    margin-bottom: 10px;
  }
`;

const FormField = ({ value, onChange, label, name, id, type = 'text' }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input name={name} id={id} type={type} value={value} onChange={onChange} data-testid={label}></Input>
    </Wrapper>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
