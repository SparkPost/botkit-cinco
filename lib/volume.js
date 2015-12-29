var db
  , min = 1
  , max = 10
  , defaultVal = 7
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