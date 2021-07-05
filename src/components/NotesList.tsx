import React from 'react'
import { useRecoilState } from "recoil";
import {noteState} from "../recoil/atoms/noteAtoms";


function NotesList() {
    const [notes, setNotes] = useRecoilState(noteState);


     const toggleNote = (id: string) =>
    setNotes(
      notes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            completed: !note.finished,
          };
        }
        return note;
      })
    );
  const removeNote = (id: string) =>
    setNotes(notes.filter((note) => note.id !== id));

  return (
    <>
      <div className="row">
        <table className="table table-hover">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Completed?</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {notes.map((note) => (
              <tr key={note.id}>
                <td>{note.title}</td>
                <td>{note.finished? "✅" : ""}</td>
                <td>
                  <button
                    className="btn btn-sm btn-info"
                    onClick={(_) => toggleNote(note.id!)}
                  >
                    Toggle
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={(_) => removeNote(note.id!)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default NotesList
