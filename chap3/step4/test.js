var _ = require('lodash');

var {Node,Tree} = require('./node.and.tree');
var {Person} = require('../model/model');

var church = new Person('1st', 'Church', '111-11-1111');
var rosser = new Person('2nd', 'Rosser', '222-22-2222');
var mendelson = new Person('3rd', 'Mendelson', '333-33-3333');
var sacks = new Person('4th', 'Sacks', '444-44-4444');
var turing = new Person('5th', 'Turing', '555-55-5555');
var gandy = new Person('6th', 'Gandy', '666-66-6666');
var kleene = new Person('7th', 'Kleene', '777-77-7777');
var nelson = new Person('8th', 'Nelson', '888-88-8888');
var constable = new Person('9th', 'Constable', '999-99-9999');

// 각 Node 객체마다 Person 객체를 갖는다.
const nodeChurch = new Node(church);
const nodeRosser = new Node(rosser);
const nodeTuring = new Node(turing);
const nodeKleene = new Node(kleene);

const nodeMendelson = new Node(mendelson);
const nodeSacks = new Node(sacks);
const nodeGandy = new Node(gandy);
const nodeNelson = new Node(nelson);
const nodeConstable = new Node(constable);

nodeChurch.append(nodeRosser).append(nodeTuring).append(nodeKleene);

nodeRosser.append(nodeMendelson).append(nodeSacks);
nodeTuring.append(nodeGandy);
nodeKleene.append(nodeNelson).append(nodeConstable);

const tree = Tree.map(nodeChurch, p => p.fullname);
console.log();

console.log(tree);
