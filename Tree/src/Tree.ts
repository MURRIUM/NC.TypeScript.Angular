import {NodeOfTree} from './NodeOfTree';

export class Tree<T> {
  private _Root: NodeOfTree<T>;

  constructor() {
    this._Root = null;
  }

  public insert(key: number, value: T): void {
    if (this._Root !== null) {
      this._insertIn(key, value, this._Root);
    } else {
      this._Root = new NodeOfTree<T>();
      this._Root.key = key;
      this._Root.value = value;
      this._Root.left = null;
      this._Root.right = null;
    }
  }

  public printTree(): void {
    console.log('There is a tree:');
    console.log(this._Root);
    this._printTreeLog(this._Root);
  }

  public searchKey(key: number): NodeOfTree<T> {
    try {
      return this._searchKeyIn(key, this._Root);
    } catch (e) {
      throw new Error(`There is no element with that count. ${e}`);
    }
  }

  public deleteKey(key: number): void {
    this._Root = this._deleteKeyIn(key, this._Root);
  }

  private _printTreeLog(tree: NodeOfTree<T>): void {
    if (tree === null) {
      return;
    }
    this._printTreeLog(tree.left);
    this._printTreeLog(tree.right);
    console.log(`${tree.key}: ${tree.value}; `);
  }

  private _deleteKeyIn(key: number, tree: NodeOfTree<T>): NodeOfTree<T> {
    if (tree === null) {
      return;
    }
    if (tree.key > key) {
      tree.left = this._deleteKeyIn(key, tree.left);
    } else if (tree.key < key) {
      tree.right = this._deleteKeyIn(key, tree.right);
    } else if (tree.left !== null && tree.right !== null) {
      tree.key = this._minimumLeaf(tree.right).key;
      tree.value = this._minimumLeaf(tree.right).value;
      tree.right = this._deleteKeyIn(tree.key, tree.right);
    } else {
      if (tree.left !== null) {
        tree = tree.left;
      } else {
        tree = tree.right;
      }
    }
    return tree;
  }

  private _minimumLeaf(tree: NodeOfTree<T>): NodeOfTree<T> {
    if (tree.left === null) {
      return tree;
    } else {
      return this._minimumLeaf(tree.left);
    }
  }

  private _searchKeyIn(key: number, tree: NodeOfTree<T>): NodeOfTree<T> {
    if (tree.key === key) {
      return tree;
    }
    if (tree.key > key) {
      return this._searchKeyIn(key, tree.left);
    }
    if (tree.key < key) {
      return this._searchKeyIn(key, tree.right);
    }
  }

  private _insertIn(key: number, value: T, tree: NodeOfTree<T>): void {
    if (tree.key === key) {
      tree.value = value;
    } else if (tree.key > key) {
      if (tree.left === null) {
        tree.left = new NodeOfTree<T>() ;
        tree.left.key = key;
        tree.left.value = value;
        tree.left.left = null;
        tree.left.right = null;
      } else {
        this._insertIn(key, value, tree.left);
      }
    } else if (tree.key < key) {
      if (tree.right === null) {
        tree.right = new NodeOfTree<T>() ;
        tree.right.key = key;
        tree.right.value = value;
        tree.right.left = null;
        tree.right.right = null;
      } else {
        this._insertIn(key, value, tree.right);
      }
    }
  }
}
