import React, { useContext } from 'react';
import { Wrapper, StyledAverage, StyledInfo } from './UserItem.styles';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { UsersContext } from 'Providers/UsersProvider';

const UserItem = ({ UserData: { name, average, attendence } }) => {
  const { deleteUser } = useContext(UsersContext);

  return (
    <Wrapper>
      <StyledAverage value={average}>{average}</StyledAverage>
      <StyledInfo>
        <p>
          {name}
          <DeleteButton onClick={() => deleteUser(name)} />
        </p>
        <p>attendece: {attendence}</p>
      </StyledInfo>
    </Wrapper>
  );
};

export default UserItem;
