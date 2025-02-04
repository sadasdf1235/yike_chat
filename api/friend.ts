import request from '@/utils/request'
import { FriendApplyModel, FriendModel } from '@/types/friend'

// 添加好友
export const addFriend = (data : FriendApplyModel) => {
	return request.post('/friend/apply', data)
}

// 同意好友申请
export const agreeFriend = (data : FriendModel) => {
	return request.post('/friend/agree', data)
}

// 删除好友
export const deleteFriend = (data : FriendModel) => {
	return request.post('/friend/delete', data)
}