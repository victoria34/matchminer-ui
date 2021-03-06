/*
 * Copyright (c) 2017. Dana-Farber Cancer Institute. All rights reserved.
 *
 *  Licensed under the GNU Affero General Public License, Version 3.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *
 * See the file LICENSE in the root of this repository.
 *
 * Contributing authors:
 * - berndvdveen
 *
 */

'use strict';

angular.module('matchminerUiApp')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			.state('clinician-response', {
				parent: 'site',
				url: '/response/:id',
				data: {
					authorities: []
				},
				views: {
					'': {
						templateUrl: 'scripts/app/public/clinician-response/clinician-response.html',
						controller: 'ClinicianResponseCtrl',
						controllerAs: 'cr'
					},
					'nav@clinician-response': {
						templateUrl: 'scripts/components/navbar/navbar.html',
						controller: 'NavbarCtrl',
						controllerAs: 'nbc'
					}
				}
			});
	}]);
