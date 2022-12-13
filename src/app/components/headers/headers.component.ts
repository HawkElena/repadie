import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowDown, faSignIn, faSignOut,faDownload, faReceipt, faFilePen, faFileContract } from '@fortawesome/free-solid-svg-icons';
import { ObjetoSubMenu } from 'src/app/Models/RepadieMenuModel/SubMenuRepModel';
import { GLOBAL } from 'src/app/services/global.service';
import { UserAuthService } from 'src/app/services/user-auth-service';

import {ObjetoMenu} from '../../Models/RepadieMenuModel/MenuRepModel' 
@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})

export class HeadersComponent implements OnInit {
  public faSignIn = faSignIn;
  public faSignOut= faSignOut;
  public faDownload= faDownload;
  public faProy = faFilePen;
  public faLibros = faFileContract;

  public tituloApp : string = GLOBAL.strNameCompany;

  public sideBarMenu :  ObjetoMenu [] =[];
  public sidebarSubMenu :  ObjetoSubMenu[] =[];

  constructor(
              private UserAuthService: UserAuthService, 
              private router:Router) { }

  ngOnInit(): void {
    var sidemenutemp = new ObjetoMenu("","","","",[]);
    var sidesubmenutemp =new ObjetoSubMenu("","","","");
    
    sidemenutemp.id= 'dashboard',
    sidemenutemp.title= 'Dashboard',
    sidemenutemp.icon= 'icon-grid menu-icon',
    sidemenutemp.url= '',
    this.sideBarMenu.push(sidemenutemp);

    sidemenutemp = new ObjetoMenu("","","","",[]);
    sidesubmenutemp =new ObjetoSubMenu("","","","");

    sidemenutemp.id= 'task',
    sidemenutemp.title= 'Task',
    sidemenutemp.icon= 'icon-layout menu-icon',
    sidemenutemp.url= '',

    sidesubmenutemp =new ObjetoSubMenu("","","","");
    sidesubmenutemp.id= 'task1',
    sidesubmenutemp.title= 'Task 1',
    sidesubmenutemp.icon= '',
    sidesubmenutemp.url= '',
    sidemenutemp.submenu.push(sidesubmenutemp);
    
    sidesubmenutemp =new ObjetoSubMenu("","","","");
    sidesubmenutemp.id= 'task2',
    sidesubmenutemp.title= 'Task 2',
    sidesubmenutemp.icon= '',
    sidesubmenutemp.url= '',
    sidemenutemp.submenu.push(sidesubmenutemp);
    this.sideBarMenu.push(sidemenutemp);

    sidemenutemp = new ObjetoMenu("","","","",[]);
    sidesubmenutemp =new ObjetoSubMenu("","","","");

    sidemenutemp.id= 'scheduler',
    sidemenutemp.title= 'Scheduler',
    sidemenutemp.icon= 'icon-layout menu-icon',
    sidemenutemp.url= '',

    sidesubmenutemp.id= 'calendar',
    sidesubmenutemp.title= 'Calendar',
    sidesubmenutemp.icon= '',
    sidesubmenutemp.url= '',
    sidemenutemp.submenu.push(sidesubmenutemp);
    
    sidesubmenutemp =new ObjetoSubMenu("","","","");
    sidesubmenutemp.id= 'scheduler',
    sidesubmenutemp.title= 'Scheduler',
    sidesubmenutemp.icon= '',
    sidesubmenutemp.url= '',
    sidemenutemp.submenu.push(sidesubmenutemp);

    sidesubmenutemp =new ObjetoSubMenu("","","","");
    sidesubmenutemp.id= 'orders',
    sidesubmenutemp.title= 'Orders',
    sidesubmenutemp.icon= '',
    sidesubmenutemp.url= '',
    sidemenutemp.submenu.push(sidesubmenutemp);

    sidesubmenutemp =new ObjetoSubMenu("","","","");
    sidesubmenutemp.id= 'users',
    sidesubmenutemp.title= 'Users',
    sidesubmenutemp.icon= '',
    sidesubmenutemp.url= '',
    sidemenutemp.submenu.push(sidesubmenutemp);

    sidesubmenutemp =new ObjetoSubMenu("","","","");
    sidesubmenutemp.id= 'sales',
    sidesubmenutemp.title= 'Sales',
    sidesubmenutemp.icon= '',
    sidesubmenutemp.url= '',
    sidemenutemp.submenu.push(sidesubmenutemp);

    this.sideBarMenu.push(sidemenutemp);
    
  }

  public isLoggedIn(){
    return this.UserAuthService.isLoggedIn();
  }

  public logout(){
     this.UserAuthService.clear();
    //this.router.navigate(['/home']);
  }
}
