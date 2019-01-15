class NodeOfTree<T> {
  public key: number;
  public value: T;
  public left: NodeOfTree<T>;
  public right: NodeOfTree<T>;
}

class Tree<T> {
  private Root: NodeOfTree<T>;

  Tree() {
    this.Root = null;
  }

  public Insert(key: number, value: T): void {
    if (this.Root != null) {
      this.InsertIn(key, value, this.Root);
    } else {
      this.Root = new NodeOfTree<T>();
      this.Root.key = key;
      this.Root.value = value;
      this.Root.left = null;
      this.Root.right = null;
    }
  }

  public PrintTree(): void {
    console.log('There is a tree:');
    console.log(this.Root);
    this.PrintTreeLog(this.Root);
  }

  public SearchKey(key: number): NodeOfTree<T> {
    try {
      return this.SearchKeyIn(key, this.Root);
    } catch (e) {
      throw new Error(`There is no element with that count. ${e}`);
    }
  }

  public DeleteKey(key: number): void {
    this.Root = this.DeleteKeyIn(key, this.Root);
  }

  private PrintTreeLog(tree: NodeOfTree<T>): void {
    if (tree == null) {
      return;
    }
    this.PrintTreeLog(tree.left);
    this.PrintTreeLog(tree.right);
    console.log(`${tree.key}: ${tree.value}; `);
  }

  private DeleteKeyIn(key: number, tree: NodeOfTree<T>): NodeOfTree<T> {
    if (tree == null) {
      return;
    }
    if (tree.key > key) {
      tree.left = this.DeleteKeyIn(key, tree.left);
    } else if (tree.key < key) {
      tree.right = this.DeleteKeyIn(key, tree.right);
         } else if (tree.left != null && tree.right != null) {
      tree.key = this.Minimum(tree.right).key;
      tree.value = this.Minimum(tree.right).value;
      tree.right = this.DeleteKeyIn(tree.key, tree.right);
    } else {
      if (tree.left != null) {
        tree = tree.left;
      } else {
        tree = tree.right;
      }
    }
    return tree;
  }

  private Minimum(tree: NodeOfTree<T>): NodeOfTree<T> {
    if (tree.left == null) {
      return tree;
    } else {
      return this.Minimum(tree.left);
    }
  }

  private SearchKeyIn(key: number, tree: NodeOfTree<T>): NodeOfTree<T> {
    if (tree.key === key) {
      return tree;
    }
    if (tree.key > key) {
      return this.SearchKeyIn(key, tree.left);
    }
    if (tree.key < key) {
      return this.SearchKeyIn(key, tree.right);
    }
  }

  private InsertIn(key: number, value: T, tree: NodeOfTree<T>): void {
    if (tree.key === key) {
      tree.value = value;
    } else if (tree.key > key) {
      if (tree.left == null) {
        tree.left = new NodeOfTree<T>() ;
        tree.left.key = key;
        tree.left.value = value;
        tree.left.left = null;
        tree.left.right = null;
      } else {
        this.InsertIn(key, value, tree.left);
      }
    } else if (tree.key < key) {
      if (tree.right == null) {
        tree.right = new NodeOfTree<T>() ;
        tree.right.key = key;
        tree.right.value = value;
        tree.right.left = null;
        tree.right.right = null;
      } else {
        this.InsertIn(key, value, tree.right);
      }
    }
  }
}

let MyTree = new Tree<string>();
MyTree.Insert(5, '5');
MyTree.Insert(12, '12');
MyTree.Insert(1, '1');
MyTree.Insert(3, '3');
MyTree.Insert(8, '8');
MyTree.Insert(0, '0');
MyTree.Insert(15, '15');
MyTree.Insert(-1, '-1');
MyTree.Insert(2, '2');
MyTree.Insert(4, '4');
MyTree.PrintTree();
console.log(MyTree.SearchKey(1));
MyTree.DeleteKey(1);
MyTree.PrintTree();

