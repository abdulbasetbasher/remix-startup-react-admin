import { Create, SimpleForm, required, TextInput } from 'react-admin';

export const UsersCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="email" validate={[required()]} />
            <TextInput source="username" />
            <TextInput source="password" />
        </SimpleForm>
    </Create>
)