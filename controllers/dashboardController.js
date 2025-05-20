const Income = require("../models/Income");
const Expense = require("../models/Expense");
const { isValidObjectId,Types } = require("mongoose");


//Dashboard data
exports.getDashboardData = async (req, res) => {
  try {
    const userId = req.user.id;
    const userObjectId = new Types.ObjectId(String(userId));

    //fetching all income and expense data
    const totalIncome = await Income.aggregate([
      { $match: { userId: userObjectId } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    console.log(totalIncome, {
      userId: isValidObjectId(userId)
    });

    const totalExpenses = await Expense.aggregate([
      { $match: { userId: userObjectId } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    //get income transactions in last 60 days
    
      const last60DaysIncomeTransactions = await Income.find({
        userId: userObjectId,
        date: { $gte: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000) },
      }).sort({ date: -1 });

      //get income for last 60 days
      const incomeLast60Days = last60DaysIncomeTransactions.reduce(
        (sum, transaction) => sum + transaction.amount,
        0
      );

      //get expense transactions in last 30 days
      const last30DaysExpenseTransactions = await Expense.find({
        userId,
        date: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) },
      }).sort({ date: -1 });

      // get total expense for last 30 days
      const expenseLast30Days = last30DaysExpenseTransactions.reduce(
        (sum, transaction) => sum + transaction.amount,
        0
      );

      //Fetch last 5 transactions(income and expense)
        const lastIncomeTxns = (
            await Income.find({ userId }).sort({ date: -1 }).limit(5)
          ).map((txn) => ({
            ...txn.toObject(),
            type: "income",
          }));
          const lastExpenseTxns = (
            await Expense.find({ userId }).sort({ date: -1 }).limit(5)
          ).map((txn) => ({
            ...txn.toObject(),
            type: "expense",
      }));

      const lastTransactions = [...lastIncomeTxns, ...lastExpenseTxns].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );

      

      res.json({
        totalBalance:
          (totalIncome[0]?.total || 0) -
          (totalExpenses[0]?.total || 0),
        totalIncome: totalIncome[0]?.total || 0,
        totalExpenses: totalExpenses[0]?.total || 0,
        last30daysExpenses: {
          total: expenseLast30Days,
          transactions: last30DaysExpenseTransactions,
        },
        last60DaysIncome: {
          total: incomeLast60Days,
          transactions: last60DaysIncomeTransactions,
        },
        recentTransactions: lastTransactions,
      });


  } catch (error) {
    res.status(500).json({
      message: "Error fetching dashboard data",
      error: error.message,
    });
  }
};
