const excel= require('exceljs');
const Subscription = require('../models/Subscription');


//add Expense source
exports.addSubscription = async (req, res) => { 
    const  userId = req.user.id;
     
    try{
        
        const{name,amount,startdate,enddate,icon}= req.body;
        //validation: check for missing fields
        if (!name || !amount || !startdate || !enddate) {
            return res.status(400).json({ message: "Please fill in all fields" });
        }
        const  newSubscription = new Subscription({
            userId,
          name,
          amount,
          startdate: new Date(startdate),
          enddate: new Date(enddate),
          icon,
        });
        await newSubscription.save();
            res.status(201).json({
                message: "Subscription added successfully",
                newSubscription,
            });
    }catch (error) {
        res.status(500).json({ message: "Error adding subscription", error: error.message });
    }
}


//get all subscription sources
exports.getAllSubscription = async (req, res) => {
    const userId = req.user.id;
    try {
        const subscription = await Subscription.find({ userId }).sort({ date: -1 });
        res.status(200).json({subscription});
    
    } catch (error) {
        res.status(500).json({ message: "Error retrieving Subscription sources", error: error.message });
    }
 }



//delete Subscription source
exports.deleteSubscription= async (req, res) => {
    const userId= req.user.id;
    
    try {
        await Subscription.findByIdAndDelete( req.params.id);
        res.status(200).json({ message: "Subscription source deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting Subscription source", error: error.message });
    }
};


//download Subscription sources as excel
exports.downloadSubscriptionExcel= async (req, res) => {
    const userId = req.user.id;
    try {
        const subscription = await Subscription.find({ userId }).sort({ date: -1 });
        
         const workbook = new excel.Workbook();
        const worksheet = workbook.addWorksheet('Subscription');

        // Add header row
        worksheet.addRow(['Name', 'Amount', 'Start Date', 'End Date', 'Icon']);

      subscription.forEach(item => {
            worksheet.addRow([
                item.name,
                item.amount,
                item.startdate ? item.startdate.toISOString().split("T")[0] : "",
                item.enddate ? item.enddate.toISOString().split("T")[0] : "",
                item.icon || ""
            ]);
        });

        const filePath = "Subscription_details.xlsx";
        await workbook.xlsx.writeFile(filePath);
        res.download(filePath);
    } catch (error) {
        res.status(500).json({ message: "Error downloading Subscription sources", error: error.message });
    }
 }