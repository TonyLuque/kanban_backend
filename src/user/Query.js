function getUsers(parent, args, context, info) {
  return context.prisma.user.findMany();
}

module.exports = {
  getUsers,
};
