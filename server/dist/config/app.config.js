"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('app', () => ({
    host: process.env.HOST || 'localhost',
    port: parseInt(process.env.PORT, 10) || 8080,
}));
//# sourceMappingURL=app.config.js.map