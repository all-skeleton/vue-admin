import request from './request'

export function login(username: string, password: string) {
    return request.get("login", {username: username, password: password})
}

export function adminUserInfo() {
    return request.get("admin-user-info")
}

export function getUserList(data: any) {
    return request.get("user/list", data || {})
}

export function postUserLock(id: number, is_lock: number) {
    return request.post("user/lock", {id, is_lock})
}

export function postUserDel(id: number) {
    return request.post("user/deleted", {id})
}

export function postUserOpenVip(data: any) {
    return request.post("user/open-vip", data)
}

export function getScene() {
    return request.get("public/scene")
}

export function getVipConfig() {
    return request.get("public/vip-config")
}

export function postDel(id: number, m_mark: string) {
    return request.post("__delete", {id, m_mark})
}

export function postLock(id: number, is_lock: number, m_mark: string) {
    return request.post("__lock", {id, is_lock, m_mark})
}