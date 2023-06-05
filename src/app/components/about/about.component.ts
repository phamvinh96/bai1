import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { SubjectService } from 'src/app/services/subject.service';
import { StudentServiceService } from 'src/app/student-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  subjects:any;
  constructor(private subject: SubjectService, private stdSrv: StudentServiceService) {}
  ngOnInit(): void {
    this.subject.getList().subscribe(res => {
      
    })

  }

}
