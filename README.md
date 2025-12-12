# Notes App
[**Local Preview**](https://pinknotesapp.netlify.app)

A simple and fast note-taking application. You can add, delete, color-tag, and filter notes. All notes are stored in **localStorage**, so they remain even after closing or refreshing the page.


## Technologies Used

- **React** – Component-based UI structure  
- **Vite** – Fast development environment and bundler  
- **JavaScript (ES6+)** – Modern JavaScript features  
- **CSS** – Styling  
- **LocalStorage API** – Persistent data storage in the browser

## Features

- Add new notes  
- Choose a color for each note  
- Filter/search notes  
- Delete a single note  
- Notes are restored on page reload  

## Usage
1. Type your note into the text area.
2. Select a color for the note.
3. Click the “Add Note” button.
4. View your notes in the list and delete any note individually.
5. Use the search bar to filter notes.
6. Notes persist automatically thanks to localStorage.

## Project Structure
```
src/
 ├─ components/
 │   ├─ NoteInput.jsx
 │   ├─ NoteList.jsx
 │ 
 ├─ App.jsx
 ├─ main.jsx
 ├─ styles.css
```

## Installation
**To run the project locally**
```
git clone https://github.com/NefiseBikbay/NotesApp
cd NoteApp
npm install
npm run dev
```
