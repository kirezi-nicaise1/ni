const express=require('express');
const app=express();
const port=3000;
app.listen(port,()=> {console.log(`calculator app listening at http://localhost:${port}`);});
app.get('/addition', (req,res)=>{const nbrs=req.query.nbrs;
let sum=0;
for(let i=0;i<nbrs.length;i++){
    sum+=parseInt(nbrs[i]);}
    res.send({sum});
})
app.get('/multiplication', (req,res)=>{const nbrs=req.query.nbrs;
    let product=1;
    for(let i=0;i<nbrs.length;i++){
        product*=parseInt(nbrs[i]);}
        res.send({product});
    })
