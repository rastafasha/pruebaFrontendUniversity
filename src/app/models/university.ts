export class University {
  id?: string;
    universityName: string;
    infoUniversity: string;
    pensumName: string;
    infoPensum: string;

  constructor(
    universityName: string,
    infoUniversity: string,
    pensumName: string,
    infoPensum: string,
  ){
    this.universityName = universityName,
    this.infoUniversity=infoUniversity,
    this.pensumName=pensumName,
    this.infoPensum= infoPensum
  }

}
