import { Component, TemplateRef, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { data } from 'jquery';
import { ListInterface } from 'src/app/interface/list';
import { AlertService } from 'src/app/services/alert.service';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.css'],
})
export class ItemsPageComponent {
update(arg0: string,arg1: string) {
throw new Error('Method not implemented.');
}
  
list: any;
  updateItem(arg0: string) {
    throw new Error('Method not implemented.');
  }
  listItems: ListInterface[] = [];

  name: string = '';
  description: string = '';

  // modal service from ng bootstrap
  private modalService = inject(NgbModal);

  constructor(
    private listService: ListService,
    private alertService: AlertService
  ) {}



  ngOnInit(): void {
    // call function that return data from the service
    this.listService.getallListFunc().subscribe((data) => {
      this.listItems = data;
      console.log(this.listItems);
      
    });
  }

  // open modal
  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  deleteItem(id: string) {
    this.listService.removeFromListFunc(id).subscribe(
      (data) => {
        this.listItems = data;
        this.alertService.success('Item deleted');
      },
      (error) => {
        this.alertService.error('Try again later');
      }
    );
  }

  addToListFunc(name: string, description: string) {
    if (!name || !description) {
      this.alertService.error('Name and description required');
      return;
    }

    this.listService.addToListFunc(name, description).subscribe(
      (data) => {
        this.listItems = data;
        this.alertService.success('Item added in the list');
      },
      (error) => {
        this.alertService.error('Try again later');
      }
    );
  }

 //update
 updateToList(name: string, description: string,) {

  this.listService.updateToListFunc(name,this.description).subscribe((res: any) => {
    console.log(name)
  });
}
}

