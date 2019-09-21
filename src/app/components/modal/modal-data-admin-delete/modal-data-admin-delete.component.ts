import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'component-modal-data-admin-delete',
  templateUrl: './modal-data-admin-delete.component.html'
})
export class ModalDataAdminDeleteComponent implements OnInit {
  user = '';
  category = '';
  constructor(public modalService: ModalService) { }

  ngOnInit() {
    this.user = this.modalService.getUser();
    this.category = this.modalService.getCategory();


  }

}
