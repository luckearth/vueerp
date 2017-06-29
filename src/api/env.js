/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 * 
 */

let baseUrl = 'http://api.domain.com/v1/';
let baseImgPath = 'http://file.domain.com/';
let routerMode = 'history';

if (process.env.NODE_ENV == 'development') {
	baseUrl = 'http://api.domain.com/v1/';
	baseImgPath = 'http://file.domain.com/';
}

export {
	baseUrl,
	baseImgPath,
	routerMode
}