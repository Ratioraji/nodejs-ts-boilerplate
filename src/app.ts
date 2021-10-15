import express, {
    Application
} from "express";
import routers from "./routes";
import winston from "winston";
import expressWinston from "express-winston";

(async ()=> {
    const app: Application = express();
    const port: number = 3000;
    // const routes : any = routers;

    app.use(express.json());

    app.use(expressWinston.logger({
        transports: [
            new winston.transports.Console()
        ],
        format: winston.format.combine(
            winston.format.json(),
            winston.format.prettyPrint(),
            winston.format.colorize({
                all: true
            })
        )
    }));
    app.use('/api', routers);

    app.listen(port, () => {
        console.log('Server running on port 3000');
    });
})();