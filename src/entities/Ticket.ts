import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, JoinColumn } from "typeorm";
import TypeTicket from "./TypeTicket";
import User from "./User";
import Room from "./Room";
import NotFoundError from "@/errors/NotFoundError";
import TicketData from "@/interfaces/ticket";

@Entity("tickets")
export default class Ticket extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User)
  @JoinColumn({ name: "userId" })
  user: User;

  @ManyToOne(() => TypeTicket, (type) => type.ticket, { eager: true })
  @JoinColumn({ name: "typeId" })
  type: TypeTicket;

  @Column({ type: "boolean", default: false })
  isPaid: boolean;

  @Column({ nullable: true })
  roomId: number;

  @ManyToOne(() => Room, (room: Room) => room.tickets)
  @JoinColumn()
  room: Room;

  static async getByUserId(userId: number) {
    return await this.findOne({ where: { id: userId } });
  }

  static async updateTicketPayment(ticket: TicketData) {
    if(ticket.isPaid === undefined) throw new NotFoundError;
    
    ticket.isPaid = true;
    const ticketPaid = this.create(ticket);
    await ticketPaid.save();
    return ticketPaid;
  }
}

