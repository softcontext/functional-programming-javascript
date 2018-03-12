/*
4 function Number()
null function Tuple(...typeInfo)
 */

if (!Function.prototype.getName) {
  Function.prototype.getName = function(){
    console.log('#1', this.toString()); // function Number() { [native code] }

    console.log('#2', /function ([^(]*)/.exec(this.toString()));
    // [ 'function Number',
    //   'Number',
    //   index: 0,
    //   input: 'function Number() { [native code] }' ]

    // function 문자열 다음에 공백한칸 띄고 괄호가 아닌 모든 문자열을 캡쳐
    return /function ([^(]*)/.exec(this.toString())[1].toLowerCase();
  };
}

const Tuple = function Tuple(){

}

console.log(typeof 4 === Number.getName());
console.log('-----------------');
/*
  주의사항
 */
console.log(typeof null === 'object'); // true
console.log(typeof null === Tuple.getName()); // false, 다음 코드와 동일 함 'object' === 'tuple'
// null 체크는 typeof 연산자로 할 수 없다. typeof null === 'object' 이기 때문이다.
