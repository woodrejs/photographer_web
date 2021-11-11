import { vars } from "./vars";

export function checkIsActive(pathname, path) {
  const name = "/" + pathname.split("/")[1];

  if (name === path) return true;
  if (name === "/session" && path === "/portfolio") return true;
  if (name === "/publication" && path === "/publications") return true;

  return false;
}
export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
export function getDevice() {
  const windowWidth = window.innerWidth;
  const { tablet, desktop } = vars.resolutions;

  if (windowWidth >= desktop) return "desktop";
  if (windowWidth >= tablet) return "tablet";
  return "mobile";
}
export function getImageSize(obj) {
  switch (getDevice()) {
    case "mobile":
      return obj.formats.small.url;
    case "tablet":
      return obj.formats.medium.url;
    case "desktop":
      return obj.formats.large.url;
  }
}
export function setColumns(isLink) {
  const windowWidth = window.innerWidth;
  const { tablet, desktop } = vars.resolutions;

  if (windowWidth >= desktop) return isLink ? 3 : 4;
  if (windowWidth >= tablet) return isLink ? 2 : 3;

  return isLink ? 1 : 2;
}
export function setDimension() {
  if (getDevice() === "mobile") return 1;

  return getRandomInt(1, 3);
}
