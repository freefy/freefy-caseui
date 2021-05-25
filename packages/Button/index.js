// 导入组件，组件必须声明 name
import fyButton from './src'
// 为组件提供 install 安装方法，供按需引入
fyButton.install = function (Vue) {
  Vue.component(fyButton.name, fyButton)
}
// 导出组件
export default fyButton