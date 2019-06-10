import * as Yup from "yup";

export function uniqueProperty(propertyName, message, fieldArray) {
  return this.test("unique", message, function testProperty(value) {
    const { parent, createError } = this;
    const options = [...parent];
    const currentIndex = options.indexOf(value);
    const subOptions = options.slice(0, currentIndex);
    if (
      subOptions.some(option => option[propertyName] === value[propertyName]) &&
      value[propertyName]
    ) {
      const arrayRegexp = /\[(\d+)\]$/g;
      const path = fieldArray
        ? this.path.replace(arrayRegexp, "")
        : `${this.path}.${propertyName}`;
      throw createError({
        path,
        message
      });
    }
    return true;
  });
}

export function customRequired(propertyName, message) {
  const isAllEmpty = itemArray =>
    !itemArray.key.length && itemArray.values.every(item => !item.value.length);

  const isKeyEmpty = itemArray => !itemArray.key.length;

  return this.test("customRequired", message, function testProperty(value) {
    const { path } = this;

    if (isAllEmpty(value)) {
      return true;
    } else if (isKeyEmpty(value)) {
      throw this.createError({
        path: `${path}.${propertyName}`,
        message
      });
    }
    return true;
  });
}

export function uniqueItem(message) {
  return this.test(
    "unique",
    message,
    array => array.length === new Set(array).size
  );
}

Yup.addMethod(Yup.object, "uniqueProperty", uniqueProperty);
Yup.addMethod(Yup.object, "customRequired", customRequired);
Yup.addMethod(Yup.array, "uniqueItem", uniqueItem);
