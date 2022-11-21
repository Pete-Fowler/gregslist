import { useState } from "react";

export default function useStar() {
  const [starred, setStarred] = useState(false);

  function checkIfStarred(user, post) {
    if (user) {
      if (user.starred.includes(post.id)) {
        setStarred(true);
      }
    }
  }

  return { checkIfStarred };
}
