import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private toastr: ToastrService) {}

  success(text: string) {
    this.toastr.success(text, '', {
      timeOut: 2000,
    });
  }

  error(text: string) {
    this.toastr.error(text, '', {
      timeOut: 2000,
    })
  }
}
