game.LossScreen = me.ScreenObject.extend({
    onResetEvent: function() {
        me.levelDirector.loadLevel("level02");
        me.input.bindKey(me.input.KEY.SPACE, "enter", true);
        me.input.bindPointer(me.input.pointer.LEFT, me.input.KEY.SPACE);
        this.handler = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge) {
            if (action === "enter") {
            me.state.change(me.state.PLAY);
            }
       });
    },

    onDestroyEvent: function() {
    }

});
