import { List, Datagrid, TextField, DateField, BooleanField } from 'react-admin';

export const UsersList = () => (
    <List>
        <Datagrid>
            <TextField source="username" />
            <TextField source="email" />
        </Datagrid>
    </List>
)