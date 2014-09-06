modules.define('form', ['i-bem__dom'], function(provide, BEMDOM) {
    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    this.bindTo('submit', function(e) {
                        //this._onSubmit(e);
                        e.preventDefault();
                        console.log('prevented');
                    });

                    /*this.on('submit', function() {
                        console.log('BEM-event');
                    });*/
                }
            }
        }

        /*_onSubmit: function(e) {
            e.preventDefault();
            this.emit('submit');
        }*/
    }));
});