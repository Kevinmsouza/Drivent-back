import Ticket from "@/entities/Ticket";

export async function getTicketByUser(userId: number) {
  const ticket = await Ticket.findOne({ where: { user: userId } });

  return ticket;
}

export async function updateTicket(ticket: Ticket) {
  const tickedPaid = await Ticket.updateTicketPayment(ticket);

  return tickedPaid;
}
