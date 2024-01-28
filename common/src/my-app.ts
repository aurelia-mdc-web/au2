import { Dashboard } from './components/dashboard/dashboard';

export class MyApp {
    static routes = [{ component: Dashboard, title: 'Dashboard', path: 'dashboard' }];
    routes = MyApp.routes;
}
