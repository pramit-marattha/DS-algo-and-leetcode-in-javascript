
// es6 class

class listNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

const node = new listNode(1);
console.log(node);
node.next = new listNode(2);
console.log(node);
const head = new listNode(0);
head.next = node;
console.log(head)

// functional class 

function listNode(value){
    this.value = value;
    this.next = null;
}

const node = new listNode(1);
console.log(node);
node.next = new listNode(2);
console.log(node);
const head = new listNode(0);
head.next = node;
console.log(head) 

// looping in linked list
// pointer traversal in linked list

let on = head;
while(on !== null){
    console.log(on.value)
    on = on.next
}