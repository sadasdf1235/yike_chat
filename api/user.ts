import { UserInfoModel } from "@/types/user"
import request from "@/utils/request"

// 用户信息
export const getUserInfo = (id : string) => {
	return request.get('/userinfo', { id })
}

// 编辑用户信息
export const editUserInfo = (data : UserInfoModel) => {
	return request.post('/userinfo', data)
}