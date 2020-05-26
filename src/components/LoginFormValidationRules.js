export default function validate(values) {
    let errors = {};
    if (!values.email) {
      errors.email = 'Email address is required';
    }
    return errors;
  };