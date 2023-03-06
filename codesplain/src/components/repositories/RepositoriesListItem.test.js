import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import RepositoriesListItem from "./RepositoriesListItem";

function renderComponent() {
  const repository = {
    full_name: "facebook/react",
    language: "Javascript",
    description: "A js library",
    owner: {
      login: "facebook",
    },
    name: "react",
    html_url: "https://github.com/facebook/react",
  };

  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repository} />
    </MemoryRouter>
  );

  return { repository };
}

test("shows a link to the github homepage for this repository", async () => {
  const { repository } = renderComponent();

  await screen.findByRole("img", { name: "Javascript" });

  const link = screen.getByRole("link", {
    name: /github repository/i,
  });
  expect(link).toHaveAttribute("href", repository.html_url);

  // this is telling jest to wait for this element to load before passing/failing; using findByRole()
  // await screen.findByRole("img", { name: "Javascript" });
});

// first param is what import we are trying to fake, second is what is rendered/returned
// jest.mock("../tree/FileIcon", () => {
//   // 'Contents of FileIcon.js'
//   return () => {
//     return "File Icon Component";
//   };
// });

// last case solution
// await act(async () => {
//   await pause();
// });

// const pause = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, 100);
//   });
// };

test("shows a fileicon with the appropriate icon", async () => {
  renderComponent();
  const icon = await screen.findByRole("img", { name: "Javascript" });

  expect(icon).toHaveClass("js-icon");
});

test("shows a link to the code editor page", async () => {
  const {repository} = renderComponent();
  await screen.findByRole("img", { name: "Javascript" });
  
  const link = await screen.findByRole('link', {
    name: new RegExp(repository.owner.login)
  })
  
  expect(link).toHaveAttribute('href', `/repositories/${repository.full_name}`)
});
