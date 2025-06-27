import { Server } from "./infrastructure/input/server/Server";
import { AppRoutes } from "./infrastructure/input/routes/Routes";

(() => {
  main();
})();

async function main() {

  new Server({ port: 3000, routes: AppRoutes.routes }).start();
}