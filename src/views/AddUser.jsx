import React, { useContext } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import { Button } from 'components/atoms/AddButton/AddButton';
import { ErrorMessage } from 'components/atoms/ErrorMessage/ErrorMessage';
import FormField from 'components/molecules/FormField/FormField';
import { UsersContext } from 'Providers/UsersProvider';
import { useForm } from 'Hooks/useForm';

const initialFormState = {
  name: '',
  average: '',
  attendence: '',
  consent: false,
  error: '',
};

const AddUser = () => {
  const { handleAddUser } = useContext(UsersContext);
  const { formValues, handleInputChange, handleClearValues, handleThrowError, handleConsentChange } = useForm(initialFormState);

  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (formValues.consent) {
      handleAddUser(formValues);
      handleClearValues();
    } else {
      handleThrowError('You didnt consent, you fucking prick.');
    }
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>Add User</Title>
      <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
      <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
      <FormField label="Attendence" id="attendence" name="attendence" value={formValues.attendence} onChange={handleInputChange} />
      <FormField type="checkbox" label="Consent" id="consent" name="consent" value={formValues.consent} onChange={handleConsentChange} />
      <Button type="submit">Add</Button>
      {formValues.error ? <ErrorMessage>{formValues.error}</ErrorMessage> : null}
    </ViewWrapper>
  );
};

export default AddUser;
