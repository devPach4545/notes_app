const addBtn = document.getElementById('add-note');
const notesContainer = document.getElementById('notes-container');
const noteText = document.getElementById('note-text');

addBtn.addEventListener('click', () => {
  const noteContent = noteText.value.trim();
  if (noteContent) {
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note');
    noteDiv.textContent = noteContent;
    notesContainer.appendChild(noteDiv);
    noteText.value = ' imma write somth';
  }
});
