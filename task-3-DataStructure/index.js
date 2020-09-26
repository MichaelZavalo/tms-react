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
        const nodeToDelete = this.findNodeByKey(this.rootNode, key);
        const minNode = this.findMinNode(nodeToDelete.right);

        nodeToDelete.key = minNode.key;
        nodeToDelete.value = minNode.value;


        this.rootNode = this.remove(this.root(), key);
        return this;
    }

    //вспомогательный метод для delete
    findMinNode(node,parent) {
        if (node.left) {
            return node;
        } else {
            return this.findMinNode(node.left, node);
        }
    }

    //вспомогательный метод для search
    findNodeByKey(node, key) {
        if (node === null) {
            return null;
        }

        if (node.key === key) {
            return node;
        }

        if (node.key > key) {
            return this.findNodeByKey(node.left, key)
        } else return this.findNodeByKey(node.right, key)
    }

    //done
    search(key) {
        let nodeFromSearch = this.findNodeByKey(this.root(), key);
        return nodeFromSearch.value;
    }

    //done 
    contains(value) {
        return this.findNodeByValue(this.root(), value);
    }
    //вспомогательный метод для contains
    findNodeByValue(node, value) {
        if (node === null) {
            return false
        }
        if (node.value === value) {
            return true;
        }

        return this.findNodeByValue(node.left, value) || this.findNodeByValue(node.right, value);
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
bst.root();


bst.search(1);
bst.contains('three');

//examples Advanse methods*
/* 
bst.insert(2, 'two').insert(1, 'one').insert(3, 'three');

//---2----
//1-----3-
//--------

bst.traverse(true); // ['one', 'two', 'three']
bst.traverse(false); // ['three', 'two', 'one']

bst._root.key = 0;
bst.verify(); //false */