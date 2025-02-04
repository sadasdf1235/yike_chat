import request from '@/utils/request'
import { SearchModel, SignInModel, SignUpModel, UploadModel } from '@/types'

// 注册
export const signIn = (data : SignInModel) => {
	return request.post('/signin', data)
}

// 登录
export const signUp = (data : SignUpModel) => {
	return request.post('/signup', data)
}

// 文件上传
export const upload = (data : UploadModel) => {
	return request.post('/upload', data)
}

// 搜索
export const search = (data : SearchModel) => {
	return request.post('/search', data)
}

// 聊天列表
export const chatList = (id : string) => {
	return request.get('/chat/list', { id })
}