import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { noteValue } from "../recoil/selectors/noteSelectors";
import { noteState } from "../recoil/atoms/noteAtoms";
import { v4 } from "uuid";

function NewNote() {
    const [title, setTitle] = useState("");
    const [notes, setNotes] = useRecoilState(noteState);
    const info = useRecoilValue(noteValue);

    return (
        <div>
            <div className="alert alert-primary">
                <div className="d-inline col-4">
                    Total items: &nbsp;
                    <span className="badge badge-info">{info.total}</span>
                </div>
                <div className="d-inline col-4">
                    Finished items: &nbsp;
                    <span className="badge badge-info">{info.finished}</span>
                </div>
                <div className="d-inline col-4">
                    Unfinished items: &nbsp;
                    <span className="badge badge-info">{info.notFinished}</span>
                </div>
            </div>
            <div className="form-group">
                <input
                    className="form-control"
                    type="text"
                    value={title}
                    placeholder="Todo title..."
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="form-group">
                <button
                    className="btn btn-primary"
                    onClick={(_) => {
                        setNotes([...notes, { id: v4(), title: title, finished: false }]);
                        setTitle("");
                    }}
                >
                    Add Todo
                </button>
            </div>
        </div>
    )
}

export default NewNote
