import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useStar() {
  const [starred, setStarred] = useState(false);
  const navigate = useNavigate();

  function checkIfStarred(user, post) {
    if (user) {
      if (user.starred.includes(post.id)) {
        setStarred(true);
      }
    }
  }

  function handleStarClick(user, post, newUser) {
    setStarred((starred) => !starred);

    const body = starred ? { unstar: post.id } : { star: post.id };

    if (user) {
      fetch(`/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }).then((r) => {
        if (r.ok) {
          r.json().then((data) => newUser(data));
        } else {
          r.json().then((err) => console.log(err));
        }
      });
    } else {
      navigate("/login");
    }
  }

  return { starred, checkIfStarred, handleStarClick };
}
