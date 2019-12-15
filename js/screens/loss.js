game.LossScreen = me.ScreenObject.extend({
    onResetEvent: function() {
        me.levelDirector.loadLevel("level01");
        me.input.bindKey(me.input.KEY.ENTER, "enter", true);
        me.input.bindPointer(me.input.pointer.LEFT, me.input.KEY.ENTER);
        this.handler = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge) {
            if (action === "enter") {
            me.state.change(me.state.PLAY);
            }
       });
    },

    onDestroyEvent: function() {
    }

});
