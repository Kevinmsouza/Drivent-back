import Ticket from "@/entities/Ticket";
import TicketData from "@/interfaces/ticket";

export async function getTicketByUser(userId: number) {
  return await Ticket.getByUserId(userId);
}

export async function updateTicket(ticket: TicketData) {
  const tickedPaid = await Ticket.updateTicketPayment(ticket);

  return tickedPaid;
}
