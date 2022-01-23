import TypeTicket from "@/entities/TypeTicket";

interface TicketData {
    id: number
    isPaid: boolean,
    roomId: number,
    type: TypeTicket,
}

export default TicketData;
