"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const CreateCustomerController_1 = require("./controllers/CreateCustomerController");
const ListCustomersController_1 = require("./controllers/ListCustomersController");
const DeleteCustomerController_1 = require("./controllers/DeleteCustomerController");
const ListCarController_1 = require("./controllers/ListCarController");
const ListGeoController_1 = require("./controllers/ListGeoController");
const ListGeoCitiesController_1 = require("./controllers/ListGeoCitiesController");
const ListFilesController_1 = require("./controllers/ListFilesController");
function routes(fastify, options) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.get("/teste", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return { ok: true };
        }));
        fastify.post("/customer", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new CreateCustomerController_1.CreateCustomerController().handle(request, reply);
        }));
        fastify.get("/customers", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new ListCustomersController_1.ListCustomersController().handle(request, reply);
        }));
        fastify.delete("/customer", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new DeleteCustomerController_1.DeleteCustomerController().handle(request, reply);
        }));
        fastify.get("/measurements", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new ListCarController_1.ListCarController().handle(request, reply);
        }));
        fastify.get("/geodata", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new ListGeoController_1.ListGeoController().handle(request, reply);
        }));
        fastify.get("/geocities", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new ListGeoCitiesController_1.ListGeoCitiesController().handle(request, reply);
        }));
        fastify.get("/videofiles", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new ListFilesController_1.ListFilesController().handle(request, reply);
        }));
    });
}
exports.routes = routes;
