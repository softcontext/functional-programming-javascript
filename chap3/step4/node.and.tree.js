var _ = require('lodash');

var {Person} = require('../model/model');

class Node {
  constructor(val){
    this._val = val;
    this._parent = null;
    this._children = [];
  }

  get value(){
    return this._val;
  }
  get children(){
    return this._children;
  }

  isRoot(){
    return this._parent !== null; // 부모 객체가 존재하면 true를 반환한다.
  }
  hasChildren(){
    return this._children.length > 0;
  }

  set value(val){
    this._val = val;
  }
  append(child){
    child._parent = this; // 자식객체의 부모로 이 객체를 지정한다.
    this._children.push(child); // 이 객체에 자식객체를 추가한다.
    return this; // 메소드 체이닝을 위해서 객체 자신을 반환한다.
  }
  toString(){
    return `Node {val: ${this._val}, children: ${this._children}}`;
  }
}

class Tree {
  constructor(root){
    this._root = root;
  }

  get root(){
    return this._root;
  }

  static map(node, fn, tree=null){
    // console.log(node.value instanceof Person); // true

    node.value = fn(node.value); // fn : person => person.fullname
    console.log('>', node.value);

    if (tree === null) {
      tree = new Tree(node);
    }
    if (node.hasChildren()) {
      _.map(node.children, function (child) {
        Tree.map(child, fn, tree);
      });
    }
    return tree;
  }
}

module.exports = {
  Node,
  Tree
}
