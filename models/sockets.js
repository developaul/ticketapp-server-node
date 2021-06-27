const TicketList = require("./ticket-list");

class Sockets {

	constructor(io) {

		this.io = io;

		this.ticketList = new TicketList()

		this.socketEvents();
	}

	socketEvents() {
		this.io.on('connection', (socket) => {
			socket.on('generate-ticket', (_, callback) => {
				const newTicket = this.ticketList.createTicket()
				callback(newTicket)
			})

			socket.on('assign-ticket', ({ agent, desktop }, callback) => {
				const assignedTicket = this.ticketList.toAssignTicket(agent, desktop)
				callback(assignedTicket)
				this.io.emit('assigned-ticket', this.ticketList.lastThirteen)
			})
		});
	}
}


module.exports = Sockets;