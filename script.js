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

    notesContainer.appendChild(noteDiv);
    noteText.value = '';
    fileInput.value = null;
  }
});
