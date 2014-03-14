angular.module('zamolxian.config', [])

  /* The constants here are created as object so we don't pollute the window object with all of them, the module is
  *  included as a normal dependency and we call only the constant we want like myCtrl($scope, userapp) etc where we
  *  use the rest of the data from the selected object
  **/

  //Github settings
    .constant('github', {
      username: 'arthurianx',
      repository: 'Zamolxian',
      branch: 'develop_george'
    })

  //UserApp.io details
    .constant('userapp', {
      token: '24234o23423y4923r2893r47'
    })

  //Firebase details
    .constant('firebaseURL', {
        link: "https://zalmoxian.firebaseio.com/"
    })

  //Name on site, if no account made
    .value('name', 'George')

  //User details, to be populated after login.
    .value('user', {
      userId: 101,
      role: 'user',
      fullName: 'Bob Schwanstein',
      locale: 'en-US'
    });
