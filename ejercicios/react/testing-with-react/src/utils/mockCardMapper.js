export const mockCharMapper = (characterData) => {
  if (!characterData || !Object.keys(characterData).length) {
    return null;
  }

  return {
    name: characterData.name,
    status: characterData.status,
    species: characterData.species,
    image: characterData.image,
    location: {
      name: characterData.location.name,
      url: characterData.location.url,
    },
  };
};
