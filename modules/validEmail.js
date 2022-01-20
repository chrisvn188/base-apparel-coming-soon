export default function validEmail(email) {
  const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return regex.test(email);
} 