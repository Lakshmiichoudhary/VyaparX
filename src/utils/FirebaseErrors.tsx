export const getFirebaseErrorMessage = (
  code: string
) => {
  switch (code) {
    case "auth/invalid-email":
      return "Invalid email address";

    case "auth/user-not-found":
      return "User not found";

    case "auth/wrong-password":
      return "Incorrect password";

    case "auth/invalid-credential":
      return "Invalid email or password";

    case "INVALID_LOGIN_CREDENTIALS":
      return "Invalid email or password";

    case "auth/email-already-in-use":
      return "Email already registered";

    case "auth/weak-password":
      return "Password should be at least 6 characters";

    case "auth/network-request-failed":
      return "Network error";

    default:
      return "Something went wrong";
  }
};