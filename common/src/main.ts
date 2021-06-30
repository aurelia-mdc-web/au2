import Aurelia, { RouterConfiguration } from 'aurelia';
import { MyApp } from './my-app';
import { AllConfiguration } from '@aurelia-mdc-web/all';
import { Dashboard } from './components/dashboard/dashboard';

Aurelia
  .register(RouterConfiguration, AllConfiguration)
  .register(Dashboard)
  // To use HTML5 pushState routes, replace previous line with the following
  // customized router config.
  // .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .app(MyApp)
  .start();
