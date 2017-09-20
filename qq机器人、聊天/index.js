var btn = document.getElementById('btn')
var txt = document.getElementById('txtMsg');
var container = document.getElementById('container')
console.log(txt)
// 给button添加点击事件
function ask() {
    // 1、获取用户的输入信息 input的值
    var value = txt.value;
    console.log(value);
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState == 4) {
            var lxx = JSON.parse(xhr.response)//数据转为对象
            console.log(lxx.text)
            var cell = document.createElement('div');
            // 把这格添加到容器中
            container.appendChild(cell);

            // 2.2 创建一个头像，添加到这一格
            var photo = document.createElement('img');
            // 点击次数分奇偶使用不同的图片
            photo.src = 'images/1.jpg';
            photo.style.width = '60px';
            photo.style.height = '60px';
            photo.style.float = 'right';
            photo.style.borderRadius = '30px';
            cell.appendChild(photo);



            // 2.4 添加文本展示
            var contentDiv = document.createElement('div');
            contentDiv.innerHTML = lxx.text;
            // 添加样式类
            contentDiv.style.paddingTop = '30px';
            // 设置聊天内容的最大宽度
            contentDiv.style.maxWidth = 'calc(100% - 90px)';
            // 设置允许长单词或 URL 地址换行到下一行。
            contentDiv.style.wordWrap = 'break-word';
            contentDiv.style.float = 'right';
            cell.appendChild(contentDiv);

            //2.3 添加空标签，清除浮动
            var clearDiv = document.createElement('div');
            clearDiv.style.clear = 'both';
            cell.appendChild(clearDiv);
        }
        txt.innerHTML = ''
    }
    xhr.open('get', 'http://www.tuling123.com/openapi/api?key=0d2572e7a1b54bcf92e9e89f5385c467&info=' + txt.value)
    xhr.send()
    // 2、在container显示用户输入

    //2.1 创建一格
    var cell = document.createElement('div');
    // 把这格添加到容器中
    container.appendChild(cell);

    // 2.2 创建一个头像，添加到这一格
    var photo = document.createElement('img');
    // 点击次数分奇偶使用不同的图片
    photo.src = 'images/2.jpg';
    photo.style.width = '60px';
    photo.style.height = '60px';
    photo.style.float = 'left';
    photo.style.borderRadius = '30px';
    cell.appendChild(photo);



    // 2.4 添加文本展示
    var contentDiv = document.createElement('div');
    contentDiv.innerHTML = value;
    // 添加样式类
    contentDiv.style.paddingTop = '30px';
    // 设置聊天内容的最大宽度
    contentDiv.style.maxWidth = 'calc(100% - 90px)';
    // 设置允许长单词或 URL 地址换行到下一行。
    contentDiv.style.wordWrap = 'break-word';
    contentDiv.style.float = 'left';
    cell.appendChild(contentDiv);

    //2.3 添加空标签，清除浮动
    var clearDiv = document.createElement('div');
    clearDiv.style.clear = 'both';
    cell.appendChild(clearDiv);

    //3、清空输入框
    txt.value = '';

    // 4、让container滚动到最大值
    console.log(container);
    // .scrollTo():让某个标签滚动到某个位置para1：x轴方向滚动到哪里;para2：y轴方向滚动到哪里
    container.scrollTo(0, container.scrollHeight);
}
function one(e){
    if(e.keyCode == 13){
        ask(); 
    }
}