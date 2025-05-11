const User = require('../models/User');
const jwt= require('jsonwebtoken');


//generate JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
    });
};
//register user
exports.registerUser = async (req, res) => { 
     const { fullName, email, password,profileImageUrl } = req.body;
     //validation: check for missing fields
        if (!fullName || !email || !password) {
            return res.status(400).json({ message: "Please fill in all fields" });
        }

        try {
            //check if user already exists
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: "User already exists" });
            }

            //create new user
            const newUser = await User.create({
                fullName,
                email,
                password,
                profileImageUrl,
            });

            //generate token
            const token = generateToken(newUser._id);

            res.status(201).json({
                _id: newUser._id,
                newUser,
                token:generateToken(User._id),
            });
        }
        catch (error) {
            res
                .status(500)
                .json({ message: "Error registering user", error: error.message });
        }
}

//login user
exports.loginUser = async (req, res) => { 
    const { email, password } = req.body;
    //validation: check for missing fields
        if (!email || !password) {
            return res.status(400).json({ message: "Please fill in all fields" });
        }

        try {
            //check if user exists
            const user = await User.findOne({ email });
            if (!user|| !await user.comparePassword(password)) {
                return res.status(400).json({ message: "Invalid credentials" });
            }
            
            

            res.status(200).json({
                _id: user._id,
                user,
                token:generateToken(user._id),
            });
        }
        catch (error) {
            res
                .status(500)
                .json({ message: "Error logging in user", error: error.message });
        }  
}

//get user info
exports.getUserInfo = async (req, res) => { 

    try{
        const user = await User.findById(req.user._id).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    }catch (error) {
        res.status(500).json({ message: "Error fetching user info", error: error.message });
    }
}