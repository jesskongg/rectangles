const setHeaders = ((req, res, next) => {
  res.set("X-Frame-Options", "DENY");
  res.set("Pragma", "no-cache");
  res.set("Cache-Control", "no-cache, no-store, must-revalidate");
  res.set("X-XSS-Protection", "1; mode=block");
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

export default setHeaders;