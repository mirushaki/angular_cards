import { BiographyComponent } from "./collections/biography/biography.component";
import { CompaniesComponent } from "./collections/companies/companies.component";
import { PartnersComponent } from "./collections/partners/partners.component";

export class RouterMap {
    public static routes = {
        'collections': {
            'test': { path: '', component: BiographyComponent },
            'companies': { path: 'companies', component: CompaniesComponent },
            'partners': { path: 'partners', component: PartnersComponent },
        },
        'elements': {
            'test': { path: '', component: BiographyComponent },
            'companies': { path: 'companies', component: CompaniesComponent },
            'partners': { path: 'partners', component: PartnersComponent }
        }
    }

    public static get collectionPaths() {
        return Object.values(this.routes.collections)
    }

    public static get elementsPaths() {
        return Object.values(this.routes.elements)
    }
}