import { Component, OnInit } from '@angular/core';
import {RECENTLY_VIEWED, WORKSPACES, GUEST_WORKSPACES} from '../../../../core/constants/boards';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  recentlyViewed = RECENTLY_VIEWED;
  workspaces = WORKSPACES;
  guestWorkspaces = GUEST_WORKSPACES;


  constructor() { }

  ngOnInit(): void {
  }

}
