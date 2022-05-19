const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
// const moment = require("moment");  currently the model creates a date upon addPoints call through controllers

// initialize models and connect to database
const points = require("./routes/points");
const connectDB = require('./db/connect');
require("dotenv").config();


// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json())

// routes
app.use('api/v1/points', points)

// port declaration
const port = process.env.PORT || 3001; 

// spin up server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => 
      console.log(`Server is listening on port ${port}...`));
  }
  catch (error) {
    console.log(error);
  }
}

start();


// let totalPoints = {};
// let distributedPoints = [];

// app.post('/deductPoints',(req,res)=>{
//     var sum = 0;
//     var reqpoints = req.body.points;
//     for(var val in totalPoints)
//     {
//         sum += totalPoints[val];
//     }
//     //check if the points requested to be deducted is lesser than the available points
//     if(sum < reqpoints)
//     {
//         res.send({"Message":"Available points is lesser than the deduction request"});
//     }

//     else
//     {
//         //sorting in descending order
//         distributedPoints = distributedPoints.sort((a,b)=> { return new Date(a.time) - new Date(b.time) });
//         let remaining = reqpoints;
//         let deductedJSON = {};
//         //calculating deductable points
//         for(var i = 0; i < distributedPoints.length; i++)
//         {
//             var deducted = 0;
//             let cp = distributedPoints[i];
//             if(cp.points - remaining >= 0)
//             {
//                 deducted = remaining;
//                 distributedPoints[i].points -= deducted;
//             }
//             else
//             {
//                 deducted = cp.points;
//                 distributedPoints[i].points = 0;
//             }
//             deducted *= parseInt(-1);
//             remaining += deducted;
//             if(deductedJSON[cp.payer])
//                 deductedJSON[cp.payer] += deducted;
//             else
//                 deductedJSON[cp.payer] = deducted;

//             if(remaining <= 0)
//             {
//                 //resetting totalPoints to 0 to calculate fresh
//                 for(var k in totalPoints)
//                 {
//                     totalPoints[k] = 0;
//                 }

//                 //removing the 0 points used up user entries
//                 for(var j = 0; j<distributedPoints.length ; j++)
//                 {
//                     if(distributedPoints[j].points == 0)
//                     {
//                         distributedPoints.splice(j,1);
//                         j--;
//                     }
//                     else
//                     {
//                         if(totalPoints[distributedPoints[j].payer])
//                             totalPoints[distributedPoints[j].payer] += distributedPoints[j].points;
//                         else
//                             totalPoints[distributedPoints[j].payer] = distributedPoints[j].points;
//                     }
//                 }
//                 //sending response and breaking out
//                 res.send(deductedJSON);
//                 break;
//             }

//         }
//     }

// });

// app.post('/addPoints', (req, res) => {
//     //pushing into ditributedPoints and totaling the points in totalPoints variables
//     let record = req.body;
//     record.time = moment(record.time,"MM/DD/YYYY h:m a").toDate();

//     distributedPoints.push(record);

//         if(totalPoints[record.payer])
//         {
//             totalPoints[record.payer] += record.points;
//         }
//         else
//         {
//             totalPoints[record.payer] = record.points;
//         }

//     console.log(distributedPoints);
//     res.send(totalPoints);  
// });


// app.get('/getPoints',(req,res) => {
//     res.send(totalPoints);
// });