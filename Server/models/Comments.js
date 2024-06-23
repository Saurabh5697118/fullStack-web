module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define("Comments", {
    CommentsBody: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Comments;
};
