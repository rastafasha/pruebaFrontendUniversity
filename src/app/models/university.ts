export class University {
  id?: number;
    universityName: string;
    infoUniversity: string;
    pensumName: string;
    infoPensum: string;

  constructor(
    id: number,
    universityName: string,
    infoUniversity: string,
    pensumName: string,
    infoPensum: string,
  ){
    this.id = id;
    this.universityName = universityName,
    this.infoUniversity=infoUniversity,
    this.pensumName=pensumName,
    this.infoPensum= infoPensum
  }

}

