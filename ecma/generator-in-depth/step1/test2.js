/*
#2. 제너레이터란 무엇인가?

제너레이터는 로직의 수행을 멈추고 재 시작할 수 있는 함수다.

제너레이터를 선언하는 4가지 방법을 살펴보자.

1. 제너레이터 함수 선언식

function* genFunc() { ··· }
let genObj = genFunc();

2. 제너레이터 함수 표현식

const genFunc = function* () { ··· };
let genObj = genFunc();

3. 객체 리터럴 안에서 사용하는 제너레이터 메소드선언 축약식

let obj = {
    * generatorMethod() { ··· }
};
let genObj = obj.generatorMethod();

4. 클래스 선언식 또는 클래스 표현식안에서 사용하는 제너레이터 메소드선언식

class MyClass {
    * generatorMethod() { ··· }
}
let genObj = new MyClass().generatorMethod();

제너레이터의 3가지 역할

1. 데이터 공급자(Producer)
2. 데이터 소비자(Consumer)
3. 데이터 공급자이자 소비자(Coroutine) 역할을 모두 수행
 */

function* genFunc() {
  yield 'a';
  yield 'b';
}

// #1 제너레이터 객체는 for-of 구문과 같이 사용할 수 있다.
for (let x of genFunc()) {
  console.log(x);
}

// #2 제너레이터 객체와 스프레드 연산자를 같이 사용할 수 있다.
let arr = [...genFunc()];
console.log(arr);

// #3 제너레이터 객체와 해체할당 구문을 같이 사용할 수 있다.
let [x, y] = genFunc();
console.log(x, y);
