import mongoose from "mongoose";

async function startDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://grupo8_cpe:Dr%40gons%26Fire@pontocpe.icta5yo.mongodb.net/?appName=pontoCPE"
    );

    console.log("MongoDB conectado!");
  } catch (err) {
    console.error("Erro ao conectar no MongoDB:");
    console.error(err);
  }
}

export default startDB;