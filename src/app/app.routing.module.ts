import { NgModule } from '@angular/core'
import { RouterModule, Routes} from '@angular/router'

import { ProduitComponent } from './produit/produit.component';
import { HomeComponent } from './home/home.component';
import { ProduitResolverService } from './services/produit-resolver.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes:Routes = [
    
    {path:'login', component: LoginComponent},
    {
        path:'home',
        component:HomeComponent,
        children:[
            {   path:'produit',
                component:ProduitComponent,
                resolve: {
                    //implementer dans le produit resolver pour eviter les pages blanches lors des chargements
                    produits: ProduitResolverService
                },
                outlet: 'contentOultet'
            },
            {
                path:'dashboard',
                component:DashboardComponent,
                outlet: 'contentOultet'
            }
        ]
    },
    {path:'',redirectTo:'/login',pathMatch:'full'}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, )
    ],
    providers: [ProduitResolverService],
    exports:[RouterModule]
})

export class AppRoutingModule{
    //{        enableTracing:true    }
}