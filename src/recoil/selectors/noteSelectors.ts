import { selector } from "recoil";
import {noteState} from "../atoms/noteAtoms";

export const noteValue = selector({
    key: "noteValue",
    get: ({get}) => ({
        total: get(noteState).length,
        finished: get(noteState).filter((note) => note.finished).length,
        notFinished: get(noteState).filter((note) => !note.finished).length,
    }),
});