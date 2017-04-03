import {inject} from "aurelia-framework";
import {PatientData} from "./patientData";

@inject(PatientData)
export class List {
  constructor(patientData) {
    this.patientData = patientData;
  }

  activate() {
    return this.patientData
               .getAll()
               .then(patients => this.patients = patients);
  }
}
