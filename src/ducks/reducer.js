import axios from 'axios'

let initialState = {
    user: {
        user_name: '',
        email: '',
        img: '',
        auth_id: '',
    },
    book: {},
}

const GET_USER = "GET_USER"
const SET_BOOK = "SET_BOOK"

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USER + "_FULFILLED":
            return Object.assign({}, state, { user: action.payload });
        case SET_BOOK:
            return Object.assign({}, state, { book: action.payload });
        default:
            return state
    }
}

export function getUser() {
    const user = axios.get('/auth/me').then(res => {
        return axios.get('/api/users/setuser/' + res.data.auth_id)
            .then(res => {
                console.log("User Info: ", res.data[0])
                return res.data[0]
            })

    })
    return {
        type: GET_USER,
        payload: user
    }
}

export function setBook(book) {
    console.log(book)
    return {
        type: SET_BOOK,
        payload: book
    }
}