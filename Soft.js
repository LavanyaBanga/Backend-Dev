// Automatically filter deleted docs
schema.pre(/^find/, function (next) {
  this.where({ isDeleted: false });
  next();
});
// Automatically filter deleted docs
schema.pre(/^find/, function (next) {
  this.where({ isDeleted: false });
  next();
});