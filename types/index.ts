export interface SignInModel {
	// 凭证： 用户名/邮箱
	voucher : string
	password : string
}

export interface SignUpModel {
	username : string
	email : string
	password : string
}

export interface UploadModel {
	files : Array<File>
}

export interface SearchModel {
	type: string,
	keyword: string,
	id: string
}