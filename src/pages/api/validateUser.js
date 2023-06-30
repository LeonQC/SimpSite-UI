import Cookies from "js-cookie";

const API_BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL;
export const validateLoginDetails = async (user) => {

    window.sessionStorage.setItem("userdetails", JSON.stringify(user))
    console.log("set userdetails success");


    const response = await fetch(`${API_BASE_URL}/user`, {
        method: "GET",
        headers: {
            'Authorization': 'Basic ' + window.btoa(user.email + ':' + user.password),
        },
        credentials: 'include',
    })



    if (response.ok) {
        const headers = response.headers;
        const body = await response.json();
        console.log("Login success,body: ", headers);
        return { headers, body };

    } else {
        console.error('HTTP error, status = ' + response.status);
    }
}

export const validateUser = async (user, router) => {
    const res = await validateLoginDetails(user);
    console.log("res", res);
    const userDetails = res.body;

    window.sessionStorage.setItem('userdetails', JSON.stringify(userDetails));
    const xsrf = Cookies.get('XSRF-TOKEN');
    window.sessionStorage.setItem("XSRF-TOKEN", xsrf);
    console.log("xsrf", xsrf);
    router.push("/")
}

export const getcookie = async (user) => {
    const xsrf = Cookies.get('XSRF-TOKEN');


    const response = await fetch(`${API_BASE_URL}/`, {
        method: "GET",
        credentials: 'include',
    })
    const ress = document.querySelector("access token")
    const res = await response.json()
    const username = res.attributes.login
    console.log("username", ress)
    window.sessionStorage.setItem("user", username);

    const cookies = document.cookie;
    const cookie = Cookies.get(name);
    console.log(cookies, xsrf);
    return username;
}

// export default function authHeader() {
//     const user = JSON.parse(localStorage.getItem('user'));
//     if (user && user.accessToken) {
//         return 'Bearer ' + user.accessToken;
//     } else {
//         return '';
//     }
// }

// logout() {
//     localStorage.removeItem("user");
//     localStorage.removeItem("google");
// }
// register(username, email, password) {
//     return axios.post(API_URL + "signup", {
//         username,
//         email,
//         password
//     }, {
//         headers: {
//             "Access-Control-Allow-Origin": "*",
//             "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//         }
//     });
// }
// getCurrentUser() {
//     return JSON.parse(localStorage.getItem('user'));;
// }
// getOAuthUser() {
//     return localStorage.getItem('google');
// }
//   }
// export default new AuthService();