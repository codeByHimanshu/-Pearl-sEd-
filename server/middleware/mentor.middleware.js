export const isMentor = (req, res, next) => {
    console.log("Mentor middleware triggered");
  if (req.user && req.user.role === "mentor") {
    next();
  } else {
    return res.status(403).json({ error: "Access denied. Mentor role required." });
  }
};
