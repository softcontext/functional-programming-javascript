/*
모나드란 무엇인가?

https://namu.wiki/w/Haskell?from=%ED%95%98%EC%8A%A4%EC%BC%88#s-3.6

실용적인 관점에서 모나드의 가장 중요한 용도는 Side-Effect가 있는 Impure Function을
Pure Function인 것처럼 다루는 것이다.

Side-Effect는 보통 외부 State가 있고 이것에 접근하여 생긴다.
반대로 Side-Effect가 없는 Pure Function은 모든 정보가 인수로 전달되어 외부 상태에 접근하지 않는다.

그렇다면 어떤 함수에 인수로 State를 전달하고 그에 대한 결과로 State를 리턴한다면
외부 상태에 접근을 하지 않아도 되며 pure function이 된다.

이 때 State 외에도 결과값 a도 있을 것이다.
즉, 입력이 State면 출력이 (a, State)가 되는 것이다.
이것을 State->(a, State) 라고 나타낸다.

이러한 함수는 다양하게 있을 수 있으며
그 결과값도 a 뿐만 아니라 여러가지가 있을 것이다.

그런데 하스켈은 순수 함수형 언어이기 때문에
함수를 합성하는 방식으로 작성을 해야한다.

f와 g를 합성하는 예: g(f(x))

그런데 만약, f가 State->(a, State), g가 State->(b, State)라면
f의 출력과 g의 입력 타입이 맞지 않게 된다.

이 때 f의 결과값인 (a, State)를 a와 State로 분리해서
a는 g와 결합하여 새로운 함수 g'를 만들고
State를 이 새로운 함수 g'에 전달하는 방식을 사용하게 된다.

이렇게 결합을 해주는 것이 bind(Haskell에서 >>=연산자)라고 하고
결합되는 것을 monad라고 한다.

여기서 끝이 아니라 필요하다면 함수를 더 잇는 것도 가능하며,
이렇게 여러 개를 이으면 거대한 하나의 Pure Function이 된다.


Why do we need monads?

https://stackoverflow.com/questions/2704652/monad-in-plain-english-for-the-oop-programmer-with-no-fp-background

1. We want to program only using functions.

2. Then, we have a first big problem.

f(x) = 2 * x

g(x,y) = x / y

How can we form an ordered sequence of functions using no more than functions?

Solution: compose functions.
If you want first g and then f, just write

f(g(x,y))

3. More problems:
some functions might fail (i.e. g(2,0), divide by 0).

We have no "exceptions" in FP. How do we solve it?

Solution: Let's allow functions to return two kind of things:
instead of having

g : Real,Real -> Real
(function from two reals into a real),

let's allow

g : Real,Real -> Real | Nothing
(function from two reals into (real or nothing)).

4. But functions should return only one thing.

Solution: let's create a new type of data to be returned,
a "boxing type" that encloses maybe a real or be simply nothing.

Hence, we can have

g : Real,Real -> Maybe Real.

5. What happens now to f(g(x,y))?
f is not ready to consume a Maybe Real.

And, we don't want to change every function
we could connect with g to consume a Maybe Real.

Solution: let's have a special function to
"connect"/"compose"/"link" functions.

That way, we can, behind the scenes, adapt the output of one function
to feed the following one.

In our case:

g >>= f (connect/compose g to f).

We want >>= to get g's output, inspect it and,
in case it is Nothing just don't call f and return Nothing;

or on the contrary, extract the boxed Real and feed f with it.
(This algorithm is just the implementation of >>= for the Maybe type).

6. Many other problems arise
which can be solved using this same pattern:

1. Use a "box" to codify/store different meanings/values,
and have functions like g that return those "boxed values".

2. Have composers/linkers g >>= f to help connecting g's output to f's input, s
o we don't have to change f at all.

7. Remarkable problems that can be solved using this technique are:
having a global state that every function in the sequence of functions ("the program") can share: solution StateMonad.

We don't like "impure functions":
functions that yield different output for same input.

Therefore, let's mark those functions,
making them to return a tagged/boxed value: IO monad.
 */
