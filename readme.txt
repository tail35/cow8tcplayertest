1.本文用于测试腾讯tcplayer 最新版本，使用企业微信烈火天使账户。
2.通过npm 方式集成。无ui.https://cloud.tencent.com/document/product/881/77877
3.package.json 更换了原来h5 tcplayerlite播放器的设置。目的是用rollup打包。
4.npm rollup 方式打包目的是打出common js sdk.方便网页引用。
-----
[code read]:
1.cross-env 作用：	
	它是运行跨平台设置和使用环境变量的脚本
	cross-env NODE_ENV=dev 就是用cross-env命令设置NODE_ENV为dev
	env 就是environment.
2.取NODE_ENV变量值,rollup.config.js中。
	const isDev = process.env.NODE_ENV==='dev'
3. cross-env rollup 命令在下面目录里面.
	node_modules\.bin