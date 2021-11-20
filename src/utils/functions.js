import { vars } from "./vars";

export function checkIsActive(pathname, path) {
  const name = "/" + pathname.split("/")[1];

  if (name === path) return true;
  if (name === "/session" && path === "/portfolio") return true;
  if (name === "/publication" && path === "/publications") return true;

  return false;
}
export function getDevice() {
  const windowWidth = window.innerWidth;
  const { tablet, desktop } = vars.resolutions;

  if (windowWidth >= desktop) return "desktop";
  if (windowWidth >= tablet) return "tablet";
  return "mobile";
}
export function setColumns(isLink) {
  const windowWidth = window.innerWidth;
  const { tablet, desktop } = vars.resolutions;

  if (windowWidth >= desktop) return isLink ? 3 : 4;
  if (windowWidth >= tablet) return isLink ? 2 : 3;

  return isLink ? 1 : 2;
}
export function setDimensions(obj) {
  if (!obj) return { height: 1, width: 1 };
  if ("formats" in obj === false) return { height: 1, width: 1 };

  const size =
    obj.formats.small || obj.formats.medium || obj.formats.large || obj.formats.thumbnail;

  if (!size) return { height: 1, width: 1 };
  if (!size.height || !size.width) return { height: 1, width: 1 };

  const scale = size.height / size.width;

  //h/w: 3/2, 4/3,5/4 -- 1/1 -- 4/5, 3/4, 2/3
  //const avaibleScales = [1.5, 1.33, 1.25, 1, 0.8, 0.75, 0.66];

  if (scale <= 0.75) return { height: 2, width: 3 };
  if (scale < 1) return { height: 3, width: 4 };
  if (scale === 1) return { height: 1, width: 1 };
  if (scale <= 1.33) return { height: 4, width: 3 };
  if (scale > 1.33) return { height: 3, width: 2 };
}
export function setImageThumbSrc(obj) {
  if ("formats" in obj === false || !obj) return vars.no_img;

  const device = getDevice();
  const { formats } = obj;
  const { no_img } = vars;

  if (device === "mobile") {
    return formats?.small?.url || formats?.thumbnail?.url || no_img;
  }

  return formats?.medium?.url || formats?.small?.url || formats?.thumbnail?.url || no_img;
}
export function setImageSrc(obj) {
  if ("formats" in obj === false || !obj) return vars.no_img;

  const { formats } = obj;
  const { no_img } = vars;
  const device = getDevice();

  if (device === "mobile") {
    return formats?.small?.url || formats?.thumbnail?.url || no_img;
  }
  if (device === "tablet") {
    return formats?.medium?.url || formats?.large?.url || no_img;
  }
  if (device === "desktop") {
    return formats?.large?.url || formats?.medium?.url || no_img;
  }
}
export function setLeastImageSrc(obj) {
  if ("formats" in obj === false || !obj) return vars.no_img;

  const { formats } = obj;
  const { no_img } = vars;

  return formats?.thumbnail?.url || formats?.small?.url || formats?.medium?.url || no_img;
}
