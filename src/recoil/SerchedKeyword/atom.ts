import { atom } from 'recoil';

const atomNumber = atom<number[]>({
  key: 'atomNumber',
  default: [1, 2, 3, 4, 5],
});

export { atomNumber };
