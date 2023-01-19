export type Relationship = '' | 'brother' | 'sister' | 'parent' | 'child'
export const relationshipOption: Relationship[] = [
  'brother', 'sister', 'parent', 'child'
]

export type Family = {
  key: string;
  name: string;
  dob: string;
  relationship: Relationship;
};

export type User = {
  id: string;
  name: string;
  eKtp: number | null;
  address: string;
  job: string;
  dob: string;
  phones: (null | number)[];
  family: Family[];
}

export const InitialFamily: Family = {
  key: '',
  name: '',
  dob: '',
  relationship: ''
}

export const InitialUser: User = {
  id: '',
  address: '',
  dob: '',
  eKtp: null,
  job: '',
  name: '',
  phones: [null, null],
  family: [{ ...InitialFamily }]
}

