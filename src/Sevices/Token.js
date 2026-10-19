export const setToken = (Token)=>{
    window.localStorage.setItem("Mixel",Token)
}

export const getToken = ()=>{
  return window.localStorage.getItem("Mixel")
}

export const removeToken = ()=>{
    window.localStorage.removeItem("Mixel")
}
