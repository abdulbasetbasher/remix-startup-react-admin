import { Admin, Resource, ListGuesser } from "react-admin";
import { dataProvider } from "ra-data-simple-prisma";
import { UsersList } from "~/components/admin/users/list";
import { UsersCreate } from "~/components/admin/users/create";


export default function App() {
  return (
    <Admin basename="/admin" dataProvider={dataProvider("/admin/api", {})}>
      <Resource name="User" list={UsersList} create={UsersCreate} />
    </Admin>
  );
}