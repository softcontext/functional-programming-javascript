var MyModule = (function(exp) { // 지역변수
  exp = exp || {};
  
  let _data = 'Private';

  exp.getData = function() {
    return _data;
  };

  exp.setData = function(data) {
    _data = data;
  };

  return exp;
})({});

console.log(MyModule);
console.log(MyModule.getData());

MyModule.setData('Changed');

console.log(MyModule.getData());
