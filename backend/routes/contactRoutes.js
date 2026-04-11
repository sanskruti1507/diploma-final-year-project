import express from "express";
import { saveContact, getAllContacts } from "../controllers/contactController.js";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/contact", saveContact);

router.get("/contact", getAllContacts);

router.delete("/contact/:id", async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
});

export default router;