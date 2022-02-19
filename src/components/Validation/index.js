export function emptyCheck(text) {
  if (text === null || text === "" || text === undefined) {
    return { status: false, message: "This field is required" };
  } else {
    return { status: true, message: "success" };
  }
}
