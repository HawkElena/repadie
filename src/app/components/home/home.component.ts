import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName: string|null="";
  userRoles: string|null="";
  constructor(private authService: UserAuthService, private router:Router) { }

  ngOnInit(): void {
    var rolD :any

    //return this.UserAuthService.isLoggedIn();
    
    rolD = this.authService.getRoles();
    if(!rolD){
      this.userRoles = "Usuario-no-valido";
    }else{
      this.userRoles  = rolD.RolUserName;
    }
    
  }


  llamarCrearProyecto()
  {
     this.router.navigate(['/proyc']);
  }
}
