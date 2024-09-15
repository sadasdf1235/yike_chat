import { UserInfoModel } from "../types/user"
import request from "../utils/request"

export const getUserInfo = (id : string) => {
	return request.get('/userinfo', { id })
}

export const editUserInfo = (data : UserInfoModel) => {
	return request.post('/userinfo', data)
}