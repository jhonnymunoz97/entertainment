import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup

  constructor() {   
    this.form = new FormGroup({
      user: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(4)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required])
    })

    this.form.valueChanges.subscribe(value => console.log(value))

    /* this.name.valueChanges.pipe(debounceTime(500))
    .subscribe(
      value => console.log(value)
    ) */
  }

  ngOnInit(): void {
  }

  sendForm(e: Event){
    e.preventDefault()
    if(this.form.valid) console.log(this.form.value)
    else this.form.markAllAsTouched()
  }

}
