const User = (user) => {
  console.log(user);
    const { name, username,email } = user.user;

  return (
    <div className="col-sm-4 py-3">
      <div className="card shadow">
        <div className="card-header">{username}</div>
        <div className="card-body">{name}</div>
        
      </div>
    </div>
  );
};

export default User;
