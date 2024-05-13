const addBtn = document.getElementById('add-note');
const notesContainer = document.getElementById('notes-container');
const noteText = document.getElementById('note-text');
const fileInput = document.getElementById('file-input');

addBtn.addEventListener('click', () => {
  const noteContent = noteText.value.trim();
  const files = fileInput.files;

  if (noteContent || files.length > 0) {
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note');

    if (noteContent) {
      const textDiv = document.createElement('div');
      textDiv.textContent = noteContent;
      noteDiv.appendChild(textDiv);
    }

    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const fileDiv = document.createElement('div');
        const file = files[i];
        fileDiv.textContent = `File: ${file.name}`;
        noteDiv.appendChild(fileDiv);
      }
    }

    const labelType = prompt("Enter 'important', 'feedback', or leave empty for none:");

    if (labelType === 'important') {
      noteDiv.classList.add('important');
    } else if (labelType === 'feedback') {
      noteDiv.classList.add('feedback');
    }

    notesContainer.appendChild(noteDiv);

    // After the note is appended, update the height of the indicator boxes
    setTimeout(() => {
      const noteHeight = noteDiv.offsetHeight;
      const indicatorBoxes = noteDiv.querySelectorAll('.important::before, .feedback::before');
      indicatorBoxes.forEach(box => {
        box.style.height = `${noteHeight}px`;
      });
    }, 0);

    noteText.value = '';
    fileInput.value = null;
  }
});
