document.addEventListener('DOMContentLoaded', () => {
    const closeLoginForm = document.getElementById('close-login-form');
    const closeCreateAccountForm = document.getElementById('close-create-account-form');
    const loginFormContainer = document.querySelector('.login-form-container');
    const createAccountFormContainer = document.querySelector('.create-account-form-container');

    closeLoginForm.addEventListener('click', () => {
        loginFormContainer.style.display = 'none';
    });

    closeCreateAccountForm.addEventListener('click', () => {
        createAccountFormContainer.style.display = 'none';
    });

    document.querySelector('a[href="#create-account"]').addEventListener('click', (e) => {
        e.preventDefault();
        createAccountFormContainer.style.display = 'block';
        loginFormContainer.style.display = 'none';
    });
});
