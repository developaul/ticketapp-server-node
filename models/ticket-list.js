const Ticket = require('./ticket')
const PendingTicketQueue = require('../classes/PendingTicketQueue')
const StackAssignedTickets = require('../classes/StackAssignedTickets')

class TicketList {
  constructor() {
    this.lastNumber = 0
    this.pendingTicketQueue = new PendingTicketQueue()
    this.stackAssignedTickets = new StackAssignedTickets()
  }

  get nextNumber() {
    return ++this.lastNumber
  }

  get lastThirteen() {
    return this.stackAssignedTickets.getLastNodes(13)
  }

  createTicket() {
    const newTicket = new Ticket(this.nextNumber)
    this.pendingTicketQueue.enqueue(newTicket)
    return newTicket
  }

  toAssignTicket(agent, desktop) {
    if (!this.pendingTicketQueue.length) return null

    const nextTicket = this.pendingTicketQueue.dequeue()

    nextTicket.agent = agent
    nextTicket.desktop = desktop

    this.stackAssignedTickets.push(nextTicket)
    return nextTicket
  }
}

module.exports = TicketList