// 登录方式
export enum LoginWayEnum {
  PASSWORD = 1,
  CODE = 2,
  SOCIAL = 3,
  WX = 4
}

// 刷新token方式
export enum RefreshTokenWayEnum {
  REQUEST = 'request',
  RESPONSE = 'response'
}

// 上传方式
export enum UploadWayEnum {
  PATH = 'path',
  FILE = 'file'
}

// 第三方登录类型
export enum SocialTypeEnum {
  WeChat = 1, // 假设 1 代表微信
  QQ = 2 // 假设 2 代表 QQ
  // 可以添加更多枚举值
}

// 验证码场景
export enum SmsSceneEnum {
  LOGIN = 1,
  UPDATE_MOBILE = 2,
  UPDATE_PASSWORD = 3,
  RESET_PASSWORD = 4
}

// 信息修改方式
export enum InfoEditWayEnum {
  UPDATE_PASSWORD = 'updatePassword',
  RESET_PASSWORD = 'resetPassword',
  UPDATE_MOBILE = 'updateMobile',
  UPDATE_USERNAME = 'updateUsername',
  UPDATE_NICKNAME = 'updateNickname',
  UPDATE_NAME = 'updateName'
}

// 性别
export enum SexEnum {
  MALE = 1,
  FEMALE = 0
}