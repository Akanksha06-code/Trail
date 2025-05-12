const xlsx= require('xlsx');
const Income = require('../models/Income');


//add income source
exports.addIncome = async (req, res) => { 
    const  userId = req.user.id;
     
    try{
        
        const{icon,source,amount,date}= req.body;
        //validation: check for missing fields
        if (!source || !amount || !date) {
            return res.status(400).json({ message: "Please fill in all fields" });
        }
        const  newIncome = new Income({
            userId,
            icon,
            source,
            amount,
            date: new Date(date),
        });
        await newIncome.save();
            res.status(201).json({
                message: "Income source added successfully",
                newIncome,
            });
    }catch (error) {
        res.status(500).json({ message: "Error adding income source", error: error.message });
    }
}


//get all income sources
exports.getAllIncome = async (req, res) => {
    const userId = req.user.id;
    try {
        const income = await Income.find({ userId }).sort({ date: -1 });
        res.status(200).json({income});
    
    } catch (error) {
        res.status(500).json({ message: "Error retrieving income sources", error: error.message });
    }
 }



//delete income source
exports.deleteIncome= async (req, res) => {
    const userId= req.user.id;
    
    try {
        await Income.findByIdAndDelete( req.params.id);
        res.status(200).json({ message: "Income source deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting income source", error: error.message });
    }
};


//download income sources as excel
exports.downloadIncomeExcel= async (req, res) => {
    const userId = req.user.id;
    try {
        const income = await Income.find({ userId }).sort({ date: -1 });
        
        const data = income.map((item) => ({
            source: item.source,
            amount: item.amount,
            date: item.date.toISOString().split("T")[0], // Format date as YYYY-MM-DD
        }));
        
        const  wb = xlsx.utils.book_new();
        const ws = xlsx.utils.json_to_sheet(data);
        xlsx.utils.book_append_sheet(wb, ws, "Income");
        xlsx.writeFile(wb, "income_details.xlsx");
        res.download('income_details.xlsx');
    } catch (error) {
        res.status(500).json({ message: "Error downloading income sources", error: error.message });
    }
 }