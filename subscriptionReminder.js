const cron = require('node-cron');
const nodemailer = require('nodemailer');
const Subscription = require('./models/Subscription');
const User = require('./models/User'); // Make sure this path is correct

// Setup your email transporter (example with Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_email@gmail.com',
    pass: 'your_email_password', // Use environment variables in production!
  },
});

// Run every day at 8:00 AM
cron.schedule('0 8 * * *', async () => {
  try {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const dayAfter = new Date(tomorrow);
    dayAfter.setDate(dayAfter.getDate() + 1);

    // Find subscriptions ending tomorrow
    const subs = await Subscription.find({
      enddate: { $gte: tomorrow, $lt: dayAfter }
    });

    for (const sub of subs) {
      // Get user email (assuming you store userId in subscription)
      const user = await User.findById(sub.userId);
      if (!user || !user.email) continue;

      // Send email
      await transporter.sendMail({
        from: 'your_email@gmail.com',
        to: user.email,
        subject: `Your subscription to ${sub.name} ends tomorrow!`,
        text: `Hi, your subscription to ${sub.name} will end on ${sub.enddate.toDateString()}.`,
      });
    }
    console.log('Subscription reminder emails sent.');
  } catch (error) {
    console.error('Error sending subscription reminders:', error);
  }
});