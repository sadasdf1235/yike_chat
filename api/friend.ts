import request from '@/utils/request'
import { FriendApplyModel, FriendModel } from '../types/friend'

export const addFriend = (data : FriendApplyModel) => {
	return request.post('/friend/apply', data)
}

export const agreeFriend = (data : FriendModel) => {
	return request.post('/friend/agree', data)
}

export const deleteFriend = (data : FriendModel) => {
	return request.post('/friend/delete', data)
}