export async function onLogin(event) {

    const loginBtn = document.getElementById('login-btn');


    loginBtn.addEventListener('click', async function (event) {
        const email = document.getElementById('email');
        const password = document.getElementById('password');

        try {
            const response = await fetch('https://v2.api.noroff.dev/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: emailLogin,
                    password: passwordLogin
                })
            });
        } catch (error) {

        }
    })
}

