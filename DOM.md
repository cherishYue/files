# DOM

## javascript 的组成部分
- DOM (document object model) 文档对象模型
- BOM (browers object model) 浏览器对象模型
- ECMAScript js 的核心

## DOM 节点
- 节点分类
	- 元素节点：每个 HTML元素	
    - 属性节点：HTML元素的属性
	- 文本节点：HTML元素内的文本	
    - 注释节点：注释 <!---->
	- 文档节点：整个文档document		
- 节点类型 --- nodeType
	- 元素节点：1	
    - 属性节点：2
	- 文本节点：3	
    - 注释节点：8
	- 文档节点：9
- 节点名称 --- nodeName
	- 元素节点：与标签名相同	
    - 属性节点：是属性的名称
	- 文本节点：为#text	
    - 注释节点：为#comment
	- 文档节点：为#document    

## DOM关系
- childNodes 子节点
- children 子元素 
- firstChild 第0个子节点
- firstElementChild 第0个子元素
- lastChild 最后一个子节点
- lastElementChild 最后一个子元素
- nextSibling 下一个兄弟节点
- nextElementSibling 下一个兄弟元素
- previousSibling 上一个兄弟节点
- previousElementSibling 上一个兄弟元素
- parentNode 父节点

## DOM 属性操作
注意 . 和 [] 都是 ECMAScript 中，对象的属性操作，对象属性的值会被存在内存中, 想要直接获取存在 文档中属性，或者 想把一个属性设置在文档中我们需要使用DOM 的属性操作
- el.attributes 元素所有属性的集合
- el.getAttribute("attr") 获取属性
- el.setAttribute("attr","val") 设置属性
- el.removeAttribute("attr") 移出属性
- el.hasAttribute("attr") 判断是否有这个属性
- 只要操作了innerHTML 元素的所有子元素上，存在内存中的事件和相关的属性都会丢失。如果希望元素的某些属性在操作了父级的innerHTML 之后，还存在就把这个属性加在 DOM 中
# BOM

## BOM下的五大对象
- window 对象
- screen 屏幕
- location 地址栏信息
- navigator 浏览器及设备信息
- history  历史记录

## window 
- window.alert()
- window.confirm() 带有确定状态的弹窗
- window.prompt() 可以供用户输入信息的弹窗
- window.open 打开一个新标签页 http://www.w3school.com.cn/jsref/met_win_open.asp
- window.close() 关闭窗口
- innerWidth/innerHeight 获取可视区大小
- document.body.clientHeight 获取页面高度
- window.onscroll 当滚动条滚动的时候
- window.onresize 当窗口大小发生改变的时候
- window.scrollY/window.scrollX   获取滚动条