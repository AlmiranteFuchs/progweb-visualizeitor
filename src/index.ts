import dotenv from 'dotenv';
dotenv.config();
console.log(`
┬  ┬┬┌─┐┬ ┬┌─┐┬  ┬┌─┐┌─┐┬┌┬┐┌─┐┬─┐
└┐┌┘│└─┐│ │├─┤│  │┌─┘├┤ │ │ │ │├┬┘
 └┘ ┴└─┘└─┘┴ ┴┴─┘┴└─┘└─┘┴ ┴ └─┘┴└─
            by: efi            
`);

//#region API Express Config
const http: any = require("http");
const port: any = process.env.PORT || 3000;

import { App } from "./app";
import { get_alunos_via_xml } from './controller/alunos_controller';

new App().server.listen(port, () => { console.log(`Server is running at http://localhost:${port}`); });

// Test
get_alunos_via_xml("src/database/alunos.xml");

// group by 

