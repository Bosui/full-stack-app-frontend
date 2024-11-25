import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Norint naudoti ES modulius (__dirname nėra tiesiogiai prieinamas)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Aptarnauti statinius failus iš "dist" katalogo
app.use(express.static(path.join(__dirname, "dist")));

// Nukreipti visus kitus maršrutus į "index.html"
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Naudokite Heroku priskirtą PORT arba 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveris veikia ant porto ${PORT}`);
});
