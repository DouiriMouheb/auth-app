import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule,
    
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
function initializeKeycloak(keycloak: KeycloakService){
  return ()=>
  keycloak.init({
    config: {
      url: 'http://localhost:8080/auth',
      realm:'intranet',
      clientId: 'intranet client',
      
    },
  
  initOptions:{
    onLoad:'login-required',
    flow:'standard',
    checkLoginIframe:false,
  
  },
  loadUserProfileAtStartUp: true,
});
}