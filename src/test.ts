import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

// Prevent Karma from running prematurely.
declare const __karma__: any;
declare const require: any;
__karma__.loaded = function () {};

// Initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Find all the test files.
const context = require.context('./', true, /\.spec\.ts$/);
context.keys().forEach(context);

// Start Karma.
__karma__.start();
