import { atom } from "recoil";
import {Note} from "../interfaces/NoteInterface";

// define state
export const noteState = atom({
    key: "notes",
    default: [] as Note[],
})