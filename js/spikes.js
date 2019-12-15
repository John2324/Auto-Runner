game.SpikeEntity = me.Entity.extend({
    init: function (x, y, settings) {
      // call the parent constructor
      this._super(me.Entity, 'init', [x, y , settings]);
  
    },
  
    // this function is called by the engine, when
    // an object is touched by something (here collected)
    onCollision : function (response, other) {
  
      // change state
      me.state.change(me.state.GAMEOVER);
  
      return true
    }
  });
  