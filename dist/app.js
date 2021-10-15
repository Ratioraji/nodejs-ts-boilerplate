"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const winston_1 = __importDefault(require("winston"));
const express_winston_1 = __importDefault(require("express-winston"));
const app = (0, express_1.default)();
const port = 3000;
// const routes : any = routers;
app.use(express_1.default.json());
app.use(express_winston_1.default.logger({
    transports: [
        new winston_1.default.transports.Console()
    ],
    format: winston_1.default.format.combine(winston_1.default.format.json(), winston_1.default.format.prettyPrint(), winston_1.default.format.colorize({ all: true }))
}));
app.use('/api', routes_1.default);
app.listen(port, () => {
    console.log('Server running on port 3000');
});
