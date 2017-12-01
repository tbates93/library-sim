import axios from 'axios'

let initialState = {
    user: {
        user_name: '',
        email: '',
        img: '',
        auth_id: '',
    }
}

const GET_USER = "GET_USER"

export default function (state = initialState, action) {
    switch (action.type) {
        

        default: 
            return state
    }
}

export function getUser() {
    const user = axios.get('/auth/me').then(res => {
        return axios.get('/api/users/setuser/' + res.data.auth_id)
            .then(res => {
                //console.log("User Info: ", res.data[0])
                return res.data[0]
            })

    })
    return {
        type: GET_USER,
        payload: user
    }
}