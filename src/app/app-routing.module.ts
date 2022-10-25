import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlgoritmiComponent } from './algoritmi/algoritmi.component';
import { DocumentatieAlgoritmiComponent } from './algoritmi/documentatie-algoritmi/documentatie-algoritmi.component';
import { IntrebariAlgoritmiComponent } from './algoritmi/quiz-algoritmi/intrebari-algoritmi/intrebari-algoritmi.component';
import { QuizAlgoritmiComponent } from './algoritmi/quiz-algoritmi/quiz-algoritmi.component';
import { BazeDeDateDistribuiteComponent } from './baze-de-date-distribuite/baze-de-date-distribuite.component';
import { DocumentatieBazeDeDateDistribuiteComponent } from './baze-de-date-distribuite/documentatie-baze-de-date-distribuite/documentatie-baze-de-date-distribuite.component';
import { IntrebariBazeDeDateDistribuiteComponent } from './baze-de-date-distribuite/quiz-baze-de-date-distribuite/intrebari-baze-de-date-distribuite/intrebari-baze-de-date-distribuite.component';
import { QuizBazeDeDateDistribuiteComponent } from './baze-de-date-distribuite/quiz-baze-de-date-distribuite/quiz-baze-de-date-distribuite.component';
import { BazeDeDateComponent } from './baze-de-date/baze-de-date.component';
import { DocumentatieBazeDeDateComponent } from './baze-de-date/documentatie-baze-de-date/documentatie-baze-de-date.component';
import { IntrebariBazeDeDateComponent } from './baze-de-date/quiz-baze-de-date/intrebari-baze-de-date/intrebari-baze-de-date.component';
import { QuizBazeDeDateComponent } from './baze-de-date/quiz-baze-de-date/quiz-baze-de-date.component';
import { FrontendComponent } from './frontend/frontend.component';
import { IntrebariFrontendComponent } from './frontend/quiz-frontend/intrebari-frontend/intrebari-frontend.component';
import { QuizFrontendComponent } from './frontend/quiz-frontend/quiz-frontend.component';
import { DocumentatieInteligentaArtificialaComponent } from './inteligenta-artificiala/documentatie-inteligenta-artificiala/documentatie-inteligenta-artificiala.component';
import { InteligentaArtificialaComponent } from './inteligenta-artificiala/inteligenta-artificiala.component';
import { IntrebariInteligentaArtificialaComponent } from './inteligenta-artificiala/quiz-inteligenta-artificiala/intrebari-inteligenta-artificiala/intrebari-inteligenta-artificiala.component';
import { QuizInteligentaArtificialaComponent } from './inteligenta-artificiala/quiz-inteligenta-artificiala/quiz-inteligenta-artificiala.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DocumentatieProiectareWebComponent } from './proiectare-web/documentatie-proiectare-web/documentatie-proiectare-web.component';
import { ProiectareWebComponent } from './proiectare-web/proiectare-web.component';
import { IntrebariProiectareWebComponent } from './proiectare-web/quiz-proiectare-web/intrebari-proiectare-web/intrebari-proiectare-web.component';
import { QuizProiectareWebComponent } from './proiectare-web/quiz-proiectare-web/quiz-proiectare-web.component';
import { DocumentatieReteleDeCalculatoareComponent } from './retele-de-calculatoare/documentatie-retele-de-calculatoare/documentatie-retele-de-calculatoare.component';
import { IntrebariReteleDeCalculatoareComponent } from './retele-de-calculatoare/quiz-retele-de-calculatoare/intrebari-retele-de-calculatoare/intrebari-retele-de-calculatoare.component';
import { QuizReteleDeCalculatoareComponent } from './retele-de-calculatoare/quiz-retele-de-calculatoare/quiz-retele-de-calculatoare.component';
import { ReteleDeCalculatoareComponent } from './retele-de-calculatoare/retele-de-calculatoare.component';
import { DocumentatieSistemeDeOperareComponent } from './sisteme-de-operare/documentatie-sisteme-de-operare/documentatie-sisteme-de-operare.component';
import { IntrebariSistemeComponent } from './sisteme-de-operare/quiz-sisteme-de-operare/intrebari-sisteme/intrebari-sisteme.component';
import { QuizSistemeDeOperareComponent } from './sisteme-de-operare/quiz-sisteme-de-operare/quiz-sisteme-de-operare.component';
import { SistemeDeOperareComponent } from './sisteme-de-operare/sisteme-de-operare.component';
import { DocumentatieWebSemanticComponent } from './web-semantic/documentatie-web-semantic/documentatie-web-semantic.component';
import { IntrebariWebSemanticComponent } from './web-semantic/quiz-web-semantic/intrebari-web-semantic/intrebari-web-semantic.component';
import { QuizWebSemanticComponent } from './web-semantic/quiz-web-semantic/quiz-web-semantic.component';
import { WebSemanticComponent } from './web-semantic/web-semantic.component';

