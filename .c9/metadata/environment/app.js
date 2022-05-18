{"filter":false,"title":"app.js","tooltip":"/app.js","undoManager":{"mark":14,"position":14,"stack":[[{"start":{"row":0,"column":0},"end":{"row":112,"column":17},"action":"insert","lines":["var express = require('express');","var bodyParser = require(\"body-parser\");","var cors=require(\"cors\");","var moment=require(\"moment\");","","var app = express();","app.use(cors());","app.use(bodyParser.json());","","totalPoints={};","distributedPoints=[];","","app.post('/deductPoints',(req,res)=>{","    var sum=0;","    var reqpoints=req.body.points;","    for(var val in totalPoints)","    {","        sum+=totalPoints[val];","    }","    //check if the points requested to be deducted is lesser than the available points","    if(sum<reqpoints)","    {","        res.send({\"Message\":\"Available points is lesser than the deduction request\"});","    }","","    else","    {","        //sorting in descending order","        distributedPoints= distributedPoints.sort((a,b)=> { return new Date(a.time) - new Date(b.time) });","        remaining=reqpoints;","        deductedJSON={};","        //calculating deductable points","        for(var i=0;i<distributedPoints.length;i++)","        {","            var deducted=0;","            cp=distributedPoints[i];","            if(cp.points-remaining>=0)","            {","                deducted=remaining;","                distributedPoints[i].points-=deducted;","            }","            else","            {","                deducted=cp.points;","                distributedPoints[i].points=0;","            }","            deducted*=parseInt(-1);","            remaining+=deducted;","            if(deductedJSON[cp.payer])","                deductedJSON[cp.payer]+=deducted;","            else","                deductedJSON[cp.payer]=deducted;","","            if(remaining<=0)","            {","                //resetting totalPoints to 0 to calculate fresh","                for(var k in totalPoints)","                {","                    totalPoints[k]=0;","                }","","                //removing the 0 points used up user entries","                for(var j=0;j<distributedPoints.length;j++)","                {","                    if(distributedPoints[j].points==0)","                    {","                        distributedPoints.splice(j,1);","                        j--;","                    }","                    else","                    {","                        if(totalPoints[distributedPoints[j].payer])","                            totalPoints[distributedPoints[j].payer]+=distributedPoints[j].points;","                        else","                            totalPoints[distributedPoints[j].payer]=distributedPoints[j].points;","                    }","                }","                //sending response and breaking out","                res.send(deductedJSON);","                break;","            }","","        }","    }","","});","","app.post('/addPoints', (req, res)=>{","    //pushing into ditributedPoints and totaling the points in totalPoints variables","    record=req.body;","    record.time=moment(record.time,\"MM/DD/YYYY h:m a\").toDate();","","    distributedPoints.push(record);","","        if(totalPoints[record.payer])","        {","            totalPoints[record.payer]+=record.points;","        }","        else","        {","            totalPoints[record.payer]=record.points;","        }","","    console.log(distributedPoints);","    res.send(totalPoints);  ","});","","","app.get('/getPoints',(req,res)=>{","    res.send(totalPoints);","});","","app.listen(3000);"],"id":1}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":1},"action":"insert","lines":[" "],"id":2}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":1},"action":"remove","lines":[" "],"id":3}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":1},"action":"insert","lines":["l"],"id":4},{"start":{"row":9,"column":1},"end":{"row":9,"column":2},"action":"insert","lines":["e"]},{"start":{"row":9,"column":2},"end":{"row":9,"column":3},"action":"insert","lines":["t"]}],[{"start":{"row":9,"column":3},"end":{"row":9,"column":4},"action":"insert","lines":[" "],"id":5}],[{"start":{"row":10,"column":0},"end":{"row":10,"column":1},"action":"insert","lines":["l"],"id":6},{"start":{"row":10,"column":1},"end":{"row":10,"column":2},"action":"insert","lines":["e"]},{"start":{"row":10,"column":2},"end":{"row":10,"column":3},"action":"insert","lines":["t"]}],[{"start":{"row":10,"column":3},"end":{"row":10,"column":4},"action":"insert","lines":[" "],"id":7}],[{"start":{"row":29,"column":8},"end":{"row":29,"column":9},"action":"insert","lines":["l"],"id":8},{"start":{"row":29,"column":9},"end":{"row":29,"column":10},"action":"insert","lines":["e"]},{"start":{"row":29,"column":10},"end":{"row":29,"column":11},"action":"insert","lines":["t"]}],[{"start":{"row":29,"column":11},"end":{"row":29,"column":12},"action":"insert","lines":[" "],"id":9}],[{"start":{"row":30,"column":8},"end":{"row":30,"column":9},"action":"insert","lines":["l"],"id":10},{"start":{"row":30,"column":9},"end":{"row":30,"column":10},"action":"insert","lines":["e"]},{"start":{"row":30,"column":10},"end":{"row":30,"column":11},"action":"insert","lines":["t"]}],[{"start":{"row":30,"column":11},"end":{"row":30,"column":12},"action":"insert","lines":[" "],"id":11}],[{"start":{"row":35,"column":12},"end":{"row":35,"column":13},"action":"insert","lines":["l"],"id":12},{"start":{"row":35,"column":13},"end":{"row":35,"column":14},"action":"insert","lines":["e"]},{"start":{"row":35,"column":14},"end":{"row":35,"column":15},"action":"insert","lines":["t"]}],[{"start":{"row":35,"column":15},"end":{"row":35,"column":16},"action":"insert","lines":[" "],"id":13}],[{"start":{"row":89,"column":4},"end":{"row":89,"column":5},"action":"insert","lines":["l"],"id":14},{"start":{"row":89,"column":5},"end":{"row":89,"column":6},"action":"insert","lines":["e"]},{"start":{"row":89,"column":6},"end":{"row":89,"column":7},"action":"insert","lines":["t"]}],[{"start":{"row":89,"column":7},"end":{"row":89,"column":8},"action":"insert","lines":[" "],"id":15}]]},"ace":{"folds":[],"scrolltop":1367,"scrollleft":0,"selection":{"start":{"row":89,"column":8},"end":{"row":89,"column":8},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":70,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1652898564209,"hash":"07f978de5fa76a03c63c58f5a899577a72786002"}