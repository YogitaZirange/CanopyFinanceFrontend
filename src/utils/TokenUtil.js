export function isAuthenticated(){
    return (getToken() && getUser()) ? true : false;
}

export function getToken(){
    return localStorage.getItem("jwt");
}

export function getUser(){
    return localStorage.getItem("roles");
}

export function logout(){
    localStorage.removeItem("jwt");
    localStorage.removeItem("roles");
}