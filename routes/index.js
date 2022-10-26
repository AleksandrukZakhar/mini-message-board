const express = require("express");
const router = express.Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
    },
];

router.get("/", (req, res, next) => {
    res.render("index", { title: "Messages", messages: messages });
});

router.get("/new", (req, res, next) => {
    res.render("form");
});

router.post("/new", (req, res, next) => {
    const { messageText, messageUser } = req.body;

    messages.push({
        text: messageText,
        user: messageUser,
        added: new Date(),
    });

    res.redirect("/");
});

module.exports = router;
