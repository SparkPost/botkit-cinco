var db
  , min = 1
  , max = 10
  , defaultVal = 7
  , _ = require('lodash')
  , volume = module.exports;

volume.min = min;
volume.max = max;

db = {
  volume: {}
};

volume.value = function(room) {
  return db.volume[room] || (min - 1);
};

volume.louder = function(room) {
  db.volume[room]++;
  if (db.volume[room] > max) {
    db.volume[room] = max;
  }
};

volume.loudest = function(room) {
  db.volume[room] = 10;
};

volume.quieter = function(room) {
  db.volume[room]--;
  if (db.volume[room] < min) {
    db.volume[room] = min;
  }
};

volume.quietest = function(room) {
  db.volume[room] = 1;
};

volume.setToDefault = function(room) {
  db.volume[room] = defaultVal;
};

volume.defaultIfNotSet = function(room) {
  if (!db.volume[room]) {
    volume.setToDefault(room);
  }
};

volume.loudEnough = function(room) {
  return _.random(pow(volume.min), pow(volume.max)) <= pow(volume.value(room));
};

function pow(exp) {
  return Math.pow(2, exp);
}