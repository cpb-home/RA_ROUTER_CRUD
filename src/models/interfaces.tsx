export interface IPostElement {
  id: number;
  content: string;
  created: string;
}

export function getDateDifference(postDate: string): string {
  const currentDate = new Date();
  const postRealDate = new Date(postDate);

  // @ts-expect-error because the date difference
  const hours = parseInt((currentDate - postRealDate)/1000)/60/60;
  let result: string;
  if (hours < 1) {
    result = `${Math.round(hours*60)} мин.`;
  } else if (hours < 24) {
    result = `${Math.round(hours)} час.`;
  } else {
    result = `${Math.round(hours/24)} дн.`;
  }

  return result;
}