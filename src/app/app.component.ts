import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'phone-book';

  phoneBookForm = {
    fname : 'Amogha',
    lname: 'Devineni',
    phnum: 1112223334
  }

  phoneBookDetails: any = [];

  onSubmit(contactForm: any){
    this.phoneBookDetails.push(contactForm.value);
    this.phoneBookDetails.sort(this.sortByLastName);
  }

  sortByLastName(name1: any, name2: any) {
    if(name1.lname.toUpperCase() < name2.lname.toUpperCase()) return -1;
    if(name1.lname.toUpperCase() > name2.lname.toUpperCase()) return 1;
    return 0;
  }
}
