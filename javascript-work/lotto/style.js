// var num = Math.random() * 45 + 1;
// var ball1 = parseInt(num);
// document.write(ball1);

// var lotto = [1,2,3,4,5,6];
// lotto.push(7);
// document.write(lotto[5]); 랜덤 숫자들의 5번째 자리에오는 숫자
// document.write(lotto); 랜덤 숫자들의 push를 이용해 뒤에 추가한 7까지 볼 수 있는 코드


// paseInt 소숫점이 아닌 정수
// var lotto = [];
// lotto.push(parseInt(Math.random()*45+1));
// lotto.push(parseInt(Math.random()*45+1));
// lotto.push(parseInt(Math.random()*45+1));
// lotto.push(parseInt(Math.random()*45+1));
// lotto.push(parseInt(Math.random()*45+1));
// lotto.push(parseInt(Math.random()*45+1));
// document.write(lotto);


// for 반복문
// for (var i=0; 1<6; i++){
//     document.write(i);
// }

// 반복문과 정수선언문을 활용한 로또추첨
// var lotto = [];
// for (var i=0; i<6; i++){
//     lotto.push(parseInt(Math.random() * 45 + 1));
// }
// document.write(lotto);


// 중복되는 숫자를 제외하고 출력하는 코드
// num이라는 숫자가 이 배열 안에 없을 때 push한다는 구조
// var lotto = [];
// for (var i=0; i<6; i++){
//     var num=(parseInt(Math.random() * 45 + 1));
//     if (lotto.indexOf(num) == -1){
//         lotto.push(num);
//     }
// }
// document.write(lotto);


// 중복되는 숫자가 있더라고 숫자를 제외하고 내가 지정한 갯수의 숫자만큼 반복한다
// length:숫자의 길이 < 6 => 5개의 숫자를 반복
// var lotto = [];
// while (lotto.length < 6 ) {
//     var num=(parseInt(Math.random() * 45 + 1));
//     if (lotto.indexOf(num) == -1){
//         lotto.push(num);
//     }
// }
// document.write(lotto);


// 숫자를 순서대로 배열하는 방법
// sort를 이용하여 오름차순으로 정리해준다
// var lotto = [1,2,3,33,22,11];
// lotto.sort((a,b)=>a-b);
// document.write(lotto);


// 랜덤으로 출력한 숫자들을 sort를 이용하여 오름차순으로 나열하기
var lotto = []; /*로또라는 변수*/
while (lotto.length < 6 ) { /*whtile 조건식 안에 Lotto.length를 활용하여 5개의 숫자를 나열하도록*/
    var num=(parseInt(Math.random() * 45 + 1)); /*소숫점을 버린 1부터 45까지의 정수를 만들기*/
    if (lotto.indexOf(num) == -1){  /*배열에 동일한 숫자가 있는지 indexOf를 활용하여 확인한다*/
        lotto.push(num); /*동일한 숫자가 있다면 다른 랜덤 숫자를 대신 넣어준다*/
    }
}

lotto.sort((a,b)=>a-b); /*오름차순으로 정렬한다*/
document.write(lotto); /*이 모든식의 결과를 화면에 출력한다*/
