export type ParsePathReturnValue = {
  article: string;
  category: string;
  subCategory: string | undefined;
};

export type ParsePathType = (path: string) => ParsePathReturnValue;

export const parsePath: ParsePathType = (path: string) => {
  const splitPath = path.split('/');
  const article = splitPath.pop()!;
  const [category, subCategory] = splitPath;

  return { article, category, subCategory };
};
