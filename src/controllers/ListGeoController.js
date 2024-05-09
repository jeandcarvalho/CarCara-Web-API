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
exports.ListGeoController = void 0;
const ListGeoService_1 = require("../services/ListGeoService");
class ListGeoController {
    handle(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const listGeodataService = new ListGeoService_1.ListGeoService();
            const geo = yield listGeodataService.execute();
            reply.send(geo);
        });
    }
}
exports.ListGeoController = ListGeoController;
