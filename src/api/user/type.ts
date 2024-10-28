export interface loginForm {
    username: string,
    password: string,
}

interface dataType {
    token: string
}

//登录接口返回的数据
export interface loginResponseData {
    code: number,
    data: dataType,
}

//服务器返回的用户信息
interface userInfo {
    userId: number,
    avatar: string,
    username: string,
    password: string,
    desc: string,
    roles: string[],
    buttons: string[],
    routes: string[],
    token: string
}

interface user {
    checkUser: userInfo
}

export interface userResponseData {
    code: number,
    data: user
}