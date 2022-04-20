async function loginFormHandler(event) {
    event.preventDefault()

    const username = document.querySelector('#username-login')
    const password = document.querySelector('#password-login')

    if(username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        })

        if(response.ok) {
            alert('You are logged out')
            document.location.replace('/dashboard/')
        } else {
            alert(response.statusText)
        }
    }


}

async function signupFormHandler(event) {
    event.preventDefault()

    const username = document.querySelector('#username-signup').value.trim()
    const password = document.querySelector('#password-signup').value.trim()

    if(username && password) {
        const response =await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json'}
        })
        if (response.ok) {
            alert('You are logged in')
            document.location.replace('/dashboard/')
        } else {
            alert(response.statusText)
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler)

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler)