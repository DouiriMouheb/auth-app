import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user!:string;
  title = 'auth-app';

  constructor(
     private keycloakService: KeycloakService) { }

  ngOnInit(): void { this.initilaizerUserOption();
  }
  private initilaizerUserOption(): void {
this.user = this.keycloakService.getUsername();
  }
  
  logout(){
    this.keycloakService.logout();
  }
  
}
