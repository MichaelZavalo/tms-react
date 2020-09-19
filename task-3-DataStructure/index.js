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
        this.rootNode = null;
    }
    //done
    root() {
        return this.rootNode;
    }
    // done
    insert(key, value) {
        let newNode = new Noda(key, value);

        if (this.rootNode === null) {
            this.rootNode = newNode;
        } else {
            this.insertNode(this.rootNode, newNode);
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

    indNodeByKey(node, key) {
        if (node === null) {
        return null;
        }
        
        if (node.key === key) {
        return node.value;
        }
    
        if (node.key > key) {
            return this.indNodeByKey(node.left, key)
        } else return this.indNodeByKey(node.right, key)
    }

    //doesn't work
    search(key) {
        return this.indNodeByKey(this.root(), key);
    }
    
    //доделать 
    contains(value) {
        return this.indNodeByValue(this.root(), value);
    }

    indNodeByValue(node,value) {
        if (node === null) {
            return false   
        }
        if (node.value === value) {
            return true;
        }

        return this.indNodeByValue(node.left, value) || this.indNodeByValue(node.right, value);
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

