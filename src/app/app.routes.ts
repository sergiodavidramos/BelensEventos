import { RouterModule, Routes } from "@angular/router";
import { PrincipalComponent } from './pages/principal/principal.component';
import { SalonesComponent } from './pages/salones/salones.component';
import { PaquetesComponent } from './pages/paquetes/paquetes.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';
import { MobiliarioComponent } from './pages/mobiliario/mobiliario.component';
import { ComedoresComponent } from './pages/comedores/comedores.component';
import { BarComponent } from './pages/bar/bar.component';
import { CateringComponent } from './pages/catering/catering.component';

const appRoutes: Routes = [
    {path:'inicio', component: PrincipalComponent},
    {path:'salones', component: SalonesComponent},
    {path:'paquetes', component: PaquetesComponent},
    {path:'promociones', component: PromocionesComponent},
    {path:'mobiliario', component: MobiliarioComponent},
    {path:'comedores', component: ComedoresComponent},
    {path:'bar', component: BarComponent},
    {path:'catering', component: CateringComponent},
    
    {path:'', redirectTo: '/inicio', pathMatch: 'full'},
];
 
export const APP_ROUTES = RouterModule.forRoot(appRoutes,{useHash: true});