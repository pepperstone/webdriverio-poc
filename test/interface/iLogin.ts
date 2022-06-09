/**
 * implements partial interface for readability-wise
 * 
 * properties are set to optional in order to have a
 * loosley coupled blue print
 */
// this will be the blueprint for
// home-page(web) and splash-screen(app) objects 
export default interface ILogin {
    open?: () => void;
    gotoLoginCustomer?: () => void;
    getLogin?: (username: string, password: string) => void;
}