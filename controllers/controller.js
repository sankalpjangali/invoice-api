const { error } = require("console");

async function starturl(req, res) {
  res.json({
    success: true,
    msg: "you are at the start endpoint",
  });
}
async function createinvoice(req, res) {
  try {
    console.log("Full request body:", req.body);
    const client_name = req.body.client_name;
    const client_email = req.body.client_email;
    const client_items = req.body.items || [];
    const due_date = req.body.due_date;
     console.log(`${client_items}`)
    if (Array.isArray(client_items)) {
      client_items.forEach((item, index) => {
        console.log(`Item ${index}:`, item);
      });
    } else {
      console.log("client_items is not an array:", client_items);
    }
    res.json({
      success: true,

      msg: `${client_email},${client_items[0].id}`,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      error: "something went wrong at server sorry",
    });
  }
}
module.exports = {
  starturl,
  createinvoice,
};
