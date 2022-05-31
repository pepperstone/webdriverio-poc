/*
 *   Validates an email address and returns error message
 */
export const isValidEmail = (email: string): boolean => {
  const regEx = RegExp(/^.+@.+$/);

  return regEx.test(email);
};
