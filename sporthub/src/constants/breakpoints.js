export const BREAKPOINTS = {
  MOBILE: '640px',
  TABLET: '768px',
  DESKTOP_SMALL: '992px',
  DESKTOP_MEDIUM: '1200px',
  DESKTOP_LARGE: '1400px',
};

export const MEDIA_QUERIES = {
  MOBILE: `@media (max-width: ${BREAKPOINTS.MOBILE})`,
  TABLET: `@media (max-width: ${BREAKPOINTS.TABLET})`,
  DESKTOP_SMALL: `@media (max-width: ${BREAKPOINTS.DESKTOP_SMALL})`,
  DESKTOP_MEDIUM: `@media (max-width: ${BREAKPOINTS.DESKTOP_MEDIUM})`,
  DESKTOP_LARGE: `@media (max-width: ${BREAKPOINTS.DESKTOP_LARGE})`,
};
