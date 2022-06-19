function actionGenerate(actionType, actionPayLoad) {
  return {
    type: actionType,
    payLoad: actionPayLoad,
  };
}
export const appendMedicines = (data) => actionGenerate("medicines", data);
export const actionFormik = (data) => actionGenerate("formik", data);
export const actionCurLocation = (data) => actionGenerate("path", data);
export const actionLoad = (data) => actionGenerate("load", data);
export const appendHealthCareProd = (data) =>
  actionGenerate("healthCare", data);
export const actionToken = (data) => actionGenerate("token", data);
