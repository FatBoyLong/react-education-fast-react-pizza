import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";

import MenuItem from "./MenuItem";

function Menu() {
  // Custom hook from react-router for getting data from loader function
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

// Convention name of function which will fetch data for Menu component
export async function loader() {
  const menu = await getMenu();
  return menu;
}

loader();

export default Menu;
