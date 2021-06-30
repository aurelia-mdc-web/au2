import { Config } from "../../services/config-dev";

export class Dashboard {
    constructor(
        private _config: Config
    ) {
        console.log("Using config", this._config);
    }
}
