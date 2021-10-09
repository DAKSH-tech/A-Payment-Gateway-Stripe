const sec_key=process.env.API_KEY;
const stripe=require('stripe')(sec_key);
module.exports.payment_data=async function(req,res){ 
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'inr',
        product_data: {
          name: req.body.name[parseInt(req.body.id)],
        },
        unit_amount: req.body.unit_amount[parseInt(req.body.id)],
      },
      quantity: req.body.quantity[parseInt(req.body.id)],
    }],
    mode: 'payment',
    success_url: 'http://localhost:8000/success',
    cancel_url: 'http://localhost:8000/cancel',
  });

  res.redirect(303, session.url);
}