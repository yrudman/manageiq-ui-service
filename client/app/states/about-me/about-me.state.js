import templateUrl from './about-me.html';

/** @ngInject */
export function AboutMeState(routerHelper) {
  routerHelper.configureStates(getStates());
}

function getStates() {
  return {
    'about-me': {
      parent: 'application',
      url: '/about-me',
      templateUrl,
      controller: StateController,
      controllerAs: 'vm',
      title: N_('About Me'),
    },
  };
}

/** @ngInject */
function StateController() {
}
