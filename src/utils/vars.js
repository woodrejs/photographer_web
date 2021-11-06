const resolutions = {
  mobile: 479,
  tablet: 767,
  desktop: 991,
};
const device = {
  mobile: `(min-width: ${resolutions.mobile}px)`,
  tablet: `(min-width: ${resolutions.tablet}px)`,
  desktop: `(min-width: ${resolutions.desktop}px)`,
};

export const vars = {
  resolutions,
  device,
  shadow: `  -webkit-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.25);`,
};
