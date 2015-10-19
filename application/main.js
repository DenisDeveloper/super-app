import angular from 'angular';
import ngMaterial from 'angular-material';
import ngTable from 'angular-material-data-table';
import ngResource from 'angular-resource';
import MainController from './controllers/main';
import DialogController from './controllers/dialog';
import RequestFactory from './factory/request';

let app = angular
			.module('SuperApp', [ngMaterial, ngTable, ngResource])
			.controller('MainController', MainController)
			.controller('DialogController', DialogController)
			.factory('RequestFactory', RequestFactory);