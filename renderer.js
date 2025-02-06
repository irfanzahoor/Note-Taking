const fs = require('fs');
const path = require('path');

const noteArea = document.getElementById('noteArea');
const saveBtn = document.getElementById('saveBtn');
const loadBtn = document.getElementById('loadBtn');

// Define the path for storing the note (in the project directory)
const filePath = path.join(__dirname, 'note.txt');

// Save Note Functionality
saveBtn.addEventListener('click', () => {
  const noteContent = noteArea.value;
  fs.writeFile(filePath, noteContent, (err) => {
    if (err) {
      alert('Error saving note!');
      console.error(err);
    } else {
      alert('Note saved successfully!');
    }
  });
});

// Load Note Functionality
loadBtn.addEventListener('click', () => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      alert('Error loading note!');
      console.error(err);
    } else {
      noteArea.value = data;
    }
  });
});
