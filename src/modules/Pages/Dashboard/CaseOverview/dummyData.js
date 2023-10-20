
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const listNewCase = [
  {
    id: 'new1',
    caseName: 'Case Name 01',
    location: 'Viet Nam',
    progress: getRandomInt(1, 100),
    status: 'new',
  },
  {
    id: 'new2',
    caseName: 'Case Name 02',
    location: 'Viet Nam',
    progress: getRandomInt(1, 100),
    status: 'new',
  },
  {
    id: 'new3',
    caseName: 'Case Name 03',
    location: 'Viet Nam',
    progress: getRandomInt(1, 100),
    status: 'new',
  }
];

export const listInProgressCase = [
  {
    id: 'inprogress1',
    caseName: 'Case Name 04',
    location: 'Viet Nam',
    progress: getRandomInt(1, 100),
    status: 'inprogress',
  },
  {
    id: 'inprogress2',
    caseName: 'Case Name 05',
    location: 'Viet Nam',
    progress: getRandomInt(1, 100),
    status: 'inprogress',
  },
];

export const listClosedCase = [
  {
    id: 'closed1',
    caseName: 'Case Name 06',
    location: 'Viet Nam',
    progress: getRandomInt(1, 100),
    status: 'closed',
  },
];
