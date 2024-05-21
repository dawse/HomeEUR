import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {Forum} from "../../../models/forum.model";
import {AddService} from "../../../services/add.service";



@Component({
  selector: 'app-add-forum',
  standalone: true,
  imports: [FormsModule , HttpClientModule , CommonModule],
  templateUrl: './add-forum.component.html',
  styleUrls: ['./add-forum.component.css']

})
export class AddForumComponent   {


  forum: Forum = {
    description: '',
    photo: null,
    avis: '',
    equipements: '',
    localisation: '',
    reciproque: null,
    anyechange: null,
    guestpoints: null
  };


   constructor(private addService: AddService) {}

      createForum(): void {
    this.addService.createForum(this.forum).subscribe(() => {
      console.log('Forum created successfully!');

    }, error => {
      console.error('Error creating forum:', error);

    });
  }





}
