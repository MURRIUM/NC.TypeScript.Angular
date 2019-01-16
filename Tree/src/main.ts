import {Tree} from './Tree';

const MyTree = new Tree<string>();
MyTree.insert(5, '5');
MyTree.insert(12, '12');
MyTree.insert(1, '1');
MyTree.insert(3, '3');
MyTree.insert(8, '8');
MyTree.insert(0, '0');
MyTree.insert(15, '15');
MyTree.insert(-1, '-1');
MyTree.insert(2, '2');
MyTree.insert(4, '4');
MyTree.printTree();
console.log(MyTree.searchKey(1));
MyTree.deleteKey(1);
MyTree.printTree();

