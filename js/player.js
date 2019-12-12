game.PlayerEntity = me.Entity.extend({
    /**
     * constructor
     */
    init : function (x, y, settings) {
      // call the constructor
      this._super(me.Entity, 'init', [x, y, settings]);
  
      // max walking & jumping speed
      this.body.setMaxVelocity(8, 18);
      this.body.setFriction(0.5, 0);
  
      // set the display to follow our position on both axis
      me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH, 0.5);
  
      // ensure the player is updated even when outside of the viewport
      this.alwaysUpdate = true;

      // define a jumping animation
      this.renderable.addAnimation("start", [18, 19, 20, 21, 22, 23]);
  
      // define a basic standing animation
      this.renderable.addAnimation("run", [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], 30);
  
      // define a walking animation
      this.renderable.addAnimation("jumping", [0, 1, 2, 3, 4, 5]);
  
      // set initial standing animation as default
      this.renderable.setCurrentAnimation("start");
    },
  
    /**
     * update the entity
     */
    update : function (dt) {
  
        if (me.input.isKeyPressed('left')) {
  
            // flip the sprite on horizontal axis
            this.renderable.flipX(true);
            // update the default force
            this.body.force.x = -this.body.maxVel.x;
            // change to the walking animation
            if (!this.renderable.isCurrentAnimation("run")) {
                this.renderable.setCurrentAnimation("run");
            }
        } else if (me.input.isKeyPressed('right')) {
  
            // unflip the sprite
            this.renderable.flipX(false);
            // update the entity velocity
            this.body.force.x = this.body.maxVel.x;
            // change to the walking animation
            if (!this.renderable.isCurrentAnimation("run")) {
                this.renderable.setCurrentAnimation("run");
            }            
        } else {
            this.body.force.x = 0;
            // change to the standing animation
            this.renderable.setCurrentAnimation("start");
        }
  
        if (me.input.isKeyPressed('jump')) {

          if (!this.body.jumping && !this.body.falling)
          {
              // set current vel to the maximum defined value
              // gravity will then do the rest
              this.body.force.y = -this.body.maxVel.y
          }
        } else {
          this.body.force.y = 0;
        }
  
        // apply physics to the body (this moves the entity)
        this.body.update(dt);
  
        // handle collisions against other shapes
        me.collision.check(this);
  
        // return true if we moved or if the renderable was updated
        return (this._super(me.Entity, 'update', [dt]) || this.body.vel.x !== 0 || this.body.vel.y !== 0);
    },
  
    /**
     * colision handler
     * (called when colliding with other objects)
     */
    onCollision : function (response, other) {
      // Make all other objects solid
      return true;
    }
  });