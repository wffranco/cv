const CurrentYear = new Date().getFullYear();

export function dateDiff(from: string | number, to: string | number): number {
  return (getUTCDate(to).getTime() - getUTCDate(from).getTime());
}

export function elapsedYears(from?: string | number): number {
  if (from === undefined) return 0;
  if (+from > 0 && +from < 100) return +from;

  if (typeof from === 'string') {
    if (!/^\d{4}(?:-\d{2}){0,2}$/.test(from)) return 0;
    return (getUTCDate().getTime() - getUTCDate(from).getTime()) / 1000 / 60 / 60 / 24 / 365.25;
  }

  if (from > 1900 && from <= CurrentYear) return CurrentYear - from + .1;

  return 0;
}

/** Format experience time */
export function formatExp(value: string | number): string {
  const elapsed = elapsedYears(value);
  if (elapsed < 1) return '1- years';
  return `${Math.floor(elapsed)}+ years`;
}

/** Format date: yyyy-mm-dd to MMM yyyy */
export function formatDate(value?: string | number): string {
  return getUTCDate(value).toLocaleString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });
}

/** Get UTC date from yyyy-mm-dd */
export function getUTCDate(value?: string | number): Date {
  if (!value) return new Date();
  const [, year, month, day] = String(value).match(/^(\d{4})(?:-(\d{2}))?(?:-(\d{2}))?$/) || [];
  return new Date(`${year || CurrentYear}-${month || '01'}-${day || '01'}T00:00:00Z`);
}

type RecursiveFn<T> = () => T | RecursiveFn<T>;
export function valueOf<T>(input: RecursiveFn<T> | T): T {
  return input instanceof Function ? valueOf(input()) : input;
}
