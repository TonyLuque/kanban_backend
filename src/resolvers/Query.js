const { getUsers } = require("../user/Query");

function feed(parent, args, context, info) {
  return context.prisma.link.findMany();
}

module.exports = {
  feed,
  getUsers,
};
