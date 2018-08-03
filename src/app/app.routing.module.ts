import { NgModule } from '@angular/core'
import { RouterModule, Routes} from '@angular/router'

import { ProduitComponent } from './produit/produit.component';
import { HomeComponent } from './home/home.component';
import { ProduitResolverService } from './services/produit-resolver.service';

const appRoutes:Routes = [
    {
        path:'produit',
        component:ProduitComponent,
        resolve: {
            //implementer dans le produit resolver pour eviter les pages blanches
            produits: ProduitResolverService
        }
    },
    {path:'home', component:HomeComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'}
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