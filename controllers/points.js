const Points = require('../models/Points');
const asyncWrapper = require('../middleware/async');

/* GET ALL POINTS BY PAYER THIS ENDPOINT NEEDS TO CHANGE TO LOOK AT ALL THE OBJECTS IN THE DATABASE AND THEN GROUP THEM ALTOGETHER BY PAYER AND SUM UP POINTS BY PAYER */
/* DONE 05/23/22 1306 **********************************************************************************/

const getPoints = asyncWrapper(async (req, res) => {
  const points = await Points.find({});
  var holder = {};

  points.forEach(function (d) {
    if (holder.hasOwnProperty(d.payer)) {
      holder[d.payer] = holder[d.payer] + d.points;
    } else {
      holder[d.payer] = d.points;
    }
  });

  let payers = [];
  for (var prop in holder) {
    payers.push({ payer: prop, points: holder[prop] });
  }

  console.log(payers);
  res.status(200).json({ payers });
})

/* ADD POINTS TO THE DATABASE
// DONE 05/23/22 1308 **********************************************************************************/

const addPoints = asyncWrapper(async (req, res) => {
  const points = await Points.create(req.body)
  res.status(201).json({ points })
})

/* SPEND POINTS FROM OLDEST TO NEWEST ******************************************************************/

const spendPoints = asyncWrapper(async (req, res) => {
  // GET TOTAL POINTS TO MAKE SURE THAT YOU HAVE ADEQUATE NUMBER OF POINTS TO REDEEM
  //let reqPoints = req.body.points
  const totalPoints = await Points.aggregate([
    {
      $group: {
        _id: "null",
        points: { $sum: "$points" }
      }
    }
  ]);

//   db.collection.aggregate([
//   {
//     $group: {
//       _id: "null",
//       points: {
//         $sum: "$points"
//       }
//     }
//   }
// ])

  if (totalPoints < reqPoints) {
    res.send({ "Message": "You do not have enough points for this transaction."})
  }
  // THIS GETS ALL OBJECTS FROM THE DB AND SORTS THEM BY DATE ASCENDING (OLDEST TO NEWEST SO THAT THE OLDEST POINTS ARE USED FIRST)
  // const points = await Points.find().sort({ createdAt: 1 });
  // res.status(200).json({ points })
})

/* TEST API  *********************************************************************************************/

const testPoints = asyncWrapper(async (req, res) => {
  // you can hardcode reqPoints until we can make the thing work
  const reqPoints = req.body.points;
  // mongodb call for total points
  const totalPoints = await Points.aggregate([
    {
      $group: {
        _id: "null",
        points: { $sum: "$points" },
      },
    },
  ]);
  console.log(reqPoints);
  console.log(totalPoints);

  if (totalPoints[0].points < reqPoints) {
    res.send({"Message": "You do not have enough points for this transaction."})
  } else if (totalPoints[0].points >= reqPoints) {
    res
      .status(200)
      .send({
        Message: `You have ${totalPoints[0].points - reqPoints} points remaining.`,
      });
  }  
})



module.exports = {
  getPoints,
  addPoints,
  spendPoints,
  testPoints
}

