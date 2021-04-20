import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './widgets/header/header.component';
import { NgbModule, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './widgets/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ListingComponent } from './pages/listing/listing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './pages/login/login.component';
import { HelpComponent } from './pages/help/help.component';
import { DatabaseService } from './services/database.service';
import { environment } from 'src/environments/environment';
import { AccountComponent } from './pages/account/account.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'listing', component: ListingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'help', component: HelpComponent },
  { path: 'account/:id', component: AccountComponent },
];

// var firebaseConfig = {
//   apiKey: 'AIzaSyCbt1M1m2Aa_nbYAJz1oj-l1ZGEK995oxg',
//   authDomain: 'plantkeeper-4cedb.firebaseapp.com',
//   databaseURL: 'https://plantkeeper-4cedb-default-rtdb.firebaseio.com',
//   projectId: 'plantkeeper-4cedb',
//   storageBucket: 'plantkeeper-4cedb.appspot.com',
//   messagingSenderId: '623507312934',
//   appId: '1:623507312934:web:c0e3d0fd10c9c12ca471e7',
// };

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    SignupComponent,
    ListingComponent,
    LoginComponent,
    HelpComponent,
    AccountComponent,
    // NgbCarousel,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
