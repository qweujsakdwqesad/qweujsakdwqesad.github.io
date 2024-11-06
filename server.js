const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 1000;

app.use(bodyParser.json());
app.use(express.static(__dirname)); // Serve static files from the root directory

// Load passwords from name.txt
let passwords = {};
fs.readFile(path.join(__dirname, "name.txt"), "utf8", (err, data) => {
    if (err) {
        console.error("Error reading name.txt:", err);
        return;
    }
    data.split("\n").forEach((line) => {
        const [name, password] = line.split(":");
        if (name && password) {
            passwords[name.trim()] = password.trim();
        }
    });
    console.log("Loaded passwords:", passwords); // Log loaded passwords for debugging
});

// Serve Website.html on the root URL
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "Website.html"));
});

// Check name and password for all names
app.post("/check-name", (req, res) => {
    const { name, password } = req.body;
    const storedPassword = passwords[name];

    console.log(`Received request - Name: "${name}", Password: "${password}"`);
    console.log(`Stored password for ${name}: "${storedPassword}"`);

    // Check if name exists
    if (!storedPassword) {
        console.log(`Access denied - Unknown user: ${name}`);
        return res.json({ access: false, message: "Unknown user." });
    }

    // Check if password matches
    if (storedPassword !== password) {
        console.log(`Access denied - Incorrect password for user: ${name}`);
        return res.json({ access: false, message: "Incorrect password." });
    }

    console.log("Access granted for user:", name);
    res.json({ access: true });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
