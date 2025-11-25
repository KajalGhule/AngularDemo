import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MentoringComponent } from './mentoring/mentoring.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ProtectedComponent } from './protected/protected.component';
import { LoggedInGuardService } from './logged-in-guard.service';
import { authGuard } from './auth.guard';
import { CartComponent } from './shopping-cart/cart/cart.component';
export const routes: Routes = [
    // {path:'', redirectTo:'home',pathMatch:"full"},
    { path: 'home', component: HomeComponent },
    { path: 'services', component: MentoringComponent},
    { path: 'about', component: AboutComponent}, 
    { path:'contact', component: ContactComponent},
    //Nested Routing
     {
        path: 'lists',
        component: ListComponent,
                    children: [
                        { path: 'details/:id', component: DetailsComponent },
                        { path: 'update/:id', component: UpdateComponent },
                        { path: 'delete/:id', component: DeleteComponent }
                    ]
    },

    // { path: 'protected',component: ProtectedComponent,canActivate: [LoggedInGuardService]}, //secure Routing
    {path: 'addtocart', component: CartComponent,canActivate: [LoggedInGuardService]},
    { path: 'protected',component: ProtectedComponent,canActivate: [authGuard]}
];
