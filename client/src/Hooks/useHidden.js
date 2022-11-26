import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useHidden() {
  const [hidden, setHidden] = useState(false);

  const navigate = useNavigate();

  function checkIfHidden(user, post) {
    if (user) {
      if (user.hiddens.some((obj) => obj.post_id === post.id)) {
        setHidden(true);
      }
    }
  }

  function handleHideClick(user, post, newUser) {
    if (user) {
      const method = hidden ? "DELETE" : "POST";
      const hiddenId = hidden
        ? `${user.hiddens.find((obj) => obj.post_id === post.id).id}`
        : "";

      const body = hidden
        ? ""
        : JSON.stringify({ user_id: user.id, post_id: post.id });

      fetch(`/hiddens/${hiddenId}`, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      }).then((r) => {
        if (r.ok) {
          r.json().then((data) => {
            method === "POST"
              ? newUser((user) => ({
                  ...user,
                  hiddens: [...user.hiddens, data],
                }))
              : newUser((user) => ({
                  ...user,
                  hiddens: [
                    ...user.hiddens.filter((obj) => obj.post_id !== post.id),
                  ],
                }));
            setHidden((hidden) => !hidden);
          });
        } else {
          r.json().then((err) => {
            alert(err.error);
          });
        }
      });
    } else {
      navigate("/login");
    }
  }

  return { hidden, checkIfHidden, handleHideClick };
}
