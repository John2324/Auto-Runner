/* Game namespace */
var game = {
    // Run on page load.
    onload : function () {
        // Initialize the video.
        if (!me.video.init(960, 640, {wrapper : "screen", scale : "auto", scaleMethod: "fixed-width"})) {
            alert("Your browser does not support HTML5 canvas.");
            return;
        }

        // Initialize the audio.
        me.audio.init("mp3,ogg");

        // set and load all resources.
        // (this will also automatically switch to the loading screen)
        me.loader.preload(game.resources, this.loaded.bind(this));
    },

    // Run on game resources loaded.
    loaded : function () {

        // Setting up game screens
        me.state.set(me.state.PLAY, new game.PlayScreen());
        me.state.set(me.state.GAMEOVER, new game.LossScreen());

        // Entities
        me.pool.register("dead_archer", game.PlayerEntity);
        me.pool.register("stonespike", game.SpikeEntity);

        // Set a global fading transition for the screen
        me.state.transition("fade", "#000", 250);

        // Key bindings
        me.input.bindKey(me.input.KEY.SPACE, "jump", true);

        // Start the game.
        me.state.change(me.state.PLAY);
    }
};
