const setHeaders = ((req, res, next) => {
  res.set("X-Frame-Options", "DENY");
  res.set("Pragma", "no-cache");
  res.set("Cache-Control", "no-cache, no-store, must-revalidate");
  res.set("X-XSS-Protection", "1; mode=block");
  res.set("Access-Control-Allow-Origin", "http://localhost:8080");
  res.set("Access-Control-Allow-Headers", "access-control-reques-headers");  // Yes, there is a typo somewhere in the front end
  next();
});

export default setHeaders;