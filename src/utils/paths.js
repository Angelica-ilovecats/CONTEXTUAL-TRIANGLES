const basePath = import.meta.env.BASE_URL;

export const withBasePath = (path) => `${basePath}${path.replace(/^\/+/, '')}`;

export const routeFromLocation = (pathname) => {
  const route = pathname.startsWith(basePath) ? pathname.slice(basePath.length) : pathname;
  return `/${route}`.replace(/\/$/, '') || '/';
};
