import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ContentReadingComponent } from './content-reading/content-reading.component';
import { ContentPurchaseComponent } from './content-purchase/content-purchase.component';
import { ContentWalletComponent } from './content-wallet/content-wallet.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SiderbarComponent,
    ContentComponent,
    FooterComponent,
    ContentReadingComponent,
    ContentPurchaseComponent,
    ContentWalletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