const routes: Routes = [
  {path:'', component:LandingPageComponent},
  {path:'algoritmi', component:AlgoritmiComponent},
  {path:'sisteme-de-operare', component:SistemeDeOperareComponent},
  {path:'baze-de-date', component:BazeDeDateComponent},
  {path:'baze-de-date-distribuite', component:BazeDeDateDistribuiteComponent},
  {path:'frontend', component:FrontendComponent},
  {path:'proiectare-web', component:ProiectareWebComponent},
  {path:'retele-de-calculatoare', component:ReteleDeCalculatoareComponent},
  {path:'sisteme-de-operare', component: SistemeDeOperareComponent},
  {path:'quiz-algoritmi', component:QuizAlgoritmiComponent},
  {path:'intrebari', component:IntrebariAlgoritmiComponent},
  {path: 'documentatie-algoritmi', component:DocumentatieAlgoritmiComponent},
  {path:'documentatie-sisteme', component:DocumentatieSistemeDeOperareComponent},
  {path:'quiz-sisteme', component: QuizSistemeDeOperareComponent},
  {path:'intrebari-sisteme', component: IntrebariSistemeComponent},
  {path:'intrebari-baze-de-date', component:IntrebariBazeDeDateComponent},
  {path:'documentatie-baze-de-date', component:DocumentatieBazeDeDateComponent},
  {path:'quiz-baze-de-date', component:QuizBazeDeDateComponent},
  {path:'intrebari-baze-de-date-distribuite', component:IntrebariBazeDeDateDistribuiteComponent},
  {path:'quiz-baze-de-date-distribuite', component: QuizBazeDeDateDistribuiteComponent},
  {path:'documentatie-baze-de-date-distribuite', component: DocumentatieBazeDeDateDistribuiteComponent},
  {path: 'quiz-frontend', component: QuizFrontendComponent},
  {path: 'intrebari-frontend', component:IntrebariFrontendComponent},
  {path:'quiz-proiectare-web', component:QuizProiectareWebComponent},
  {path:'documentatie-proiectare-web', component:DocumentatieProiectareWebComponent},
  {path:'intrebari-proiectare-web', component:IntrebariProiectareWebComponent},
  {path:'quiz-retele-de-calculatoare', component:QuizReteleDeCalculatoareComponent},
  {path:'intrebari-retele-de-calculatoare', component: IntrebariReteleDeCalculatoareComponent},
  {path:'documentatie-retele-de-calculatoare', component:DocumentatieReteleDeCalculatoareComponent},
  {path: 'web-semantic', component: WebSemanticComponent},
  {path:'quiz-web-semantic', component: QuizWebSemanticComponent},
  {path:'intrebari-web-semantic', component: IntrebariWebSemanticComponent},
  {path:'documentatie-web-semantic', component:DocumentatieWebSemanticComponent},
  {path:'inteligenta-artificiala', component:InteligentaArtificialaComponent},
  {path:'quiz-inteligenta-artificiala', component: QuizInteligentaArtificialaComponent},
  {path:'intrebari-inteligenta-artificiala', component: IntrebariInteligentaArtificialaComponent},
  {path:'documentatie-inteligenta-artificiala', component:DocumentatieInteligentaArtificialaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
