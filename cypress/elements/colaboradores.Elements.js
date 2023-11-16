class ColaboradoresElements {
    menuColaboradoresLink = () => {return 'span'}
    titleColaboradores = () => {return 'h5'}
    noRecords = () => {return '.orangehrm-horizontal-padding > span'}
    inputFirstName = () => {return 'input[placeholder="First Name"]'}
    inputMiddleName = () => {return 'input[placeholder="Middle Name"]'}
    inputLastName = () => {return 'input[placeholder="Last Name"]'}
    errorIdDuplicateField = () => {return '.oxd-input-field-error-message'}
    errorIdDuplicateMessage = () => {return 'Employee Id already exists'}
    inputProfileImage = () => {return '.orangehrm-employee-image input'}
    pathToImage = () => {return 'cypress/fixtures/image.png'}
    buttonSubmit = () => {return 'button[type="submit"]'}
    profileImage = () => {return 'img.employee-image'}
    defaultProfileImg = () => {return '/web/images/default-photo.png'}
    addSucessAlert = () => {return 'div.oxd-toast-content--success'}
    searchResultsTable = () => {return 'div.oxd-table-body'}
}
export default ColaboradoresElements