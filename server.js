const express = require('express');

const app = express();

app.use(express.json());
app.use(express.static('public'));

let notes = [];

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.post('/api/notes', (req, res) => {

    const note = {
        title: req.body.title,
        content: req.body.content
    };

    notes.push(note);

    res.json({
        message: "Note Saved Successfully"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
