const authorize = (roles = []) => {
  return (req, res, next) => {
    const userRole = req.headers['x-role']; 
    if (!userRole || !roles.includes(userRole)) {
      return res.status(403).json({ error: "Access Denied" });
    }
    next();
  };
};

module.exports = authorize;