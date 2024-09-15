import request from '@/utils/request'
import { SearchModel, SignInModel, SignUpModel, UploadModel } from '../types'

export const signIn = (data : SignInModel) => {
	return request.post('/signin', data)
}

export const signUp = (data : SignUpModel) => {
	return request.post('/signup', data)
}

export const upload = (data : UploadModel) => {
	return request.post('/upload', data)
}

export const search = (data : SearchModel) => {
	return request.post('/search', data)
}

export const chatList = (id : string) => {
	return request.get('/chat/list', { id })
}