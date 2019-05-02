
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './shared/admin.guard';


import { AddonsvComponent } from './client/addonsv/addonsv.component';

import { VisitingtimeComponent } from './client/visitingtime/visitingtime.component';
import { DashboardComponent } from './client/dashboard/dashboard.component';
import { PlaceorderComponent } from './client/placeorder/placeorder.component';
import { AddressComponent } from './client/address/address.component';
import { AddonsComponent } from './client/addons/addons.component';
import { ProductsComponent } from './client/products/products.component';
import { MeetComponent } from './client/meet/meet.component';
import { VisitingdateComponent } from './client/visitingdate/visitingdate.component';
import { SquarefeetComponent } from './client/squarefeet/squarefeet.component';
import { CommentsComponent } from './client/comments/comments.component';
import { DeliveryComponent } from './client/delivery/delivery.component';
import { RevieworderComponent } from './client/revieworder/revieworder.component';
import { UpdateorderComponent } from './client/updateorder/updateorder.component';
import { CompleteorderComponent } from './client/completeorder/completeorder.component';
import { MyorderComponent } from './client/myorder/myorder.component';
import { ProfileComponent } from './client/profile/profile.component';
import { EditprofileComponent } from './client/editprofile/editprofile.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AgentdashboardComponent } from './agent/agentdashboard/agentdashboard.component';
import { AgentloginComponent } from './agent/agentlogin/agentlogin.component';
import { LoginComponent } from './client/login/login.component';
import { MyaccountComponent } from './client/myaccount/myaccount.component';
import { DeliveriesComponent } from './client/deliveries/deliveries.component';
import { ForgetComponent } from './client/forget/forget.component';
import { ThanksComponent } from './client/thanks/thanks.component';
import { RegisterComponent } from './client/register/register.component';
import { AccessComponent } from './client/access/access.component';
import { UnitsComponent } from './client/units/units.component';
import { InvoiceComponent } from './client/invoice/invoice.component';


import { AdminheaderComponent } from './admin/adminheader/adminheader.component';
import { AdminsidenavComponent } from './admin/adminsidenav/adminsidenav.component';
import { AgentregisterComponent } from './agent/agentregister/agentregister.component';
import { AdmincompleteComponent } from './admin/admincomplete/admincomplete.component';
import { AdminuserComponent } from './admin/adminuser/adminuser.component';
import { AdminorderComponent } from './admin/adminorder/adminorder.component';
import { AdminorderhistoryComponent } from './admin/adminorderhistory/adminorderhistory.component';
import { AdminpaymentComponent } from './admin/adminpayment/adminpayment.component';
import { AdmintableComponent } from './admin/admintable/admintable.component';
import { AdminscheduledComponent } from './admin/adminscheduled/adminscheduled.component';
import { AdminnewComponent } from './admin/adminnew/adminnew.component';
import { AdminpendingComponent } from './admin/adminpending/adminpending.component';
import {AdmininvoiceComponent} from './admin/admininvoice/admininvoice.component'
import { AgentorderComponent } from './agent/agentorder/agentorder.component';

