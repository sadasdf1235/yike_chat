export interface FriendModel {
	id : string,
	friendId : string
}
export interface FriendApplyModel extends FriendModel {
	markname ?: string
}