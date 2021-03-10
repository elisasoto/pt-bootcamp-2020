import { render, screen } from "@testing-library/react";
import RickyMortyCard from "./RickyMortyCard";

const mockProps = {
  name: "Pawnshop Clerk",
  status: "Alive",
  species: "Alien",
  image: "https://rickandmortyapi.com/api/character/avatar/258.jpeg",
  location: {
    name: "Pawn Shop Planet",
    url: "https://rickandmortyapi.com/api/location/55",
  },
};

describe("RickyMortyCard", () => {
  it("component is visible", () => {
    render(<RickyMortyCard {...mockProps} />);

    const characterCard = screen.queryByTestId("character-card");
    expect(characterCard).toBeVisible();
  });

  it("displays name and status", () => {
    render(<RickyMortyCard {...mockProps} />);

    const charName = screen.queryByText(mockProps.name, { exact: false });
    expect(charName).toBeVisible();

    const charStatus = screen.queryByText(mockProps.status, { exact: false });
    expect(charStatus).toBeVisible();
  });

  it("has a visible image", () => {
    render(<RickyMortyCard {...mockProps} />);

    const charImage = screen.queryByAltText(`character-${mockProps.name}`);
    expect(charImage).toBeVisible();
    expect(charImage).toHaveAttribute("src", mockProps.image);
  });

  it("has a location and species", () => {
    render(<RickyMortyCard {...mockProps} />);

    const charLoc = screen.queryByText(mockProps.location.name, {
      exact: false,
    });
    expect(charLoc).toBeVisible();
    const charSpecies = screen.queryByText(mockProps.species, { exact: false });
    expect(charSpecies).toBeVisible();
  });
});
