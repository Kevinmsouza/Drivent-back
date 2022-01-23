import { Router } from "express";

import * as controller from "@/controllers/client/ticket";

const router = Router();

router.get("/", controller.getTicketByUser);
router.put("/payment", controller.updateTicket);

export default router;
