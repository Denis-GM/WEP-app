import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from 'rxjs';
import {GroupService} from "../../../core/api/group.service";
import {IGroup} from "../../../core/interfaces/interface.group";

@Component({
  selector: 'app-group-detailed-student',
  templateUrl: './group-detailed-student.component.html',
  styleUrls: ['./group-detailed-student.component.css']
})
export class GroupDetailedStudentComponent implements OnInit{
  protected idGroup: number = 0;
  protected group: IGroup = {} as IGroup;
  protected participants: any = [];
  protected accounts: any = [];
  protected tests: any = [];
  private routeSubscription: Subscription;
  constructor(private route: ActivatedRoute, private groupService: GroupService,
              private _location: Location) {
    this.routeSubscription = route.params.subscribe((params: any) => {
      this.idGroup = params['id'];
    });
  }

  ngOnInit() {
    console.log(this.idGroup);
    this.group = this.groupService.getGroup(this.idGroup).subscribe(
      (data: any) => {
        console.log(data)
        this.group = data.group;
        this.participants = data.participants;
        this.accounts = data.accounts;
        this.tests = data.tests;
        console.log(this.participants)
    });
    console.log(this.group);
  }

  returnBack() {
    this._location.back();
  }
}
