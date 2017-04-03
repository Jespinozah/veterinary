import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";

let baseUrl = "/patients.json";

@inject(HttpClient)
export class PatientData {
  constructor(httpClient) {
    this.http = httpClient;
  }

  getAll() {
    return this.http.get(baseUrl)
                    .then(response => {
                      return response.content;
                    });
  }

}
