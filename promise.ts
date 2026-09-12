import axios from 'axios';



const fetchPosts = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        return response.data;
    } catch (error) {
        console.error('Error fetching data: for posts', error);
    }
};

function fetchUsers(id: number) {
    if (id === 0) {
        return axios.get('https://jsonplaceholder.typicode.com/users')
    }
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
}

console.log("fetching comments")
console.log(await fetchPosts())

fetchPosts().then((res) => {
    console.log("repeated post call",res)
})

console.log("fetching users")
console.log((await fetchUsers(1)).data)

fetchUsers(100).then((res) => {
    console.log("dapat users 100", res)
}).catch(() => {
    console.log("users 100 not found")
}).finally(() => console.log("cukup"))

