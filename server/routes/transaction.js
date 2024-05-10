import express from "express";
import Transaction from "../models/Transaction.js";


const router = express.Router()
router.get("/transactions", async (req, res) => {
    try{
        //limit to 50 for user usability, and created one is the same thing as array[::-1] in python
        const transactions = await Transaction.find()
        .limit(50)
        .sort({ createdOn: -1 });
        res.status(200).json(transactions)
    }catch(error){
        res.status(404).json({message: error.message})
    }
})

export default router;