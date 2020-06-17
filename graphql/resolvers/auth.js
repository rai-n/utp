const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/user');
const Tester = require('../../models/tester');
const {transformTester} = require("./merge");

module.exports = {
  createUser: async args => {
    try {
      const existingUser = await User.findOne({ email: args.userInput.email });
      if (existingUser) {
        throw new Error('User exists already.');
      }
      const hashedPassword = await bcrypt.hash(args.userInput.password, 12);

      const user = new User({
        email: args.userInput.email,
        password: hashedPassword
      });

      const result = await user.save();

      return { ...result._doc, password: null, _id: result.id };
    } catch (err) {
      throw err;
    }
  },
  createTester: async args => {
    try {
      const existingTester = await User.findOne({ email: args.testerInput.email });
      if (existingTester) {
        throw new Error('Tester exists already.');
      }

      const tester = new Tester({
        id : args.testerInput._id,
        firstName: args.testerInput.firstName,
        lastName: args.testerInput.lastName,
        addressLineOne: args.testerInput.addressLineOne,
        town: args.testerInput.town,
        country: args.testerInput.country,
        postcode: args.testerInput.postcode,
        email: args.testerInput.email,
        telephoneNo: args.testerInput.telephoneNo,
        Disability: args.testerInput.Disability,
        specialHardware: args.testerInput.specialHardware,
        testingLocation: args.testerInput.testingLocation,
        Assistance: args.testerInput.Assistance,
        additionalInformation: args.testerInput.additionalInformation,
        standby: args.testerInput.standby,
        hearAbout: args.testerInput.hearAbout,
        dob: args.testerInput.dob,
        techSkill: args.testerInput.techSkill,
        Devices: args.testerInput.Devices,
        rating: args.testerInput.rating,
      });



      const result = await tester.save();

      return { ...result._doc, _id: result.id };
    } catch (err) {
      throw err;
    }
  },
  testers: async (args, req) => {
    // if (!req.isAuth) {
    // throw new Error('Unauthenticated!');
    //}
    try {
      const testers = await Tester.find({});
  //    return testers.map(tester => {
    //    return transformTester(tester);
    //  }
          return testers;
   // );
    } catch (err) {
      throw err;
    }
  },
  users: async (args, req) => {
    // if (!req.isAuth) {
    // throw new Error('Unauthenticated!');
    //}
    try {
      const users = await User.find({});
  //    return testers.map(tester => {
    //    return transformTester(tester);
    //  }
          return users;
   // );
    } catch (err) {
      throw err;
    }
  },
  login: async ({ email, password }) => {
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error('User does not exist!');
    }
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      throw new Error('Password is incorrect!');
    }
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      'somesupersecretkey',
      {
        expiresIn: '1h'
      }
    );
    return { userId: user.id, token: token, tokenExpiration: 1 };
  },
    updateUser: async args => {
  try {
    const user = await User.findOne({ email: args.userInput.email });

    if (user){
      if (args.userInput.password !== null){
        user.password = await bcrypt.hash(args.userInput.password, 12);
      }
    }

    user.save();

  } catch (err) {
    throw err;
  }
  },
};
