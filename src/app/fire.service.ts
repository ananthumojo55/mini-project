import { Injectable } from '@angular/core';
import {Auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from '@angular/fire/auth';
import {Firestore,collection,addDoc} from '@angular/fire/firestore';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(private auth:Auth,private router:Router,private fire:Firestore) { }
  signup(email:string, password:string){
    createUserWithEmailAndPassword(this.auth,email,password).then(res=>{
      alert("SignUp successfully!");
      this.router.navigate(['/'])
    }).catch(err=>{
      alert("SignUp failed!")
    })
  }

  login(email:string, password:string){
    signInWithEmailAndPassword(this.auth,email,password).then(res=>{
      alert("Login successfully!");
      this.router.navigate(['/'])
  }).catch(err=>{
    alert("Login failed!")
  })
}

contact(data:any){
  let contactcollection=collection(this.fire,'contact')
  addDoc(contactcollection,data).then(res=>{
alert("Data Added successfully!")
  }).catch(err=>{
    alert("Error while adding Data!")
  })

}
}
