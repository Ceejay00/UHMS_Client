export default function validateInfo(values) {
  let errors = {};

  if (!values.firstName.trim()) {
    errors.firstName = "Firstname Required";
  }
  if (!values.lastName.trim()) {
    errors.lastName = "Lastname Required";
  }
  if (!values.phoneNo.trim()) {
    errors.phoneNo = "phoneNo Required";
  }
  if (!values.matricNumber.trim()) {
    errors.matricNumber = "matricNo Required";
  }
  if (!values.faculty.trim()) {
    errors.faculty = "Select your Faculty";
  }
  if (!values.level.trim()) {
    errors.level = "Select your level";
  }
  if (!values.department.trim()) {
    errors.department = "Select your department";
  }
  if (!values.password.trim()) {
    errors.password = "Enter a Password";
  } else if (values.password.length <= 8) {
    errors.password = "Password needs to be 8 characters or bellor";
  }
  if (!values.confirmPass.trim()) {
    errors.confirmPass = "Enter a Password";
  } else if (values.confirmPass !== values.password) {
    errors.confirmPass = "Password do not match";
  }
  return errors;
}
