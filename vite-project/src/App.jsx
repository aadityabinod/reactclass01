import React from 'react';

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "React",
    lastName: "Js",
    phone: "+1 (212) 555-1212",
    email: "reactjs@example.com",
    isFavorite: false,
  });

  function toggleFavorite() {
    setContact((prevContact) => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite,
    }));
  }

  return (
    <main>
      <article className="card">
        <img   
            src="https://i.pinimg.com/736x/78/09/c2/7809c2c323d9506b9d01c2063ffaf3f6.jpg"
            className="avatar"
            alt="User profile picture" />

        <div className="info">
          <button
            onClick={toggleFavorite}
            aria-pressed={contact.isFavorite}
            className="favorite-button"
          >
            {contact.isFavorite ? "Favorite" : "Not Favorite"}
          </button>

          <h2 className="name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="contact">{contact.phone}</p>
          <p className="contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}