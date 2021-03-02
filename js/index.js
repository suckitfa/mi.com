var tabs = document.getElementById('tabs').getElementsByTagName('li');
var lists = document.getElementById('lists').getElementsByTagName('ul');
// 为每个元素注册事件
for (var i = 0; i < tabs.length; i++) {
    tabs[i].onclick = showlist;
}
//当li被点击时，触发事件，循环验证
function showlist() {
    for (var i = 0; i < tabs.length; i++) {
        if (tabs[i] == this) { //点击的对象是那个时候
            tabs[i].className = 'active';
            lists[i].className = 'clearfix active';
        } else {
            tabs[i].className = '';
            lists[i].className = 'clearfix';
        }
    }
}

var seckillNav = document.getElementById('seckillNav');
window.onscroll = function() {
    var scrollTop = document.documentElement.scrollTop;
    if (scrollTop >= 260) {
        seckillNav.className = 'seckill-nav seckill-navfixed';
    } else {
        seckillNav.className = 'seckill-nav';
    }
}