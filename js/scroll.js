    /**
 * Created by Nan on 2016/12/13.
 */
var myScroll, pullDownEl, pullDownOffset, pullUpEl, pullUpOffset, wrap,generatedCount = 0;
wrap = document.getElementById('thelist');

function pullDownAction() {
    setTimeout(function () {
        //do init
        console.log('刷新完成');
        myScroll.refresh();
    }, 1000)
}
function pullUpAction(){
    for(var i = 0 ; i<10 ; i++){
        var li = document.createElement('li');
        var span1=document.createElement('span')
        var span2=document.createElement('span')
        var span3=document.createElement('span')
        var span4=document.createElement('span')
        span1.innerText='张三'
        span2.innerText='朋友'
        span3.innerText='1000'
        span4.innerText='2017-10-6 09:30'
        li.appendChild(span1)
        li.appendChild(span2)
        li.appendChild(span3)
        li.appendChild(span4)
        wrap.appendChild(li);
    }
    myScroll.refresh();
}
function loadAction(){
    var li;
    for (var i=0; i<10; i++) {
        li = document.createElement('li');
        var span1=document.createElement('span')
        var span2=document.createElement('span')
        var span3=document.createElement('span')
        var span4=document.createElement('span')
        span1.innerText='张三'
        span2.innerText='朋友'
        span3.innerText='1000'
        span4.innerText='2017-10-6 09:30'
        li.appendChild(span1)
        li.appendChild(span2)
        li.appendChild(span3)
        li.appendChild(span4)
        wrap.appendChild(li, wrap.childNodes[0]);
    }
    myScroll.refresh();
}
function loaded() {
    pullDownEl = document.getElementById("pullDown");
    pullUpEl = document.getElementById("pullUp");
    pullDownOffset = pullDown.offsetHeight;

    myScroll = new iScroll("wrapper", {
        topOffset: pullDownOffset,
        onScrollMove: function () {
            if (this.y > 5 && !(pullDownEl.className.match("flip"))) {
                pullDownEl.className = "flip";
                pullDownEl.querySelector(".pullDownLabel").innerHTML = "释放刷新";
            }else if (this.y < this.maxScrollY && !(pullUpEl.className.match("flip"))){
                pullUpEl.className = "flip";
                pullUpEl.querySelector(".pullUpLabel").innerHTML = "释放刷新";
            }
        }
        ,
        onScrollEnd: function () {
            if (pullDownEl.className.match("flip")) {
                pullDownEl.className = "loading";
                pullDownEl.querySelector(".pullDownLabel").innerHTML = "正在加载";
                pullDownAction();
                loadAction();
            }
            else if (pullUpEl.className.match("flip")){
                pullUpEl.className = "loading";
                pullUpEl.querySelector(".pullUpLabel").innerHTML = "正在加载";
                pullUpAction();
            }
        },
        onRefresh: function () {
            if (pullDownEl.className.match("loading")) {
                pullDownEl.className = "";
                pullDownEl.querySelector(".pullDownLabel").innerHTML = "下拉刷新";
            }
            else if(pullUpEl.className.match("loading")){
                pullUpEl.className = "";
                pullUpEl.querySelector(".pullUpLabel").innerHTML = "上拉加载";
            }
        }
    })
}

loaded();
loadAction();