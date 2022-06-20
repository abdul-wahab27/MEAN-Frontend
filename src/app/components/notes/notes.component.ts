import { Component,  OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { NotesService } from '../../Services/notes.service';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  title = "Front-End"
  data: any
  noteForm!: Form
  Notes: any[] = []
  editNoteForm: boolean = false
  note: any = { _id: "", title: "", content: "" }
  editedNote: boolean = false
  today: number = Date.now();



  constructor(private http: NotesService,
    private auth: AuthService) { }

  ngOnInit() {
    this.http.getAllNotes()
      .subscribe(data => {
        console.log(data)
        this.Notes = data
      })

  }
  onSubmit(value: any) {
    this.http.postNotes(value)
      .subscribe(res => {
        this.Notes.push(res)
        console.log("New note added: " ,res)
      })
  }
  reset(noteForm: NgForm) {
    noteForm.reset();
  }


  update(note: any, value: any) {
    console.log('update id', note._id);
    this.noteForm = note
    console.log("NoteForm:", this.noteForm)
    this.editedNote = true
    this.note = value
    this.ngOnInit()
    this.http.updateNote(note._id, this.note)

      .subscribe(note => {
        return note
      })
  }



  onUpdateSave(note: any) {
    this.editNoteForm = true
    this.editedNote = true
    this.note = note
  }
  onDelete(id: any, i: any) {
    this.Notes.splice(i, 1)
    this.http.deleteNote(id)
      .subscribe(res => {
        console.log(res)
      })
  }
  logout() {
    this.auth.logout()
  }

}
