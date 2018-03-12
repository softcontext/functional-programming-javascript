var MyModule = (function(exp) { // 지역변수
  let _myPrivateVar = 'Private';

  exp.method1 = function() {
    return _myPrivateVar;
  };

  exp.method2 = function(txt) {
    _myPrivateVar = txt;
  };

  return exp;
})({});

console.log(MyModule);
console.log(MyModule.method1());
MyModule.method2('Changed');
console.log(MyModule.method1());
