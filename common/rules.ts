export const rules: Record<string, TM.FORM_RULE[]> = {
	username: [{ required: true, message: '请输入正确的手机号码', type: 'phone' }],
	password: [{ required: true, message: '数字或者字母6-18位', rule: /^[a-zA-Z0-9]{6,18}$/ }],
    address: [{ required: true, message: '地址不能为空' }, { required: true, message: '长度要小于3', max: 2 }],
    checkbox: [{ required: true }],
    radio: [{ required: true }],
    time: [{ required: true, type: 'date' }],
    textarea: [{ required: true,max:100, message: '请输入内容' }]
}