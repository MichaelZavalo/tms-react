class BinarySearchTree {
    constructor(value) {
        this.value = value;
    }

    root() {

        return 
    }

    insert(key, value) {

        return this;
    }

    delete(key) {

        return this;
    }

    search(key) {

        return this;
    }

    contains(value) {

        return this;
    }
    
    traverse(order) {

    }

    verify() {

    }
}



//examples
const bst = new BinarySearchTree();

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


//examples
const bst = new BinarySearchTree();

bst.insert(2, 'two').insert(1, 'one').insert(3, 'three');

//---2----
//1-----3-
//--------

bst.traverse(true); // ['one', 'two', 'three']
bst.traverse(false); // ['three', 'two', 'one']

bst._root.key = 0;
bst.verify(); //false