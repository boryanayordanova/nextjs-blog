import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    //store in DB
    const newMessage = {
      email,
      name,
      message,
    };
    console.log(newMessage);

    let client;

    const connectionString = `mongodb+srv://${process.env.monngodb_username}:${process.env.monngodb_password}@${process.env.monngodb_clustername}.m2uxdsb.mongodb.net/${process.env.monngodb_database}?retryWrites=true&w=majority&appName=Cluster0`;
    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }

    const db = client.db();
    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage._id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed." });
      return;
    }

    res
      .status(201)
      .json({ message: "Successfully stored message!", message: newMessage });
  }
}

export default handler;
