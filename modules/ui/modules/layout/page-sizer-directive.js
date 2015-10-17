angular.module('app').directive('pageSizer', ['$rootScope', function($rootScope) {
    return {
        link: function(scope, el, attrs) {

            var appFooterHeight = 51;

            var appFooter = jQuery('.' + attrs.footercontainer);
            var appFooterTop = appFooter.position().top;
            var me = jQuery(el);
            var myTop = me.position().top;

            function resize(){

                var desiredHeight = appFooterTop - myTop - appFooterHeight;

                me.animate({height: desiredHeight + "px"}, 300, null, function(){

                });
            }
            resize();
        }
    };
}]);