/** generate random id
 * @param: prefix - string value added before the random id
 */
export const generateRandomID = (prefix = '') : string => {
  return  prefix + '_' + Math.random().toString(36);
};