import { PostreadComponent } from './postread/postread.component';
import { AdminNewComponent } from './admin-new/admin-new.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';



export const ROUTES: Routes = [
    {path:'', component: HomeComponent},
    {path:'adminNew', component: AdminNewComponent},
    {path:'adminList', component: AdminListComponent},
    {path:'adminEdit', component: AdminEditComponent},
    {path:'postRead', component: PostreadComponent}
    
]