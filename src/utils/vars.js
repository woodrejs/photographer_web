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
  no_img:
    "https://images.unsplash.com/photo-1513031300226-c8fb12de9ade?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
};
