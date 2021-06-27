const Node = require('./Node')

class StackAssignedTickets {
  constructor() {
    this.top = null
    this.bottom = null
    this.length = 0
  }

  push(value) {
    const newNode = new Node(value)

    if (!this.length) {
      this.top = newNode
      this.bottom = newNode
    } else {
      newNode.next = this.top
      this.top = newNode
    }

    ++this.length
    return this
  }

  getLastNodes(quantityLast) {
    const lastNodes = []

    let currentNode = this.top

    for (let i = 0; i < quantityLast && currentNode; ++i) {
      lastNodes.push(currentNode.value)
      currentNode = currentNode.next
    }

    return lastNodes
  }

}

module.exports = StackAssignedTickets