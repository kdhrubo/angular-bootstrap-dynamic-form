import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  formData = {
    title : "NG-FORM",
    sections : [{
        header: "Section 1",
        
        fields : [
          {
           controlName: "firstName",
           label: "First Name",
           controlType : "text",
           valueType: 'text',
           col : "form-group col-md-3"  
          },
          {
           controlName: "lastName",
           label: "Last Name",
           controlType : "text",
           valueType: 'text',
           col : "form-group col-md-3"    
          },
          {
           controlName: "dob",
           label: "Birth Day",
           controlType : "text",
           valueType: 'text',
           col : "form-group col-md-3"    
          },
           {
           controlName: "categories",
           label: "Categories",
           controlType : "text",
           valueType: 'text',
           col : "form-group col-md-3",  
           api : 'https://api.chucknorris.io/jokes/categories'  
          }
        ]
      },
      {
        header: "Section 2",
        
        fields : [
           {
           controlName: "state",
           label: "State ",
           controlType : "text" ,
           valueType: 'text',
           col : "form-group col-md-6"   
          },
          {
           controlName: "city",
           label: "City ",
           controlType : "text"  ,
           valueType: 'text',
           col : "form-group col-md-6"  
          },
          {
           controlName: "counry",
           label: "Country",
           controlType : "select",
           valueType: 'text',
           col : "form-group col-md-6"  ,
           api : 'https://restcountries.eu/rest/v2/all'  
          }


        ]
      }

    ]
  
  }

  form: FormGroup;
  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({});
  }

}