import { PriceComponent } from './client/price/price.component';
import { MainComponent } from './client/main/main.component';
import { ContainerComponent } from './client/container/container.component';
import { OrderComponent } from './client/order/order.component';
import { MakepaymentComponent } from './client/makepayment/makepayment.component';
import { PaymentinfoComponent } from './client/paymentinfo/paymentinfo.component';
import { MyaccountcontainerComponent } from './client/myaccountcontainer/myaccountcontainer.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { animation: 'login' }},
  { path: 'contain', component: ContainerComponent, data: { animation: 'contain' }},
  { path: 'main', component:MainComponent, 
    children: [{ path: ' ', redirectTo: 'home' },
      { path: 'home', component: DashboardComponent,data: { animation: 'home' } },
               { path: 'order', component: OrderComponent,
                 children: [{ path: ' ', redirectTo: 'placeorder' },
                   { path: 'placeorder', component: PlaceorderComponent, data: { animation: 'placeorder' } },
                   { path: 'address', component: AddressComponent,data:{animation:'address'} },
                   { path: 'units', component: UnitsComponent },
                   { path: 'addonsp', component: AddonsComponent },
                   { path: 'addons', component: AddonsComponent },
                   { path: 'addonsv', component: AddonsvComponent },
                   { path: 'access', component: AccessComponent,data:{animation:'access'} },
                   { path: 'products', component: ProductsComponent,data:{animation:'products'} },
                   { path: 'meet', component: MeetComponent },
                   { path: 'visitingdate', component: VisitingdateComponent,data:{animation:'visitingdate'} },
                   { path: 'visitingtime', component: VisitingtimeComponent,data:{animation:'visitingtime'} },
                   { path: 'squarefeet', component: SquarefeetComponent,data:{animation:'squarefeet'} },
                   { path: 'comments', component: CommentsComponent,data:{animation:'comments'} },
                   { path: 'revieworder', component: RevieworderComponent,data:{animation:'revieworder'} },
                   { path: 'pay', component: MakepaymentComponent,data:{animation:'pay'}  },
                   { path: 'updateorder', component: UpdateorderComponent,data:{animation:'updateorder'} },
                   { path: 'completeorder', component: CompleteorderComponent,data:{animation:'completeorder'} },] },  
               { path: 'myaccount', component:MyaccountcontainerComponent , children:[
                 { path: 'main', component: MyaccountComponent },
                 { path: ' ', redirectTo: 'main'},
                 
                 { path: 'paymentinfo', component: PaymentinfoComponent  },
                 { path: 'invoice', component: InvoiceComponent },
                
                 { path: 'editprofile', component: EditprofileComponent },
               ] }, 
               { path: 'delivery', component: DeliveryComponent,data:{animation:'delivery'} }, 
               { path: 'image', component: DeliveriesComponent }, 
               { path: 'myorder', component: MyorderComponent,data:{animation:'myorder'} },
                { path: 'profile', component: ProfileComponent,data:{animation:'profile'} }, ] },
                { path: 'hh', component: MainComponent },
  { path: 'forget', component: ForgetComponent,data:{animation:'forget'}  },
  { path: 'thanks', component: ThanksComponent },
  { path: 'register', component: RegisterComponent,data:{animation:'register'}  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'price', component: PriceComponent },
 
  
  { path: 'adlogin', component: AdminloginComponent },
  { path: 'addashboard', component: AdmindashboardComponent, canActivate: [AdminGuard]},
  { path: 'adorders', component: AdminorderComponent, canActivate: [AdminGuard]},
  { path: 'agdashboard', component: AgentdashboardComponent, },
  { path: 'aglogin', component: AgentloginComponent },
  { path: 'agregister', component: AgentregisterComponent },
 
  { path:'adheader', component: AdminheaderComponent},
  { path: 'adsidenav', component: AdminsidenavComponent, canActivate: [AdminGuard]},
  { path: 'aduser', component: AdminuserComponent, canActivate: [AdminGuard]},
  { path:'agorders', component: AgentorderComponent},
  { path:'adorderhistory', component: AdminorderhistoryComponent},
  { path:'adpayment', component: AdminpaymentComponent},
  { path: 'adtable', component: AdmintableComponent, canActivate: [AdminGuard]},
  { path: 'adscheduled', component: AdminscheduledComponent, canActivate: [AdminGuard]},
  { path: 'adnew', component: AdminnewComponent, canActivate: [AdminGuard]},
  { path: 'adpending', component: AdminpendingComponent, canActivate: [AdminGuard]},
  { path: 'adcomplete', component: AdmincompleteComponent, canActivate: [AdminGuard]},
  { path:'adinvoice', component:AdmininvoiceComponent, canActivate:[AdminGuard]},
 
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true } )
  ],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { 
  
}