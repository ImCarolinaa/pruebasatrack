
function validateRegistrationData(username, password) {
  const errors = {};

  if (!username || username.trim() === '') {
    errors.username = 'Username is required';
  }

  if (!password || password.trim() === '') {
    errors.password = 'Password is required';
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0
  };
}


function validateLoginData(username, password) {
  const errors = {};

  if (!username || username.trim() === '') {
    errors.username = 'Usuario es requerido';
  }

  if (!password || password.trim() === '') {
    errors.password = 'Contraseña es requerida';
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0
  };
}

module.exports = {
  validateRegistrationData,
  validateLoginData
};