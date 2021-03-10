import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("Header is Visible", () => {
    render(<Header />);

    const headerComponent = screen.queryByTestId("header", {
      exact: false,
    });
    expect(headerComponent).toBeVisible();
  });

  it("List is visible and lenght of 4", () => {
    render(<Header />);

    const list = screen.queryAllByTestId("list", {
      exact: false,
    });
    
    expect(list.length).toBe(4)

    list.forEach((element)=>{
        expect(element).toBeVisible()
    })    
  });

  it("Button has text Dark Mode", () => {
    render(<Header />);

    const button = screen.queryByTestId("button");
    expect(button).toHaveTextContent('Toggle dark mode');
  });

  it('Link Source equal to TheBridge.tec', ()=>{
    render(<Header />)
    
    const image = screen.queryByTestId('image')
    expect(image).toBeVisible();
    expect(image).toHaveAttribute('src', 'https://thebridge.tech/blog/wp-content/uploads/2020/10/logo-the-bridge-01.png')
  })
  

});
