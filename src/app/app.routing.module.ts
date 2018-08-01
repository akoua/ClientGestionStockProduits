import { NgModule } from '@angular/core'
import { RouterModule, Routes} from '@angular/router'

import { ProduitComponent } from './produit/produit.component';
import { HomeComponent } from './home/home.component';

const appRoutes:Routes = [
    {path:'produit', component:ProduitComponent},
    {path:'home', component:HomeComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            enableTracing:true
        })
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{
    
}