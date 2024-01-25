export const Character = ({ id, name, image, location }) => {
  return (
    <div key={id} className="text-center p-5">
      <h3>{name}</h3>
      <img src={image} alt={name} className="img-fluid rounded-pill" />
      <p>{location}</p>
    </div>
  );
};
