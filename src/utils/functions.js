export function checkIsActive(pathname, path) {
  const name = "/" + pathname.split("/")[1];

  if (name === path) return true;
  if (name === "/session" && path === "/portfolio") return true;
  if (name === "/publication" && path === "/publications") return true;

  return false;
}
