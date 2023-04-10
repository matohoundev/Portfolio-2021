import {
  digitalliData,
  hspData,
  nettoData,
  exvaldata,
  ydgData,
} from "../data/projectData";

export default class JsServices {
  getAllProjects() {
    return [digitalliData, nettoData, hspData, exvaldata, ydgData];
  }

  getProjectByName(name) {
    const project = this.getAllProjects().find(
      (project) => project.cls_name === name
    );

    if (!project) {
      window.location = "/404";
    }

    return project;
  }
}
