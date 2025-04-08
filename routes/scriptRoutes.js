const express = require("express");
const router = express.Router();
const scriptService = require("../services/scriptService");

/**
 * @swagger
 * /api/scripts:
 *   get:
 *     summary: Get all scripts
 *     responses:
 *       200:
 *         description: List of scripts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   content:
 *                     type: string
 *   post:
 *     summary: Create a new script
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Script created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 content:
 *                   type: string
 */
router.get("/", async (req, res) => {
  try {
    const scripts = await scriptService.getAllScripts();
    res.json(scripts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  const { name, content } = req.body;
  try {
    const newScript = await scriptService.createScript(name, content);
    res.status(201).json(newScript);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
