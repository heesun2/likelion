// 글자 수 consol에 띄우기
// var content = document.getElementById('jasoseol').value;
// console.log(content.length);

// html에 작성한 텍스트의 길이를 알려주는 코드
// var content = document.getElementById('jasoseol').value;
// document.getElementById('count').innerHTML = '(' + content.length + '/200)';


// count 함수를 이용하여 html,css와 연결한다
// function counter() {
//     var content = document.getElementById('jasoseol').value;
//     document.getElementById('count').innerHTML = '(' + content.length + '/200)';
// }
// counter();


// substring를 이용하여 텍스트의 길이 제한을 적용한다
function counter() {
    var content = document.getElementById('jasoseol').value;
    if (content.length > 200) {
        content = content.substring(0,200);
        document.getElementById('jasoseol').value = content;
    }
    document.getElementById('count').innerHTML = '(' + content.length + '/200)';
}
counter();