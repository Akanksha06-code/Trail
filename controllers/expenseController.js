const xlsx= require('xlsx');
const Expense = require('../models/expense');



//add expense source
exports.addExpense = async (req, res) => { 
    const  userId = req.user.id;
     
    try{
        
        const{icon,category,amount,date}= req.body;
        //validation: check for missing fields
        if (!category || !amount || !date) {
            return res.status(400).json({ message: "Please fill in all fields" });
        }
        const  newExpense = new Expense({
            userId,
            icon,
            category,
            amount,
            date: new Date(date),
        });
        await newExpense.save();
            res.status(201).json({
                message: "Expense source added successfully",
                newExpense
            });
    }catch (error) {
        res.status(500).json({ message: "Error adding expense source", error: error.message });
    }
}


//get all expense sources
exports.getAllExpense = async (req, res) => {
    const userId = req.user.id;
    try {
        const expense = await Expense.find({ userId }).sort({ date: -1 });
        res.status(200).json({expense});
    
    } catch (error) {
        res.status(500).json({ message: "Error retrieving expenses", error: error.message });
    }
 }



//delete expense source
exports.deleteExpense= async (req, res) => {
   
    
    try {
        await Expense.findByIdAndDelete( req.params.id);
        res.status(200).json({ message: "Expense source deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting expense source", error: error.message });
    }
};


//download income sources as excel
exports.downloadExpenseExcel= async (req, res) => {
    const userId = req.user.id;
    try {
        const expense = await Expense.find({ userId }).sort({ date: -1 });
        
        const data = expense.map((item) => ({
            category: item.category,
            amount: item.amount,
            date: item.date.toISOString().split("T")[0], // Format date as YYYY-MM-DD
        }));
        
        const  wb = xlsx.utils.book_new();
        const ws = xlsx.utils.json_to_sheet(data);
        xlsx.utils.book_append_sheet(wb, ws, "Expense");
        xlsx.writeFile(wb, "expense_details.xlsx");
        res.download('expense_details.xlsx');
    } catch (error) {
        res.status(500).json({ message: "Error downloading expense sources", error: error.message });
    }
 }