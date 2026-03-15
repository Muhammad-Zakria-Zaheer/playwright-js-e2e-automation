module.exports = {
  validUser: {
    username: 'standard_user',
    password: 'secret_sauce'
  },

  invalidUser: {
    username: 'standard_user',
    password: 'wrong_password'
  },

  lockedUser: {
    username: 'locked_out_user',
    password: 'secret_sauce'
  },

  emptyUsername: {
    username: '',
    password: 'secret_sauce'
  },

  emptyPassword: {
    username: 'standard_user',
    password: ''
  },

  emptyCredentials: {
    username: '',
    password: ''
  }
};