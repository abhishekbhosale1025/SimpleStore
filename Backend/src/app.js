const express = require("express");

require("./db/conn");

const ItemsList=require("./models/items")

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());  

//Post Method
app.post("/items", async (req, res) => {
    try {
        const addingItems = new ItemsList(req.body);
        console.log(req.body);
        const list = await addingItems.save();
        res.status(201).send(list)
    } catch (e) {
        res.status(400).send(e)
    }
})

//GET Method
app.get("/items", async (req, res) => {
	try {
		const getItems = await ItemsList.find({});
		res.send(getItems);
	} catch (e) {
		res.status(400).send(e);
	}
});


//GET Method
app.get("/items/:id", async (req, res) => {
    try {
        const _id = req.params.id;
		const getItem = await ItemsList.findById(_id);
		res.send(getItem);
	} catch (e) {
		res.status(400).send(e);
	}
});

//PATCH Method
app.patch("/items/:id", async (req, res) => {
	try {
		const _id = req.params.id;
		const getItem = await ItemsList.findByIdAndUpdate(_id,req.body,{new:true});
		res.send(getItem);
	} catch (e) {
		res.status(500).send(e);
	}
});

//DELETE Method
app.delete("/items/:id", async (req, res) => {
	try {
		const _id = req.params.id;
		const getItem = await ItemsList.findByIdAndDelete(_id);
		res.send(getItem);
	} catch (e) {
		res.status(500).send(e);
	}
});


app.listen(port, () => {
    console.log(`connecting to port ${port}`);
})