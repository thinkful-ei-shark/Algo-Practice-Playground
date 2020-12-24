/* Create a linked list class
 */

class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        } else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    insertBefore(newItem, existingItem) {
        // set default variables for currNode to head and nextNode to currNode.next
        let currNode = this.head;
        // checks if existing item is head item in which case just insertFirst()
        if (existingItem === this.head) {
            this.insertFirst(newItem);
        }
        // loops thtough untill nextNode is equal to existingItem we went to insert before
        while (currNode.next.value !== existingItem) {
            // checks if at end of list
            if (currNode.next.value === null) {
                return null
            } else {
                currNode = currNode.next
            }
        }
        currNode.next = new _Node(newItem, currNode.next)
    }

    insertAfter(newItem, existingItem) {
        // set default variables for currNode to head and nextNode to currNode.next
        let currNode = this.head;
        // checks if existing item is head item in which case just insertFirst()
        if (existingItem === this.head) {
            this.insertFirst(newItem);
        }
        // loops thtough untill nextNode is equal to existingItem we went to insert before
        while (currNode.value !== existingItem) {
            if (currNode.value === null) {
                return null
            } else {
                currNode = currNode.next
                console.log(currNode.next)
            }
        }
        currNode.next = new _Node(newItem, currNode.next)
    }


    insertAt(newItem, pos) {
        // set counter and currNode
        let i = 0;
        let currNode = this.head;

        // if pos is first or head
        if (pos === 0) {
            this.insertFirst(newItem)
        }
        // if empty list
        if (!this.head) {
            return null;
        }
        // loops through possible positions and traverses list until pos is reached
        while (i < pos) {
            currNode = currNode.next;
            i++;
            console.log('while loop running')
            console.log(currNode)
        }
        this.insertBefore(newItem, currNode.value);
    }




    find(item) {
        let currNode = this.head;

        if (!this.head) {
            return null;
        }

        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null;
            } else {
                currNode = currNode.next;
            }
            return currNode;
        }
    }

    remove(item) {
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while (currNode !== null && currNode.value !== item) {
            // Save the previous node
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
}



module.exports = {
    _Node,
    LinkedList,
};
