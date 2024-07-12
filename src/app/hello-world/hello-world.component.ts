import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
  message: string;
  title: string;
  constructor(){
    this.title = 'Bem-vindo(a)'
    this.message = 'Opa rapazeada';
  }

  ngOnInit(): void{

  }
}
