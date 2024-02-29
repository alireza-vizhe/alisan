const User = require("../module/UserModel");
const bcrypt = require("bcryptjs");
const Message = require("../module/MessageModel");

exports.register = async (req, res) => {

    console.log(req.body);
    const { email, fullname, password } = req.body;
    try {
        const userFinder = await User.findOne({ email });
        if (userFinder) {
          res.json({ message: "کاربری با این ایمیل موجود می باشد" });
        } else {
          const hash = await bcrypt.hash(password, 10);
          const user = await User.create({
            fullname,
            email,
            password: hash,
          });
          res.json(user);
        }
    } catch (error) {
        console.log(error);
    }
}

exports.handleLogin = async (req, res) => {

    console.log(req.body);

    try {
      const { email, fullname, password } = req.body;
  


            const user = await User.findOne({ email });
            console.log(user);
            if (!user) {
              res.json({ message: "کاربری با این ایمیل یافت نشد" });
              return;
            }
  
            const isEqual = await bcrypt.compare(password, user.password);
  
            if (isEqual) {
            //   const token = jwt.sign(
            //     {
            //       user: {
            //         userId: user._id.toString(),
            //         email: user.email,
            //         fullname: user.fullname,
            //       },
            //     },
            //     process.env.JWT_SECRET
            //   );
              res.status(200).json({  userId: user._id.toString() });
            
              }
          
       
    
    } catch (error) {
      res.json({ message: "مشکلی از سمت سرور پیش آمد" });
    }
  };

  exports.getUsers = async (req, res) => {
    try {
        res.json(await User.find());
    } catch (error) {
        console.log(error);
    }
  }

  exports.snzMessages = async (req, res) => {
    console.log(req.body);
    try {
        await Message.create(req.body);
        res.json({messageSUC: "تسک شما ایجاد شد."})
    } catch (error) {
        console.log(error);
    }
  }

//   exports.alaMessages = async (req, res) => {
//     try {
//         await Message.create(req.body);
//         res.json({messageSUC: "تسک شما ایجاد شد."})
//     } catch (error) {
//         console.log(error);
//     }
//   }

exports.getTasks = async (req, res) => {
    try {
        res.json(await Message.find());
    } catch (error) {
        console.log(error);
    }
}

exports.deleteMessage = async (req, res) => {

    const {id} = req.body;

    try {
        await Message.deleteOne({_id: id})
        res.json({messageSUC: "به اتمام رسید"})
    } catch (error) {
        console.log(error);
    }
}

exports.completeTask = async (req, res) => {

    const {id} = req.body

    try {
        const task = await Message.findOne({_id: id})
        task.completed = req.body.completed;
        task.save();
        res.json({messageSUC: "به اتمام رسید"})
        console.log(task);
    } catch (error) {
        
    }
}