import axios from 'axios'

export function onSignUp (username, password) {
    axios.post("http://localhost:3001/create-user", { username, password })
            .then((res) => {
                console.log("Sing Up Request: ", res.data)
            })
}