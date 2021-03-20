import firebase from "./index";

const vehicles = () => firebase.firestore().collection("test");

export const getTest = async () => {
  const snapshot = await vehicles().get();

  if (snapshot.empty) {
    return [];
  }

  const documents = snapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  console.log(documents);
  return documents;
};

export const getVehiclesbyType = async (type) => {
  const snapshot = await vehicles().where("type", "==", type).limit(2).get();

  if (snapshot.empty) {
    return [];
  }

  const documents = snapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  console.log(documents);
  return documents;
};

export const getVehiclesbyId = async (id) => {
  const snapshot = await vehicles().doc(id).get();
  console.log(snapshot)

  // si es uno solo la snapshot se modifica o se trata de manera distinta

  if (!snapshot.exists) {
    return null;
  }

  return {
    ...snapshot.data(),
    id: snapshot.id,
  };

};
