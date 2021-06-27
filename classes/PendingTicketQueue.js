const Node = require('./Node')

class PendingTicketQueue {
  constructor() {
    this.length = 0
    this.first = null
    this.last = null
  }

  enqueue(value) {
    const newNode = new Node(value)

    if (!this.length) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }

    ++this.length
    return this
  }

  dequeue() {
    if (!this.length) return this

    const nodeToDequeue = this.first

    if (!this.first.next) {
      this.first = null
      this.last = null
    } else {
      this.first = this.first.next
    }

    --this.length
    return nodeToDequeue.value
  }
}

module.exports = PendingTicketQueue