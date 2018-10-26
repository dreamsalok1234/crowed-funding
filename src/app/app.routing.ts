import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { RootLayoutComponent } from './layouts/root/root-layout.component';
export const AppRoutes: Routes = [
  {
    path: '',
    component: RootLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
       {
        path: 'home',
        loadChildren: './root/root.module#RootModule'
      },
      {
        path: 'business',
        loadChildren: './root/business-model/business.module#BusinessModule',
      },
      {
        path: 'about',
        loadChildren: './root/about/about.module#AboutModule',
      },
      {
        path: 'works',
        loadChildren: './root/how-it-works/works.module#WorksModule',
      },
      {
        path: 'contact',
        loadChildren: './root/contact-us/contact.module#ContactModule',
      },
      {
        path: 'faq',
        loadChildren: './root/faq/faq.module#FaqModule',
      },
      {
        path: 'videos',
        loadChildren: './root/videos/videos.module#VideosModule',
      },
      {
        path: 'property/:propertyId',
        loadChildren: './root/property/property.module#PropertyModule',
      },
      {
        path: 'terms',
        loadChildren: './root/terms-conditions/terms.module#TermsModule',
      },
      {
        path: 'legal',
        loadChildren: './root/legal-policies/legal.module#LegalModule',
      },
      {
        path: 'properties',
        loadChildren: './root/properties/properties.module#PropertiesModule',
      },
      {
        path: 'privacy',
        loadChildren: './root/privacy-policy/privacy.module#PrivacyModule',
      },
      {
        path: 'edit-profile',
        loadChildren: './root/edit-profile/edit-profile.module#EditProfileModule',
      },
      {
        path: 'change-password',
        loadChildren: './root/change-password/change-password.module#ChangePasswordModule'
      },
      {
        path: 'user-dashboard',
        loadChildren: './root/user-dashboard/user-dashboard.module#UserDashboardModule'
      },
      {
        path: 'investment',
        loadChildren: './root/investment/investment.module#InvestmentModule'
      }
    ]
  },
  {
  path: '',
  component: AdminLayoutComponent,
  children: [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    }, {
      path: 'dashboard',
      loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    {
      path: 'manage-user',
      loadChildren: './dashboard/manage-user/manage-user.module#ManageUserModule',
    },
    {
      path: 'manage-contact',
      loadChildren: './dashboard/manage-contact/manage-contact.module#ManageContactModule',
    },
    {
      path: 'manage-mortgage',
      loadChildren: './dashboard/manage-mortgage/manage-mortgage.module#ManageMortgageModule',
    },
    {
      path: 'manage-property',
      loadChildren: './dashboard/manage-property/manage-property.module#ManagePropertyModule',
    },
    {
      path: 'manage-role',
      loadChildren: './dashboard/manage-role/manage-role.module#ManageRoleModule',
    },
    {
      path: 'manage-transaction',
      loadChildren: './dashboard/manage-transaction/manage-transaction.module#ManageTransactionModule',
    },
    {
      path: 'my-profile',
      loadChildren: './dashboard/my-profile/my-profile.module#MyProfileModule'
    }
  ]
},
 {
  path: '',
  component: AuthLayoutComponent,
  children: [
    {
      path: 'authentication',
      loadChildren: './authentication/authentication.module#AuthenticationModule'
    }
  ]
},
 {
  path: '**',
  redirectTo: 'error/404'
}];
