import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const DeliverymanCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="phone" source="phone" />
        <TextInput label="vehicleType" source="vehicleType" />
      </SimpleForm>
    </Create>
  );
};
