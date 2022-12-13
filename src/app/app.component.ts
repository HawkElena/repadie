import { Component ,OnInit,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from './components/headers/sidebar.service';
import { UserAuthService } from './services/user-auth-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hawkRiskManage';

  constructor(
    private sidebarservice:SidebarService ,
    private UserAuthService: UserAuthService, 
    private router:Router) {

     }



  
  ngOnInit(){
    if(this.UserAuthService.isLoggedIn()){
    //  this.UserAuthService.authlogeado= true;
    };
    // return this._currentUser.authlogeado;
  }

  public isLoggedIn(){
    return this.UserAuthService.isLoggedIn();
  }

  @HostListener('window:unload')
  onUnload(): void {
     localStorage.removeItem('loginfake');
 }

  public logout(){
    this.UserAuthService.clear();
    this.router.navigate(['/login ']);
  
 }
}
