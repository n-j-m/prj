"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    // add altering commands here, calling 'done' when finished
    migration.removeColumn("Profiles", "firstname").
      done(function() {
        migration.removeColumn("Profiles", "lastname").
        done(function() {
          migration.renameColumn("Profiles", "nickname", "handle").
          done(done);
        })
      });
  },

  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    migration.addColumn("Profiles", "firstname", DataTypes.STRING).
      done(function() {
        migration.addColumn("Profiles", "lastname", DataTypes.STRING).
          done(function() {
            migration.renameColumn("Profiles", "handle", "nickname").
              done(done);
          })
      });
  }
};
