var left = document.getElementById('left')
var right = document.getElementById('right')
var txt = document.getElementById('exampleInputEmail2')
function seek() {
    console.log(txt)
    var xhr = new XMLHttpRequest()
    console.log(xhr.readyState)
    xhr.onreadystatechange = function (e) {
        console.log(xhr.readyState)
        if (xhr.readyState == 4) {
            mag = JSON.parse(xhr.response)
            console.log(mag)    
            var strHtml = ''
            mag.forEach(function (a, index) {
                // console.log(a.title)
                // console.log(a.a_id)
                strHtml += `<div  data-id='${a.a_id}' onclick='ask(event)' class="col-md-3 album">${a.title}</div>`
            })
            left.innerHTML = strHtml
        }
    }
    xhr.open('get', '/api/v1/all?key=' + txt.value)
    xhr.send()

}
function ask(event) {
    right.innerHTML = ''
    var divs = document.querySelectorAll('.album')
    // console.log(divs)
    var b = event.currentTarget.dataset.id
    console.log(b)
    console.log(mag)
    mag.forEach(function (c, index) {
        var d = c.songs
        // console.log(d)
        if (b == c.a_id) {
            d.forEach(function (f) {
                console.log(f.name)
                console.log(f.url)
                right.innerHTML += `<ul class="list-group">
                    <a href="${f.url}"><li class="list-group-item">${f.name}</li></a>
                </ul>`
            })
        }

    })
}

