import axios from 'axios';

function fetchUsers(id: number) {
    if (id === 0) {
        return axios.get('https://jsonplaceholder.typicode.com/users')
    }
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
}

const fetchPostByUserid = async(id: number) => {
    try {
        let response;
        if (id == 0) {
            response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        } else {
            response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        }
        return response.data
    } catch (error) {
        console.log("Error fetching posts")
        throw error
    }
}

const errFetchPostByUserid = async(id: number) => {
    try {
        let response;
        if (id == 0) {
            response = await axios.get('https://jsonplaceholder.typicode.com/post')
        } else {
            response = await axios.get(`https://jsonplaceholder.typicode.com/post?userId=${id}`)
        }
        return response.data
    } catch (error) {
        console.log("Error fetching posts")
        throw error
    }
}

const fetchTodosByUserid = async(id: number) => {
    try {
        let response;
        if (id == 0) {
            response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        } else {
            response = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
        }
        return response.data
    } catch (error) {
        console.log("Error fetching todos")
        throw error
    }
}

const errFetchTodosByUserid = async(id: number) => {
    try {
        let response;
        if (id == 0) {
            response = await axios.get('https://jsonplaceholder.typicode.com/todo')
        } else {
            response = await axios.get(`https://jsonplaceholder.typicode.com/todo?userId=${id}`)
        }
        return response.data
    } catch (error) {
        console.log("Error fetching todos")
        throw error
    }
}

async function loadingDashboard() {
    const randomId = Math.floor(Math.random() * 10 + 1)
    const userData = await fetchUsers(randomId)

    console.log("Fetching posts and todos of user_id", userData.data.id)

    const [todos, posts] = await Promise.all([
        fetchTodosByUserid(userData.data.id),
        fetchPostByUserid(userData.data.id)
    ])

    console.log("todos", todos)
    console.log("posts", posts)

}

async function loadingDashboardAny() {
    const randomId = Math.floor(Math.random() * 10 + 1)
    const userData = await fetchUsers(randomId)

    console.log("Fetching posts and todos of user_id", userData.data.id)

    const onlyResult = await Promise.any([
        fetchTodosByUserid(userData.data.id),
        fetchPostByUserid(userData.data.id)
    ])

    console.log("the only result", onlyResult)

}

async function loadingDashboardRace() {
    const randomId = Math.floor(Math.random() * 10 + 1)
    const userData = await fetchUsers(randomId)

    console.log("Fetching posts and todos of user_id", userData.data.id)

    const winner = await Promise.race([
        fetchTodosByUserid(userData.data.id),
        fetchPostByUserid(userData.data.id),
        errFetchPostByUserid(userData.data.id),errFetchTodosByUserid(userData.data.id)
    ])

    console.log("the only winner", winner)

}

async function loadingDashboardAllSettled() {
    const randomId = Math.floor(Math.random() * 10 + 1)
    const userData = await fetchUsers(randomId)

    console.log("Fetching posts and todos of user_id", userData.data.id)

    const [todos, posts, errPost, errTodos] = await Promise.allSettled([
        fetchTodosByUserid(userData.data.id),
        fetchPostByUserid(userData.data.id),
        errFetchPostByUserid(userData.data.id),errFetchTodosByUserid(userData.data.id)
    ])

    console.log(todos.status, posts.status, errPost.status, errTodos.status)

}

loadingDashboardAllSettled()