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
let node = new Noda(1,"one");
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

    inOrderTraverse() {
        if (node != null) {
            this.inOrderTraverse(node.left, callback);
            callback(node.data);
            this.inOrderTraverse(node.right, callback);
        }
    }
    //doesn't work
    delete(key) {

        return this;
    }
    //doesn't work
    search(key) {
        if (key === null) {
            return null;
        } else if (key < node.key) {
            return this.search(node.left, key);
        } else if (key > this.key) {
            return this.search(node.right, key);
        } else {
            return this.value;
        }
    }
    //доделать 
    contains(value) {
        if(node.value === value){
            return true;    
        } else this.inOrderTraverse
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