import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlgoritmiComponent } from './algoritmi/algoritmi.component';
import { BazeDeDateComponent } from './baze-de-date/baze-de-date.component';
import { FrontendComponent } from './frontend/frontend.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProiectareWebComponent } from './proiectare-web/proiectare-web.component';
import { ReteleDeCalculatoareComponent } from './retele-de-calculatoare/retele-de-calculatoare.component';
import { SistemeDeOperareComponent } from './sisteme-de-operare/sisteme-de-operare.component';
import { QuizAlgoritmiComponent } from './algoritmi/quiz-algoritmi/quiz-algoritmi.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeBgDirective } from './change-bg.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DocumentatieAlgoritmiComponent } from './algoritmi/documentatie-algoritmi/documentatie-algoritmi.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { IntrebariAlgoritmiComponent } from './algoritmi/quiz-algoritmi/intrebari-algoritmi/intrebari-algoritmi.component';
import { DocumentatieSistemeDeOperareComponent } from './sisteme-de-operare/documentatie-sisteme-de-operare/documentatie-sisteme-de-operare.component';
import { QuizSistemeDeOperareComponent } from './sisteme-de-operare/quiz-sisteme-de-operare/quiz-sisteme-de-operare.component';
import { IntrebariSistemeComponent } from './sisteme-de-operare/quiz-sisteme-de-operare/intrebari-sisteme/intrebari-sisteme.component';
import { DocumentatieBazeDeDateComponent } from './baze-de-date/documentatie-baze-de-date/documentatie-baze-de-date.component';
import { QuizBazeDeDateComponent } from './baze-de-date/quiz-baze-de-date/quiz-baze-de-date.component';
import { IntrebariBazeDeDateComponent } from './baze-de-date/quiz-baze-de-date/intrebari-baze-de-date/intrebari-baze-de-date.component';
import { BazeDeDateDistribuiteComponent } from './baze-de-date-distribuite/baze-de-date-distribuite.component';
import { QuizBazeDeDateDistribuiteComponent } from './baze-de-date-distribuite/quiz-baze-de-date-distribuite/quiz-baze-de-date-distribuite.component';
import { DocumentatieBazeDeDateDistribuiteComponent } from './baze-de-date-distribuite/documentatie-baze-de-date-distribuite/documentatie-baze-de-date-distribuite.component';
import { IntrebariBazeDeDateDistribuiteComponent } from './baze-de-date-distribuite/quiz-baze-de-date-distribuite/intrebari-baze-de-date-distribuite/intrebari-baze-de-date-distribuite.component';
import { QuizFrontendComponent } from './frontend/quiz-frontend/quiz-frontend.component';
import { DocumentatieFrontendComponent } from './frontend/documentatie-frontend/documentatie-frontend.component';
import { IntrebariFrontendComponent } from './frontend/quiz-frontend/intrebari-frontend/intrebari-frontend.component';
import { QuizProiectareWebComponent } from './proiectare-web/quiz-proiectare-web/quiz-proiectare-web.component';
import { DocumentatieProiectareWebComponent } from './proiectare-web/documentatie-proiectare-web/documentatie-proiectare-web.component';
import { IntrebariProiectareWebComponent } from './proiectare-web/quiz-proiectare-web/intrebari-proiectare-web/intrebari-proiectare-web.component';
import { WebSemanticComponent } from './web-semantic/web-semantic.component';
import { QuizReteleDeCalculatoareComponent } from './retele-de-calculatoare/quiz-retele-de-calculatoare/quiz-retele-de-calculatoare.component';
import { DocumentatieReteleDeCalculatoareComponent } from './retele-de-calculatoare/documentatie-retele-de-calculatoare/documentatie-retele-de-calculatoare.component';
import { IntrebariReteleDeCalculatoareComponent } from './retele-de-calculatoare/quiz-retele-de-calculatoare/intrebari-retele-de-calculatoare/intrebari-retele-de-calculatoare.component';
import { QuizWebSemanticComponent } from './web-semantic/quiz-web-semantic/quiz-web-semantic.component';
import { IntrebariWebSemanticComponent } from './web-semantic/quiz-web-semantic/intrebari-web-semantic/intrebari-web-semantic.component';
import { DocumentatieWebSemanticComponent } from './web-semantic/documentatie-web-semantic/documentatie-web-semantic.component';
import { InteligentaArtificialaComponent } from './inteligenta-artificiala/inteligenta-artificiala.component';
import { QuizInteligentaArtificialaComponent } from './inteligenta-artificiala/quiz-inteligenta-artificiala/quiz-inteligenta-artificiala.component';
import { DocumentatieInteligentaArtificialaComponent } from './inteligenta-artificiala/documentatie-inteligenta-artificiala/documentatie-inteligenta-artificiala.component';
import { IntrebariInteligentaArtificialaComponent } from './inteligenta-artificiala/quiz-inteligenta-artificiala/intrebari-inteligenta-artificiala/intrebari-inteligenta-artificiala.component';



@NgModule({
  declarations: [
    AppComponent,
    AlgoritmiComponent,
    BazeDeDateComponent,
    FrontendComponent,
    LandingPageComponent,
    ProiectareWebComponent,
    ReteleDeCalculatoareComponent,
    SistemeDeOperareComponent,
    QuizAlgoritmiComponent,
    ChangeBgDirective,
    DocumentatieAlgoritmiComponent,
    IntrebariAlgoritmiComponent,
    DocumentatieSistemeDeOperareComponent,
    QuizSistemeDeOperareComponent,
    IntrebariSistemeComponent,
    QuizBazeDeDateComponent,
    IntrebariBazeDeDateComponent,
    DocumentatieBazeDeDateComponent,
    BazeDeDateDistribuiteComponent,
    QuizBazeDeDateDistribuiteComponent,
    DocumentatieBazeDeDateDistribuiteComponent,
    IntrebariBazeDeDateDistribuiteComponent,
    QuizFrontendComponent,
    DocumentatieFrontendComponent,
    IntrebariFrontendComponent,
    QuizProiectareWebComponent,
    DocumentatieProiectareWebComponent,
    IntrebariProiectareWebComponent,
    WebSemanticComponent,
    QuizReteleDeCalculatoareComponent,
    DocumentatieReteleDeCalculatoareComponent,
    IntrebariReteleDeCalculatoareComponent,
    QuizWebSemanticComponent,
    DocumentatieWebSemanticComponent,
    QuizWebSemanticComponent,
    IntrebariWebSemanticComponent,
    DocumentatieWebSemanticComponent,
    InteligentaArtificialaComponent,
    QuizInteligentaArtificialaComponent,
    DocumentatieInteligentaArtificialaComponent,
    IntrebariInteligentaArtificialaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
