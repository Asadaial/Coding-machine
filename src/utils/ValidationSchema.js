import * as Yup from "yup";
import {
    LEAD_SOURCE,
    LEAD_TYPE,
    EMAIL,
    FIRST_NAME,
    LAST_NAME,
    ALT_EMAIL,
    HOME_PHONE,
    MOBILE_PHONE,
    WORK_PHONE
} from "./Constants";


export const leadSourceValidation = {
  [LEAD_SOURCE]: Yup.string().required("Required"),
};
export const leadtypeValidation = {
  [LEAD_TYPE]: Yup.string().required("Required"),
};
export const emailValidation = {
    [EMAIL]: Yup.string().email().required("Required"),
  };
export const firstNameValidation={
    [FIRST_NAME]: Yup.string().required("Required"),
}
export const lastNameValidation={
    [LAST_NAME]: Yup.string().required("Required"),
}
export const altEmailValidation={
    [ALT_EMAIL]: Yup.string().email().required("Required"),
}
export const homePhoneValidation={
    [HOME_PHONE]: Yup.string().required("Required"),
}
export const mobilePhoneValidation={
    [MOBILE_PHONE]: Yup.string().required("Required"),
}
export const workPhoneValidation={
    [WORK_PHONE]: Yup.string().required("Required"),
}

// export const passwordValidation = {
//   [PASSWORD]: Yup.string()
//     .required("Required")
//     .matches(
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
//       "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
//     ),
// };

export const emailSchema = Yup.object().shape({
  ...emailValidation,
});


export const mockupSchema = Yup.object().shape({
  ...leadSourceValidation,
  ...leadtypeValidation,
  ...emailValidation,
  ...firstNameValidation,
  ...lastNameValidation,
  ...altEmailValidation,
  ...homePhoneValidation,
  ...mobilePhoneValidation,
  ...workPhoneValidation

});
