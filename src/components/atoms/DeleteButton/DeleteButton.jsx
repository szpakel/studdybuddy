import React from 'react';
import { StyledButton } from './DeleteButton.styles';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';

const DeleteButton = (props) => {
  return (
    <StyledButton {...props}>
      <DeleteIcon />
    </StyledButton>
  );
};

export default DeleteButton;
