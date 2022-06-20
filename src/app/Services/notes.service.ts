import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http:HttpClient) { }

// Get All Notes
  getAllNotes(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/notes')
 }

 // Get single Note
 getOneNote(id:any): Observable<any> {
  return this.http.get<any>(`http://localhost:3000/notes/${id}`)
}
// Post
 postNotes(note: any): Observable<any>{
  return this.http.post('http://localhost:3000/notes',note)
}
//  Put
updateNote(id:any,value:any): Observable<any> {
  return this.http.put(`http://localhost:3000/notes/${id}`,value)
}
// Delete
deleteNote(id:string): Observable<any>{
  return this.http.delete(`http://localhost:3000/notes/${id}`)
}
}
