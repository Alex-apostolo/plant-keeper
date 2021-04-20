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
import { CreateListingComponent } from './pages/createlisting/createlisting.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './pages/login/login.component';
import { HelpComponent } from './pages/help/help.component';
import { DatabaseService } from './services/database.service';
import { environment } from 'src/environments/environment';
import { AccountComponent } from './pages/account/account.component';
import { ListingComponent } from './pages/listings/listing/listing.component';
import { ListingsComponent } from './pages/listings/listings.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'create-listing', component: CreateListingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'help', component: HelpComponent },
  { path: 'account/:id', component: AccountComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'listings', component: ListingsComponent },
  { path: 'listings/listing/:id', component: ListingComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    SignupComponent,
    CreateListingComponent,
    LoginComponent,
    HelpComponent,
    AccountComponent,
    ListingsComponent,
    ListingComponent,
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
    MatSelectModule,
    HttpClientModule,
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
