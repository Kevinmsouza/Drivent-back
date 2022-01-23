import { Request, Response } from "express";

import * as service from "@/services/client/ticket";

export async function getTicketByUser(req: Request, res: Response) {
  const userId = req.user.id;
  const ticket = await service.getTicketByUser(userId);
  res.send(ticket);
}

export async function updateTicket(req: Request, res: Response) {
  const ticket = req.body;
  const tickedPaid = await service.updateTicket(ticket);
  res.send(tickedPaid);
}
