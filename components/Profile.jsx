import PromptCard from './PromptCard';

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">{name} Profile</h1>
      <p className="desc text-left">{desc}</p>
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleDelete={() => handleDelete && handleDelete(post)}
          handleEdit={() => handleEdit && handleEdit(post)}
        />
      ))}
    </section>
  );
};

export default Profile;
