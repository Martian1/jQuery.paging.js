# jQuery.paging.js
简单分页插件<br>
1.简单实用<br> 
2.支持页码输入<br> 
3.支持回调函数<br> 

## 使用
HTML<br>
\<div id="page">\</div>
<br>
css<br>
a{
    width: 23px;
    height: 23px;
    border: 1px solid #dce0e0;
    text-align: center;
    margin: 0 4px;
    cursor: pointer;
    display: inline-block;
}<br>
.current{
    background-color: #5ac3e7;
}
<br>
js<br>
$('#page').paging({pageNo:2,totalPage:10,callback:function(cur){<br>
　　console.log("这是回调函数");<br>
　　console.log("当前页"+cur);<br>
}});<br>

## 参数
option={<br>
pageNo:2,//当前页码<br>
totalPage:10//总页数<br>
}
