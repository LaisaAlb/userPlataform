import { Routes } from '@angular/router';
import { InitialComponent } from './components/initial/initial.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Início',
        component: InitialComponent,
    },
    {
        path: 'general',
        title: 'Geral',
        loadChildren: () => import('./components/general/general.routes').then(m => m.GeneralRoutes),
    },
    {
        path: 'transactions',
        title: 'Transações',
        loadChildren: () => import('./components/transactions/transactions.routes').then(m => m.TransactionsRoutes),
    },
    {
        path: '**',
        title: 'Página não encontrada',
        component: NotFoundComponent,
    }
];
