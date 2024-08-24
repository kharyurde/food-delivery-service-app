import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const DeliverymanEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="phone" source="phone" />
        <TextInput label="vehicleType" source="vehicleType" />
      </SimpleForm>
    </Edit>
  );
};
