//create class Noda for work with class BinarySearchThree
class Noda {
    constructor(key, value) {
        this.key = key;
        this.value = value;

        this.left = null;
        this.right = null;
    }
}
//for example
let node = new Noda(1, "one");
// create class BinarySearchThree
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    //done
    root() {
        return this.root;
    }
    // done
    insert(key, value) {
        let newNode = new Noda(key, value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
        return this;
    }
    //вспомогательный метод для insert
    insertNode(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    //doesn't work
    delete(key) {

        return this;
    }

    searchByKey(node, key) {
        if (node === null) {
        return null;
        }
        
        if (node.key === key) {
        return node.value;
        }
    
        return searchByKey(node.left, key) || searchByKey(node.right, key);
    }

    //doesn't work
    search(node) {
        return this.searchByKey(this.root, key);
    }
    //доделать 
    contains(value) {
        if (root === null) {
            return false;
        }

        if (root.value === value) {
            return true;
        }

        if (Noda.value > value) {
            return this.contains(root.right.value, value);
        }
        if (Noda.value < value) {
            return this.contains(root.left.value, value);
        }
    }
    //doesn't work
    traverse(order) {

    }
    //doesn't work
    verify() {

    }
}

const bst = new BinarySearchTree();
bst.insert(2, 'two').insert(1, 'one').insert(3, 'three');
/* 
//examples


bst.insert(2, 'two').insert(1, 'one').insert(3, 'three');

//---2----
//1-----3-
//--------

bst.root(); // 'two'

bst.delete(1).delete(3);

//---2----
//---------
//----------

bst.root(); // 'two'

bst.insert(1, 'one');
bst.insert(3, 'three');

//---2----
//1-----3-
//--------

bst.search(1); // 'one'
bst.contains('three'); // true


//examples Advanse methods*

bst.insert(2, 'two').insert(1, 'one').insert(3, 'three');

//---2----
//1-----3-
//--------

bst.traverse(true); // ['one', 'two', 'three']
bst.traverse(false); // ['three', 'two', 'one']

bst._root.key = 0;
bst.verify(); //false */