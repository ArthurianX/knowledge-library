angular.module("zalmoxian-auth-service", ['ui.router.state'])

    .service("zalAuthService", function ($state) {

        this.bounceLogin = function () {
            var userToken = localStorage.getItem('userToken');
            if(userToken === null || userToken === undefined) {
                $state.go("login");
            }
            if (this.verifyToken(userToken) !== true) {
                $state.go("login");
            } else {
                console.log("user has proper authorization for this page");
            }
        };

        this.isLogedIn = function () {
            var userToken = localStorage.getItem('userToken');
            if (this.verifyToken(userToken) === true ) {
                    return true;
            } else {
                return false;
            }
        };
        /**
         * @name giveToken
         * @description returns a token in exchange for the authorization
         * @param {Object} post
         */
        this.getToken =  function (post) {
            //console.log("I'm trying to give out tokens here");
            var token = btoa(post.userName + post.password);
            return token;
        };


        this.verifyToken =  function (token) {
            console.log("I am checking the token");

            token = JSON.parse(token);
            console.log(typeof token);
            console.log(token);//TODO Find out why atob fails
            var decryptedToken = atob(token);
            return true;
        };
        /**
         * @name getRules
         * @param token The token representing the users authentification
         * @description Returns the rules about which pages an individual user is allowed to visit
         */
        this.getRules = function (token) {

        };

        /**
         * @name getInfo
         * @param token The token representing the users authentification
         * @description Returns the info about which pages an individual user is allowed to visit
         */
        this.getInfo = function (token) {

        };

    });
