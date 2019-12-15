game.PlayScreen = me.ScreenObject.extend({
    onResetEvent: function() {
        me.levelDirector.loadLevel("level01");
        me.input.bindKey(me.input.KEY.SPACE, "jump", true);
    },

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
    }
});
