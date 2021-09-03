const { getUsers } = require("../users/Query");

function feed(parent, args, context, info) {
  return context.prisma.link.findMany();
}

module.exports = {
  feed,
  getUsers,
};
