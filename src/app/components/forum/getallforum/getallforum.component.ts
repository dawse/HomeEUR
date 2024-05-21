import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {Forum} from "../../../models/forum.model";
import {AddService} from "../../../services/add.service";

@Component({
  selector: 'app-getallforum',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './getallforum.component.html',
  styleUrls: ['./getallforum.component.css']

})
export class GetallforumComponent implements OnInit{

  forums: Forum[] = [];
  error: string | null = null;

  constructor(private forumService: AddService) { }

  ngOnInit(): void {
    this.forumService.getAllForums()
      .subscribe({
        next: (forums) => this.forums = forums,
        error: (error) => this.error = error.message
      });
  }

}

