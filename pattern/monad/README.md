# 모나드

https://www.haruair.com/blog/2986

모나드는 순서가 있는 연산을 처리하는데 사용하는 디자인 패턴이다.
모나드는 순수 함수형 프로그래밍 언어에서 부작용을 관리하기 위해 광범위하게 사용되며
복합 체계 언어에서도 복잡도를 제어하기 위해 사용된다.

모나드는 타입으로 감싸 빈 값을 자동으로 전파하거나(Maybe 모나드) 또는
비동기 코드를 단순화(Continuation 모나드) 하는 등의 행동을 추가하는 역할을 한다.

모나드는 다음 세가지 조건을 만족해야 한다.

* 타입 생성자 – 기초 타입을 위한 모나드화된 타입을 생성하는 기능.
예를 들면 기초 타입인 number를 위해 Maybe<number> 타입을 정의하는 것.

* unit 함수 – 기초 타입의 값을 감싸 모나드에 넣음.
Maybe 모나드가 number 타입인 값 2를 감싸면 타입 Maybe<number>의 값 Maybe(2)가 됨.

* bind 함수 – 모나드 값으로 동작을 연결하는 함수.

```
interface M<T> {

}

function unit<T>(value: T): M<T> {

}

function bind<T, U>(instance: M<T>, transform: (value: T) => M<U>): M<U> {

}
```

Note: 여기에서의 bind 함수는 Function.prototype.bind 함수와 다르다.
Function.prototype.bind는 ES5부터 제공하는 네이티브 함수로 부분 적용한 함수를 만들거나
함수에서 this 값을 바꿔 실행할 때 사용하는 함수다.

JavaScript와 같은 객체지향 언어에서는 unit 함수는 생성자와 같이 표현될 수 있고
bind 함수는 인스턴스의 메소드와 같이 표현될 수 있다.

```
interface MStatic<T> {
    new(value: T): M<T>;
}

interface M<T> {
    bind<U>(transform: (value: T) => M<U>): M<U>;
}
```

또한 여기에서 다음 3가지 모나드 법칙을 준수해야 한다.

1. bind(unit(x), f) ≡ f(x)
2. bind(m, unit) ≡ m
3. bind(bind(m, f), g) ≡ bind(m, x => bind(f(x), g))

먼저 앞 두가지 법칙은 unit이 중립적인 요소라는 뜻이다.
세번째 법칙은 bind는 결합이 가능해야 한다는 의미로 결합의 순서가 문제가 되서는 안된다는 의미다.
이 법칙은 덧셈에서 확인할 수 있는 법칙과 같다.
즉, (8 + 4) + 2의 결과는 8 + (4 + 2)와 같은 결과를 갖는다.
