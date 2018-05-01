/*
모나드는 값을 보관하는 컨테이너다.
컨테이너는 함수의 합성과 상호작용을 위한 기능을 제공한다.


The Monad Pattern

https://nunoalexandre.com/2016/10/13/the-monad-pattern

I like to think of Monad as a container:

  Each Monad type is a special type of container
  that defines a specific rule for interaction,
  And each type of container holds values of any type.


class  Monad m  where
   return           :: a -> m a
   (>>=)            :: m a -> (a -> m b) -> m b

Think of the lower m has a specific type of container, and of a and b has data types.

Having that in mind, what we have is that
for something to be a Monad, m, it must define the following two operations as they are intended:

return           :: a -> m a

Imagine the Monad being a plate.
The return function-to-be defines that given any kind of food, it will return a plate with that piece of food in it.

(>>=)

(>>=), also called bind, as the role of binding computation.
This is where the idea of building complexity using simple blocks takes place.

This function-to-be defines that given gives two arguments,
outputs a container of the same type holding a value of any type (maybe the same, a, or not).

m a

A Monad m a, this is, a specific type of container holding a value of type a.
A function that receives a value of that same type a and returns a container of the same type received in the first argument,
holding a value of any type (maybe the same, a, or not).

three (monadic) laws:

Left identity: return a >>= f ≡ f a
리턴 값 a는 함수 f의 인수로 전달된다.

Right identity: m >>= return ≡ m
함수는 모나드를 인수로 받고 모나드를 리턴한다.

Associativity: (m >>= f) >>= g ≡ m >>= (\x -> f x >>= g)
 */
