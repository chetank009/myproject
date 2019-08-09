import { Component, OnInit } from '@angular/core';
import { Dept } from './dept';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
// import { RouterModule, RouterModule } from '@angular/router';
// import {Component} from '@angular/core'

@Component({
  selector: 'app-departmentdisplay',
  templateUrl: './departmentdisplay.component.html',
  styleUrls: ['./departmentdisplay.component.css']
})
export class DepartmentdisplayComponent implements OnInit {

closeResult: string;
  constructor(private modalService: NgbModal ) { }
  name:string = '';
  msg = 'onDesigDelete';
  description:string = '';
  arr: Dept[ ] = [
  new Dept('IT', 'Devlopment'),
  new Dept('IT AdminiStator','Handls official Work'),
  new Dept('Software', 'Test the Application/project in all possible ways using agile methodolgy')
 ];
  ngOnInit() {
  }

 // modal
 open(content) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;

  });

}

// modal
private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}

  // delete
  onDesigDelete(name) {
    if(confirm("Sure to Delete")==true)
      this.arr.splice(this.arr.indexOf(name), 1);
  }
  //add
  onAdddeptClick(){
   if (confirm("Name and Description may not Similer.")==true)
    {
    this.arr.push(new Dept(this.name, this.description));
    this.modalService.dismissAll();
    }

//edit
// onEditdepetClick(){
//   this.arr.
// }

}
}
