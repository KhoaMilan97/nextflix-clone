import { useState, useContext, useEffect } from "react";
import { FirebaseContext } from "../context/firebase";

export default function UseContent(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          ...doc.data(),
          docID: doc.id,
        }));
        setContent(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [target]);

  return { [target]: content };
}
