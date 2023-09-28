const ShowUser = ({ name, nickName, contact }) => {
  //   const twitterurl = contact.twitter;
  //   console.log(twitterurl);

  const twitterUrl = contact && contact.twitter;

  return (
    <div>
      <h1>{name}</h1>
      <p>Nick Name:{nickName || "Looser"}</p>
      <img src={twitterUrl} alt={name} />
    </div>
  );
};
export default ShowUser;
