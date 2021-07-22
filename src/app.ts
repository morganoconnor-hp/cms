import ConfigServer from "./core/server/ConfigServer";
import Routes from "./core/route/Routes";
import Database from "./database/ConfigDatabase";
import Article from "./database/model/Article";

Routes.build();
ConfigServer.start();