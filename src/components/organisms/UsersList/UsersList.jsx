import React from 'react';
import PropTypes from 'prop-types';
import UserItem from 'components/molecules/UserItem/UserItem';
import { StyledList } from 'components/templates/MainTemplate/MainTemplate.styles';
import { Title } from 'components/atoms/Title/Title';
import { UserShape } from 'types';

const UsersList = ({ users }) => {
  return (
    <>
      <Title>Users List</Title>
      <StyledList>
        {users.map((UserData) => (
          <UserItem key={UserData.name} UserData={UserData} />
        ))}
      </StyledList>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
};

export default UsersList;
