var _ = require('lodash');
var {Node,Tree} = require('./node.and.tree');
var {Person} = require('../model/model');

var church = new Person('1', 'Church', '111-11-1111');
var rosser = new Person('2', 'Rosser', '222-22-2222');
var mendelson = new Person('3', 'Mendelson', '333-33-3333');
var sacks = new Person('4', 'Sacks', '444-44-4444');
var turing = new Person('5', 'Turing', '555-55-5555');
var gandy = new Person('6', 'Gandy', '666-66-6666');
var kleene = new Person('7', 'Kleene', '777-77-7777');
var nelson = new Person('8', 'Nelson', '888-88-8888');
var constable = new Person('9', 'Constable', '999-99-9999');

const nodeChurch = new Node(church);
const nodeRosser = new Node(rosser);
const nodeMendelson = new Node(mendelson);
const nodeSacks = new Node(sacks);
const nodeTuring = new Node(turing);
const nodeGandy = new Node(gandy);
const nodeKleene = new Node(kleene);
const nodeNelson = new Node(nelson);
const nodeConstable = new Node(constable);

nodeChurch.append(nodeRosser).append(nodeTuring).append(nodeKleene);
nodeRosser.append(nodeMendelson).append(nodeSacks);
nodeTuring.append(nodeGandy);
nodeKleene.append(nodeNelson).append(nodeConstable);

const tree = Tree.map(nodeChurch, p => p.fullname);

console.log(tree);
