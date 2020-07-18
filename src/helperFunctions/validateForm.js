// use this function to validate your form

export default (fields) => {
  const errors = {}
  const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i

  for (const key in fields) {
    if (fields[key] === '') {
      errors[key] = 'This field is required';
    } else if (key === 'email' && !emailRegex.test(fields[key])) {
      errors[key] = 'Please enter a valid email address';
    }
  }
  return errors
}
