import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './services/projects.service';

import { FilterPipe } from '../shared/pipes/filter.pipe';
import { OrderByPipe } from '../shared/pipes/order-by.pipe';

import { Project } from './interfaces/Project'
import { ProjectTableHead } from './interfaces/ProjectTableHead'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private projectsService: ProjectsService) { }

  projects: Project[];
  projectTableHeads: ProjectTableHead[] = [
    { title: "#", orderByKey: "id" },
    { title: "Project Name", orderByKey: "project_name" },
    { title: "Created By", orderByKey: "created_by" },
    { title: "Created Time", orderByKey: "created_time" },
  ]


  getProjects(): void {
    this.projectsService.getProjects()
      .subscribe(projects => this.projects = projects);
  }

  orderByDefault = 'id';
  orderByReverseDefault = false;
  get orderByKey() {
    return this.orderByDefault;
  }
  get orderByReverse() {
    return this.orderByReverseDefault;
  }
  changeOrderByKey(changedName) {
    if (changedName === this.orderByDefault) {
      this.orderByReverseDefault = !this.orderByReverseDefault;
    } else {
      this.orderByDefault = changedName;
      this.orderByReverseDefault = false;
    }

  }

  ngOnInit() {
    this.getProjects();
  }

}
