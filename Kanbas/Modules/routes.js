import * as dao from "./dao.js";
export default function ModuleRoutes(app) {
  const createModule = async (req, res) => {
    const { courseId } = req.params;
    const module = await dao.createModule(courseId, req.body);
    res.json(module);
  };
  app.post("/api/courses/:courseId/modules", createModule);
  const updateModule = async (req, res) => {
    const { moduleId } = req.params;
    const status = await dao.updateModule(moduleId, req.body);
    res.json(status);
  };
  app.put("/api/modules/:moduleId", updateModule);
  const deleteModule = async (req, res) => {
    const status = await dao.deleteModule(req.params.moduleId);
    res.json(status);
  };
  app.delete("/api/modules/:moduleId", deleteModule);
  const findAllModules = async (req, res) => {
    const modules = await dao.findAllModules();
    res.json(modules);
  }
  app.get("/api/modules", findAllModules);
  const findModuleById = async (req, res) => {
    const module = await dao.findModuleById(req.params.moduleId);
    res.json(module);
  };
  app.get("/api/modules/:moduleId", findModuleById);
  const findModulesForCourse = async (req, res) => {
    const { courseId } = req.params;
    const modules = await dao.findModulesForCourse(courseId);
    res.json(modules);
  };
  app.get("/api/courses/:courseId/modules", findModulesForCourse);
}
