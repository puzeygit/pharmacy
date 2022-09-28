export const localsMiddle = (req, res, next) => {
  res.locals.user = req.session.user;
  next();
};

export const deleteProtect = (req, res, next) => {
  if (req.session.next) {
    return next();
  }
  return res.sendStatus(401);
};