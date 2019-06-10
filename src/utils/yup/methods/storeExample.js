import * as Yup from "yup";
import yup from "..";

export function storeExample() {
  return yup.object().shape({
    references: yup.array().of(
      yup.object().shape({
        name: yup.string().required(),
        email: yup.string().required(),
        cell: yup.string().required()
      })
    )
  });
}

Yup.addMethod(Yup.object, "storeExample", storeExample);
