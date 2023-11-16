class LoginElements {
    imageLogin = () => {return 'img[alt="company-branding"]'};
    inputName = () => {return 'input[placeholder="Username"]'}
    inputPassword = () => {return 'input[placeholder="Password"]'}
    buttonSubmitLogin = () => {return 'button[type="submit"]'}
    imageLoginSucessfull = () => {return 'img[alt="client brand banner"]'}
    errorLoginAlert = () => {return '.oxd-alert-content > .oxd-text'}
    requiredLabel = () => {return '.oxd-input-field-error-message'}
}

export default LoginElements