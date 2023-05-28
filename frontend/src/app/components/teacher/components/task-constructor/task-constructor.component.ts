import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {BossService} from "../../../../servicies/boss.service";
import {GroupService} from "../../../../servicies/group.service";

@Component({
  selector: 'app-task-constructor',
  templateUrl: './task-constructor.component.html',
  styleUrls: ['./task-constructor.component.css']
})
export class TaskConstructorComponent implements OnInit{
  protected bosses: any = [];
  private task: any = {};
  protected groups: any = [];

  constructor(private bossService: BossService, private groupService: GroupService,
              private _fb: FormBuilder) {  }

  ngOnInit() {
    this.getGroups();
    this.getBosses();
  }

  error ='';
  nextPage: boolean = false;
  userEmail = localStorage.getItem('user-email');
  userName = localStorage.getItem('user-full-name');


  testFrom = new FormGroup({
    title: new FormControl('', [Validators.required]),
    subject: new FormControl('', [Validators.required]),
    group: new FormControl(null,  [Validators.required]),
    text: new FormControl('', [Validators.required]),

    difficulty: new FormControl('', [Validators.required]),
    boss: new FormControl(null,  [Validators.required]),
    time: new FormControl('00:15', [Validators.required]),
    time_deadline: new FormControl('', [Validators.required]),
    date_deadline: new FormControl('', [Validators.required]),

    five: new FormControl('', [Validators.required]),
    four: new FormControl('', [Validators.required]),
    three: new FormControl('', [Validators.required]),
    two: new FormControl('', [Validators.required]),
  })

  getGroups(): void {
    this.groupService.getGroups().subscribe(
      groups => {
        console.log(groups)
        this.groups = groups;
    });
  }

  getBosses() {
    this.bossService.getBosses().subscribe(
      (data: any) => {
        console.log(data);
        this.bosses = data;
      }
    )
  }

  saveTest(): void {
    this.task = this.testFrom.value;
    this.nextPage = true;
    console.log(this.task);
  }

  returnTest(): void {
    this.nextPage = false;
    this.getGroups();
    this.getBosses();
  }

  // initModelForm(): FormGroup{
  //   return this._fb.group({
  //       otherControls: [''],
  //       // The formArray, empty
  //       myChoices: new FormArray([]),
  //     }
  // }
  //
  // onCheckChange(event: any) {
  //   const formArray: FormArray = this.testFrom.get('group') as FormArray;
  //
  //   if(event.target.checked){
  //     formArray.push(new FormControl(event.target.value));
  //   }
  //   else{
  //     let i: number = 0;
  //
  //     formArray.controls.forEach(
  //       (ctrl: FormControl) => {
  //         if(ctrl.value == event.target.value) {
  //           formArray.removeAt(i);
  //           return;
  //         }
  //         i++;
  //       }
  //     );
  //   }
  // }

  convertDate(date: string): string {
    // год, месяц, день
    const dateArr = date.split('-');
    return `${dateArr[2]}.${dateArr[1]}.${dateArr[0]}`;
  }

  submit() {
    console.log(this.testFrom.value)
    console.log(this.userEmail);
    console.log(this.userName);
  }
}
