import { Routes } from "@angular/router";
import { GeneralComponent } from "./general.component";
import { BasicComponent } from "./components/basic/basic.component";
import { ContactComponent } from "./components/contact/contact.component";
import { AddressComponent } from "./components/address/address.component";

export const GeneralRoutes: Routes = [
    {
        path: '',
        component: GeneralComponent,
        children: [
            {
                path: '',
                redirectTo: 'basic',
                pathMatch: 'full',
            },
            {
                path: 'basic',
                title: 'Básico',
                component: BasicComponent,
            },
            {
                path: 'contact',
                title: 'Contato',
                component: ContactComponent,
            },
            {
                path: 'address',
                title: 'Endereço',
                component: AddressComponent,
            }
        ],
    }
];
