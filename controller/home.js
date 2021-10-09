var data=[
    {
        id:0,
        name:"Panda",
        amount:20,
        unit_amount:2000,
        photo:"p1"
    },
    {
        id:1,
        name:"Clothes",
        amount:30,
        unit_amount:3000,
        photo:"p2"
    },
    {
        id:2,
        name:"Coca-cola",
        amount:40,
        unit_amount:4000,
        photo:"p3"
    }
]
module.exports.home=async function(req,res){
    return res.render('home',{
        data:data
    });
}